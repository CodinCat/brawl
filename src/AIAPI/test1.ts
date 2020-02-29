import Brawler from '../Entities/Brawler'
import Bullet from '../Entities/Bullet'
import AIControlledBrawler from './AIControlledBrawler'

export default function(
  ownedBrawler: AIControlledBrawler,
  brawlers: Brawler[],
  bullets: Bullet[],
) {
  const r = Math.random()
  if (r > 0.9) {
    ownedBrawler.attack()
  }
  if (r > 0.8) {
    ownedBrawler.moveLeft()
  } else if (r > 0.6) {
    ownedBrawler.moveRight()
  }
  if (r < 0.1) {
    ownedBrawler.moveUp()
  } else if (r < 0.2) {
    ownedBrawler.moveDown()
  }
  if (r > 0.95) {
    ownedBrawler.rotateLeft()
  } else if (r > 0.8) {
    ownedBrawler.rotateRight()
  }
}
