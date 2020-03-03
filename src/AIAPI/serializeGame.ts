import Brawler from '../Entities/Brawler'
import Bullet from '../Entities/Bullet'
import Game from '../Systems/Game'

const serializeBrawler = (b: Brawler) => ({
  radius: b.circle.radius,
  radian: b.radian,
  x: b.position.x,
  y: b.position.y,
  hp: b.hp.value,
  actionState: {
    ...b.actionState,
  },
})

const serializeBullet = (b: Bullet) => ({
  height: b.rect.height,
  width: b.rect.width,
  x: b.position.x,
  y: b.position.y,
  radian: b.radian,
  damage: b.damage,
  speed: b.speed,
  owner: serializeBrawler(b.owner),
})

export default function serializeGame(game: Game) {
  return {
    brawlers: game.brawlers.map(serializeBrawler),
    bullets: game.bullets.map(serializeBullet),
  }
}
