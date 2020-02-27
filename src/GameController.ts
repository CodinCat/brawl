import Canvas from './Canvas'
import Stage from './Stage'
import Brawler, { BrawlerCommand } from './Brawler'

enum KeyCode {
  Left = 37,
  Up,
  Right,
  Down,
  Z = 90,
  X = 88,
  Space = 32,
}

export default class GameController {
  private stage = new Stage(this.canvas)
  private userBrawler: Brawler

  constructor(private canvas: Canvas, private brawlers: Brawler[]) {
    this.canvas = canvas
    this.brawlers = brawlers
  }

  public start() {
    this.update()
    this.brawlers.find(b => {
      if (b.isUser) {
        this.userBrawler = b
      }
    })
    window.addEventListener('keydown', this.handleKeyDown)
  }

  private update() {
    this.stage.draw()
    this.brawlers.forEach(brawler => {
      brawler.update()
    })
    this.scheduleNextUpdate()
  }

  private scheduleNextUpdate() {
    requestAnimationFrame(() => {
      this.update()
    })
  }

  private handleKeyDown = event => {
    if (!this.userBrawler) return
    console.log(event.keyCode)
    switch (event.keyCode) {
      case KeyCode.Left:
        this.userBrawler.pushCommand(BrawlerCommand.Left)
        break
      case KeyCode.Up:
        this.userBrawler.pushCommand(BrawlerCommand.Up)
        break
      case KeyCode.Right:
        this.userBrawler.pushCommand(BrawlerCommand.Right)
        break
      case KeyCode.Down:
        this.userBrawler.pushCommand(BrawlerCommand.Down)
        break
      case KeyCode.Z:
        this.userBrawler.pushCommand(BrawlerCommand.RotateLeft)
        break
      case KeyCode.X:
        this.userBrawler.pushCommand(BrawlerCommand.RotateRight)
        break
      case KeyCode.Space:
        this.userBrawler.pushCommand(BrawlerCommand.Attack)
        break
    }
  }
}
