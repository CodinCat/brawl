import BrawlerCommand from '../Components/BrawlerCommand'
import Entity from '../Entities/Entity'
import MoveSystem from './MoveSystem'
import RotateSystem from './RotateSystem'

export default class BrawlerCommandSystem {
  constructor(
    private moveSystem: MoveSystem,
    private rotateSystem: RotateSystem,
  ) {
    this.moveSystem = moveSystem
    this.rotateSystem = rotateSystem
  }
  public executeCommand(entity: Entity, command: BrawlerCommand) {
    switch (command) {
      case BrawlerCommand.Left:
        this.moveSystem.moveX(entity, -1)
        break

      case BrawlerCommand.Up:
        this.moveSystem.moveY(entity, -1)
        break

      case BrawlerCommand.Right:
        this.moveSystem.moveX(entity, 1)
        break

      case BrawlerCommand.Down:
        this.moveSystem.moveY(entity, 1)
        break

      case BrawlerCommand.RotateLeft:
        this.rotateSystem.left(entity)
        break

      case BrawlerCommand.RotateRight:
        this.rotateSystem.right(entity)
        break

      case BrawlerCommand.Attack:
        console.log('attack')
        break
    }
  }
}
