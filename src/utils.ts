import Entity from './Entities/Entity'

export function getCenterPoint(e: Entity) {
  switch (e.type) {
    case 'RectEntity':
      return {
        x: e.position.x + Math.floor(e.rect.width / 2),
        y: e.position.y + Math.floor(e.rect.height / 2),
      }

    case 'BrawlerEntity':
      return {
        x: e.position.x,
        y: e.position.y,
      }
  }
}
