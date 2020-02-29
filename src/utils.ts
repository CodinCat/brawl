import Entity from './Entities/Entity'

export function getCenterPoint(e: Entity) {
  return {
    x: e.position.x + Math.floor(e.rect.width / 2),
    y: e.position.y + Math.floor(e.rect.height / 2),
  }
}
