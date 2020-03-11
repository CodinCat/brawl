import Canvas from './Canvas'
import Entity from '../Entities/Entity'
import Brawler from '../Entities/Brawler'
import RectEntity from '../Entities/RectEntity'

export default class DrawSystem {
  private canvas: Canvas

  constructor(canvasElement: HTMLCanvasElement) {
    this.canvas = new Canvas(canvasElement)
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
    const radianIndicatorWidth = 5
    const radianIndicatorLength = 15
    this.canvas.drawCircle(position.x, position.y, circle.radius, color)
    this.canvas.drawRotatedRect(
      position.x + Math.sin(radian) * 22 - radianIndicatorWidth / 2,
      position.y - Math.cos(radian) * 22 - radianIndicatorLength / 2,
      radianIndicatorWidth,
      radianIndicatorLength,
      'black',
      radian,
    )
  }

  private drawHPBar(brawler: Brawler) {
    this.canvas.drawRotatedRect(
      brawler.position.x - 22.5,
      brawler.position.y - 40,
      brawler.circle.radius * 2 - 5,
      10,
      'black',
      0,
    )
    if (brawler.hp.value > 0) {
      this.canvas.drawRotatedRect(
        brawler.position.x - 20,
        brawler.position.y - 37.5,
        (brawler.hp.value / brawler.hp.full) * (brawler.circle.radius * 2 - 10),
        5,
        'tomato',
        0,
      )
    }
  }

  private drawBulletCount(brawler: Brawler) {
    this.canvas.drawText(
      `${brawler.bullet.count}`,
      brawler.position.x + 27.5,
      brawler.position.y - 32.5,
      'black',
    )
  }

  private drawDiedState(brawler: Brawler) {
    this.canvas.drawText(
      'Died',
      brawler.position.x - 15,
      brawler.position.y + 12.5,
      'black',
      '14px silom',
    )
  }
}
