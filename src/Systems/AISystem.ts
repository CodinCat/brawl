import Brawler from '../Entities/Brawler'
import Bullet from '../Entities/Bullet'
import AI, { AIControlledBrawlerCommand } from '../AIAPI/AI'
import Game from './Game'
import AIBrawler from '../Entities/AIBrawler'

export default class AISystem {
  constructor(private game: Game) {
    this.game = game
  }
  public update(brawler: AIBrawler) {
    brawler.ai.fn(brawler.ai.brawlerAPI, this.game.brawlers, this.game.bullets)
    this.flushCommands(brawler)
  }
  private flushCommands(brawler: AIBrawler) {
    Object.keys(brawler.actionState).forEach(key => {
      brawler.actionState[key] = false
    })
    brawler.ai.brawlerAPI.commandQueue.forEach(commandCode => {
      const key = this.getActionStateKey(commandCode)
      brawler.actionState[key] = true
    })
    brawler.ai.brawlerAPI.commandQueue = []
  }
  private getActionStateKey(command: AIControlledBrawlerCommand) {
    switch (command) {
      case AIControlledBrawlerCommand.MoveLeft:
        return 'left'

      case AIControlledBrawlerCommand.MoveUp:
        return 'up'

      case AIControlledBrawlerCommand.MoveRight:
        return 'right'

      case AIControlledBrawlerCommand.MoveDown:
        return 'down'

      case AIControlledBrawlerCommand.RotateLeft:
        return 'rotateLeft'

      case AIControlledBrawlerCommand.RotateRight:
        return 'rotateRight'

      case AIControlledBrawlerCommand.Attack:
        return 'attack'
    }
  }
}
