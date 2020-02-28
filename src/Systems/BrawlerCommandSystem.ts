import BrawlerCommand from '../Components/BrawlerCommand'
import Entity from '../Entities/Entity'
import Game from './Game'

export default class BrawlerCommandSystem {
  constructor(private game: Game) {
    this.game = game
  }
  public executeCommand(entity: Entity, command: BrawlerCommand) {
    switch (command) {
      case BrawlerCommand.Left:
        this.game.moveSystem.moveX(entity, -1)
        break

      case BrawlerCommand.Up:
        this.game.moveSystem.moveY(entity, -1)
        break

      case BrawlerCommand.Right:
        this.game.moveSystem.moveX(entity, 1)
        break

      case BrawlerCommand.Down:
        this.game.moveSystem.moveY(entity, 1)
        break

      case BrawlerCommand.RotateLeft:
        this.game.rotateSystem.left(entity)
        break

      case BrawlerCommand.RotateRight:
        this.game.rotateSystem.right(entity)
        break

      case BrawlerCommand.Attack:
        this.game.addBullet(
          {
            x: entity.position.x + Math.floor(entity.rect.width / 2),
            y: entity.position.y,
          },
          entity.degrees,
        )
        break
    }
  }
}
