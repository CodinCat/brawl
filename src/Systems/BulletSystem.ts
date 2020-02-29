import Game from './Game'
import Bullet from '../Entities/Bullet'

const BULLET_SPEED = 1.26

export default class BulletSystem {
  constructor(private game: Game) {
    this.game = game
  }

  public updateBullets(bullets: Bullet[]) {
    bullets.forEach(b => {
      const tilt = (b.degrees * Math.PI) / 180
      this.game.moveSystem.moveX(b, Math.sin(tilt) * BULLET_SPEED)
      this.game.moveSystem.moveY(b, -Math.cos(tilt) * BULLET_SPEED)
    })
  }
}
