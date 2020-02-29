import Game from './Game'
import Bullet from '../Entities/Bullet'

const BULLET_SPEED = 1.26

export default class BulletSystem {
  constructor(private game: Game) {
    this.game = game
  }

  public updateBullets(bullets: Bullet[]) {
    bullets.forEach(b => {
      this.game.moveSystem.moveX(b, Math.sin(b.radian) * BULLET_SPEED)
      this.game.moveSystem.moveY(b, -Math.cos(b.radian) * BULLET_SPEED)
    })
  }
}
