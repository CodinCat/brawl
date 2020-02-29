import Game from './Game'
import Bullet from '../Entities/Bullet'
import Brawler from '../Entities/Brawler'
import { getCenterPoint } from '../utils'

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
        x: Math.sin(b.radian) * b.speed,
        y: -Math.cos(b.radian) * b.speed,
      })
      b.ttl--
    })
  }

  public removeLeftBullets(bullets: Bullet[]) {
    for (let i = 0; i < bullets.length; i++) {
      if (bullets[i].ttl <= 0) {
        bullets.splice(i, 1)
      }
    }
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
