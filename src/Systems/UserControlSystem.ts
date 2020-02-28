import BrawlerCommand from '../Components/BrawlerCommand'
import Brawler from '../Entities/Brawler'

enum KeyCode {
  Left = 37,
  Up,
  Right,
  Down,
  Z = 90,
  X = 88,
  Space = 32,
}

export default class UserControlSystem {
  constructor(private userBrawler: Brawler) {
    this.userBrawler = userBrawler
  }

  public start() {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  private handleKeyDown = event => {
    if (!this.userBrawler) return
    const command = this.getCommand(event.keyCode)
    this.userBrawler.commandQueue.push(command)
  }

  private getCommand(keyCode) {
    console.log(keyCode)
    switch (keyCode) {
      case KeyCode.Left:
        return BrawlerCommand.Left

      case KeyCode.Up:
        return BrawlerCommand.Up

      case KeyCode.Right:
        return BrawlerCommand.Right

      case KeyCode.Down:
        return BrawlerCommand.Down

      case KeyCode.Z:
        return BrawlerCommand.RotateLeft

      case KeyCode.X:
        return BrawlerCommand.RotateRight

      case KeyCode.Space:
        return BrawlerCommand.Attack
    }
  }
}
