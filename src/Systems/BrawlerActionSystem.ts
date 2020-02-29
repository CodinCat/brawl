import Brawler from '../Entities/Brawler'
import Game from './Game'

export default class BrawlerActionSystem {
  constructor(private game: Game) {
    this.game = game
  }
  public executeAction(brawler: Brawler) {
    if (brawler.actionState.left) {
      this.game.moveSystem.moveX(brawler, -0.5)
    }
    if (brawler.actionState.up) {
      this.game.moveSystem.moveY(brawler, -0.5)
    }
    if (brawler.actionState.right) {
      this.game.moveSystem.moveX(brawler, 0.5)
    }
    if (brawler.actionState.down) {
      this.game.moveSystem.moveY(brawler, 0.5)
    }
    if (brawler.actionState.rotateLeft) {
      this.game.rotateSystem.left(brawler)
    }
    if (brawler.actionState.rotateRight) {
      this.game.rotateSystem.right(brawler)
    }
    if (brawler.actionState.attack) {
      this.game.bulletSystem.shoot(brawler)
    }
  }
}
