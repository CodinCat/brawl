import Brawler from '../Entities/Brawler'
import Game from './Game'

const BORDER = 10

export default class BrawlerActionSystem {
  constructor(private game: Game) {
    this.game = game
  }
  public executeAction(b: Brawler) {
    if (b.hp.value <= 0) return

    const { x, y } = b.position
    if (b.actionState.left) {
      if (x - b.circle.radius > BORDER) {
        this.game.moveSystem.moveX(b, -3)
      }
    }
    if (b.actionState.up) {
      if (y - b.circle.radius > BORDER) {
        this.game.moveSystem.moveY(b, -3)
      }
    }
    if (b.actionState.right) {
      if (x + b.circle.radius < this.game.stage.rect.width - BORDER) {
        this.game.moveSystem.moveX(b, 3)
      }
    }
    if (b.actionState.down) {
      if (y + b.circle.radius < this.game.stage.rect.height - BORDER) {
        this.game.moveSystem.moveY(b, 3)
      }
    }
    if (b.actionState.rotateLeft) {
      this.game.rotateSystem.left(b)
    }
    if (b.actionState.rotateRight) {
      this.game.rotateSystem.right(b)
    }
    if (b.actionState.attack) {
      this.game.bulletSystem.shoot(b)
    }
  }
}
