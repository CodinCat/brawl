import Entity from '../Entities/Entity'

export default class RotateSystem {
  public left(entity: Entity, degrees = 10) {
    entity.degrees -= degrees
  }
  public right(entity: Entity, degrees = 10) {
    entity.degrees += degrees
  }
}
