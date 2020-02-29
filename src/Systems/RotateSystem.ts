import Entity from '../Entities/Entity'

const ROTATE_SPEED = 0.07

export default class RotateSystem {
  public left(entity: Entity, radian = ROTATE_SPEED) {
    entity.radian -= radian
  }
  public right(entity: Entity, radian = ROTATE_SPEED) {
    entity.radian += radian
  }
}
