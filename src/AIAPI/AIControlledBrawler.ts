import AIControlledBrawlerCommand from './AIControlledBrawlerCommand'

export default class AIControlledBrawler {
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
