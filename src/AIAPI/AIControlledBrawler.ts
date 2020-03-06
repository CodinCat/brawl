import AIControlledBrawlerCommand from './AIControlledBrawlerCommand'
import AIBrawler from '../Entities/AIBrawler'
import { serializeBrawler } from './serializeGame'

export default class AIControlledBrawler {
  public commandQueue = []
  public state: ReturnType<typeof serializeBrawler>

  constructor(brawler: AIBrawler) {
    this.state = serializeBrawler(brawler)
  }

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
