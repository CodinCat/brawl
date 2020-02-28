import Game from './Game'
import Bullet from '../Entities/Bullet'

export default class BulletSystem {
  constructor(private game: Game) {
    this.game = game
  }

  public updateBullets(bullets: Bullet[]) {
    bullets.forEach(b => {
      this.game.moveSystem.moveY(b, -1)
    })
  }
}
