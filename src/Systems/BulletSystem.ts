import Game from './Game'
import Bullet from '../Entities/Bullet'

export default class BulletSystem {
  constructor(private game: Game) {
    this.game = game
  }

  public updateBullets(bullets: Bullet[]) {
    bullets.forEach(b => {
      const tilt = (b.degrees * Math.PI) / 180
      this.game.moveSystem.moveX(b, Math.sin(tilt))
      this.game.moveSystem.moveY(b, -Math.cos(tilt))
    })
  }
}
