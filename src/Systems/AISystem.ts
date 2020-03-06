import AIBrawler from '../Entities/AIBrawler'
import AIControlledBrawlerCommand from '../AIAPI/AIControlledBrawlerCommand'
import serializeGame from '../AIAPI/serializeGame'
import Game from './Game'

export default class AISystem {
  constructor(private game: Game) {
    this.game = game
  }

  public update(brawler: AIBrawler) {
    brawler.ai.fn(brawler.ai.brawlerAPI, serializeGame(this.game))
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
