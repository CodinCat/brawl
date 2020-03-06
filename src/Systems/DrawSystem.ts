import Canvas from './Canvas'
import Entity from '../Entities/Entity'
import Brawler from '../Entities/Brawler'
import RectEntity from '../Entities/RectEntity'

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
          this.drawBrawler(entity)
          this.drawHPBar(entity)
          if (entity.hp.value <= 0) {
            this.drawDiedState(entity)
          } else {
            this.drawBulletCount(entity)
          }
          break
      }
    })
  }

  private drawRect(entity: RectEntity) {
    this.canvas.drawRotatedRect(
      entity.position.x,
      entity.position.y,
      entity.rect.width,
      entity.rect.height,
      entity.color,
      entity.radian,
    )
  }

  private drawBrawler(brawler: Brawler) {
    const { position, circle, radian, color } = brawler
    const radianIndicatorWidth = 1
    const radianIndicatorLength = 3
    this.canvas.drawCircle(position.x, position.y, circle.radius, color)
    this.canvas.drawRotatedRect(
      position.x + Math.sin(radian) * 4.5 - radianIndicatorWidth / 2,
      position.y - Math.cos(radian) * 4.5 - radianIndicatorLength / 2,
      radianIndicatorWidth,
      radianIndicatorLength,
      'black',
      radian,
    )
  }

  private drawHPBar(brawler: Brawler) {
    this.canvas.drawRotatedRect(
      brawler.position.x - 4.5,
      brawler.position.y - 8,
      brawler.circle.radius * 2 - 1,
      2,
      'black',
      0,
    )
    if (brawler.hp.value > 0) {
      this.canvas.drawRotatedRect(
        brawler.position.x - 4,
        brawler.position.y - 7.5,
        (brawler.hp.value / brawler.hp.full) * (brawler.circle.radius * 2 - 2),
        1,
        'tomato',
        0,
      )
    }
  }

  private drawBulletCount(brawler: Brawler) {
    this.canvas.drawText(
      `${brawler.bullet.count}`,
      brawler.position.x + 5.5,
      brawler.position.y - 6.5,
      'black',
    )
  }

  private drawDiedState(brawler: Brawler) {
    this.canvas.drawText(
      'Died',
      brawler.position.x - 3,
      brawler.position.y + 0.5,
      'black',
      '14px silom',
    )
  }
}
