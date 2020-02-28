import Position from '../Components/Position'
import Entity from '../Entities/Entity'

export default class MoveSystem {
  public moveX(entity: Entity, x: number) {
    entity.position.x += x
  }
  public moveY(entity: Entity, y: number) {
    entity.position.y += y
  }
  public move(entity: Entity, position: Position) {
    this.moveX(entity, position.x)
    this.moveY(entity, position.y)
  }
  public moveTo(entity: Entity, position: Position) {
    entity.position.x = position.x
    entity.position.y = position.y
  }
}
