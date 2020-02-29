import Brawler from '../Entities/Brawler'
import Bullet from '../Entities/Bullet'

export default class DamageSystem {
  public damage(brawler: Brawler, bullet: Bullet) {
    brawler.hp.value -= bullet.damage
  }
}
