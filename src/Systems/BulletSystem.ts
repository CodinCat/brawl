import Game from './Game'
import Bullet from '../Entities/Bullet'

const BULLET_SPEED = 1.3

export default class BulletSystem {
  constructor(private game: Game) {
    this.game = game
  }

  public updateBullets(bullets: Bullet[]) {
    bullets.forEach(b => {
      this.game.moveSystem.move(b, {
        x: Math.sin(b.radian) * BULLET_SPEED,
        y: -Math.cos(b.radian) * BULLET_SPEED,
      })
    })
  }
}
