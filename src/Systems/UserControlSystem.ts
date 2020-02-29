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
    if (!this.userBrawler) return
    window.addEventListener('keydown', this.handleKeyDown)
    window.addEventListener('keyup', this.handleKeyUp)
  }

  private handleKeyDown = event => {
    const command = this.getCommand(event.keyCode)
    if (!command) return
    this.userBrawler.actionState[command] = true
  }

  private handleKeyUp = event => {
    const command = this.getCommand(event.keyCode)
    if (!command) return
    this.userBrawler.actionState[command] = false
  }

  private getCommand(keyCode) {
    switch (keyCode) {
      case KeyCode.Left:
        return 'left'

      case KeyCode.Up:
        return 'up'

      case KeyCode.Right:
        return 'right'

      case KeyCode.Down:
        return 'down'

      case KeyCode.Z:
        return 'rotateLeft'

      case KeyCode.X:
        return 'rotateRight'

      case KeyCode.Space:
        return 'attack'
    }
  }
}
