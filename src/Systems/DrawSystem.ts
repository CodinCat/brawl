import Canvas from './Canvas'
import Entity from '../Entities/Entity'

export default class DrawSystem {
  constructor(private canvas: Canvas) {
    this.canvas = canvas
  }

  public draw(entities: Entity[] = []) {
    entities.forEach(entity => {
      if (entity.type === 'RectEntity') {
        this.canvas.drawRotatedRect(
          entity.position.x,
          entity.position.y,
          entity.rect.width,
          entity.rect.height,
          entity.color,
          entity.degrees,
        )
      }
    })
  }
}
