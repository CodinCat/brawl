import Brawler from '../Entities/Brawler'
import Bullet from '../Entities/Bullet'
import Entity from '../Entities/Entity'
import Game from './Game'
import { getCenterPoint } from '../utils'

export default class CollisionSystem {
  constructor(private game: Game) {
    this.game = game
  }

  public update(brawlers: Brawler[], bullets: Bullet[]) {
    brawlers.forEach(brawler => {
      bullets.forEach(bullet => {
        if (bullet.owner === brawler) return
        if (this.isCollided(brawler, bullet)) {
          console.log('hit')
          this.game.removeBullet(bullet)
        }
      })
    })
  }

  private isCollided(e1: Entity, e2: Entity) {
    const e1Center = getCenterPoint(e1)
    const e2Center = getCenterPoint(e2)
    return (e1Center.x - e2Center.x) ** 2 + (e1Center.y - e2Center.y) ** 2 < 40
  }
}
