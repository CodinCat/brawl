import Canvas from './Canvas'
import Stage from './Stage'
import Brawler, { BrawlerCommand } from './Brawler'

enum directionKeyCode {
  Left = 37,
  Up,
  Right,
  Down,
}

export default class GameController {
  private speed = 40
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
        console.log('found')
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
    setTimeout(() => {
      this.update()
    }, this.speed)
  }

  private handleKeyDown = event => {
    console.log(this.userBrawler)
    if (!this.userBrawler) return
    console.log(event.keyCode)
    switch (event.keyCode) {
      case directionKeyCode.Left:
        this.userBrawler.pushCommand(BrawlerCommand.Left)
        break
      case directionKeyCode.Up:
        this.userBrawler.pushCommand(BrawlerCommand.Up)
        break
      case directionKeyCode.Right:
        this.userBrawler.pushCommand(BrawlerCommand.Right)
        break
      case directionKeyCode.Down:
        this.userBrawler.pushCommand(BrawlerCommand.Down)
    }
  }
}
