import Game from './Game'
import Bullet from '../Entities/Bullet'
import Brawler from '../Entities/Brawler'
import { getCenterPoint } from '../utils'

const BULLET_SPEED = 1.3

export default class BulletSystem {
  constructor(private game: Game) {
    this.game = game
  }

  public shoot(brawler: Brawler) {
    if (brawler.bullet.count > 0) {
      brawler.bullet.count--
      this.game.addBullet(
        new Bullet(brawler, getCenterPoint(brawler), brawler.radian),
      )
    }
  }

  public moveBullets(bullets: Bullet[]) {
    bullets.forEach(b => {
      this.game.moveSystem.move(b, {
        x: Math.sin(b.radian) * BULLET_SPEED,
        y: -Math.cos(b.radian) * BULLET_SPEED,
      })
    })
  }

  public reload(brawlers: Brawler[], frameCount: number) {
    if (frameCount % 10 !== 0) return
    brawlers.forEach(b => {
      if (b.bullet.count < b.bullet.full) {
        b.bullet.count++
      }
    })
  }
}
