import Canvas from './Canvas'
import Entity from '../Entities/Entity'
import Brawler from '../Entities/Brawler'

export default class DrawSystem {
  constructor(private canvas: Canvas) {
    this.canvas = canvas
  }

  public draw(entities: Entity[] = []) {
    entities.forEach(entity => {
      switch (entity.type) {
        case 'RectEntity':
          this.drawRect(entity)
          break

        case 'BrawlerEntity':
          this.drawRect(entity)
          this.drawHPBar(entity)
          break
      }
    })
  }

  private drawRect(entity: Entity) {
    this.canvas.drawRotatedRect(
      entity.position.x,
      entity.position.y,
      entity.rect.width,
      entity.rect.height,
      entity.color,
      entity.radian,
    )
  }

  private drawHPBar(brawler: Brawler) {
    this.canvas.drawRotatedRect(
      brawler.position.x - 0.5,
      brawler.position.y - 3,
      brawler.rect.width + 1,
      2,
      'black',
      0,
    )
    if (brawler.hp.value > 0) {
      this.canvas.drawRotatedRect(
        brawler.position.x,
        brawler.position.y - 2.5,
        (brawler.hp.value / brawler.hp.full) * brawler.rect.width,
        1,
        'tomato',
        0,
      )
    }
  }
}
