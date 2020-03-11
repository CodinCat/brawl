import AIControlledBrawler from './AIControlledBrawler'
import { SerializedGame } from './serializeGame'

export default function(
  ownedBrawler: AIControlledBrawler,
  gameData: SerializedGame,
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
