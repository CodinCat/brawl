import Brawler from '../Entities/Brawler'
import Bullet from '../Entities/Bullet'

export enum AIControlledBrawlerCommand {
  Attack,
  MoveUp,
  MoveDown,
  MoveLeft,
  MoveRight,
  RotateLeft,
  RotateRight,
}
export class AIControlledBrawler {
  public commandQueue = []
  attack() {
    this.commandQueue.push(AIControlledBrawlerCommand.Attack)
  }
  moveUp() {
    this.commandQueue.push(AIControlledBrawlerCommand.MoveUp)
  }
  moveDown() {
    this.commandQueue.push(AIControlledBrawlerCommand.MoveDown)
  }
  moveLeft() {
    this.commandQueue.push(AIControlledBrawlerCommand.MoveLeft)
  }
  moveRight() {
    this.commandQueue.push(AIControlledBrawlerCommand.MoveRight)
  }
  rotateLeft() {
    this.commandQueue.push(AIControlledBrawlerCommand.RotateLeft)
  }
  rotateRight() {
    this.commandQueue.push(AIControlledBrawlerCommand.RotateRight)
  }
}

type AIFn = (
  ownedBrawler: AIControlledBrawler,
  brawlers: Brawler[],
  bullets: Bullet[],
) => void

export default AIFn
