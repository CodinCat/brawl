import Canvas from './Canvas'
import Stage from './Stage'
import Brawler from './Brawler'

export default class GameController {
  private speed = 40
  private stage = new Stage(this.canvas)

  constructor(private canvas: Canvas, private brawlers: Brawler[]) {
    this.canvas = canvas
    this.brawlers = brawlers
  }

  public start() {
    this.update()
  }

  private update() {
    this.stage.draw()
    this.brawlers.forEach(brawler => {
      brawler.draw()
    })
    this.scheduleNextUpdate()
  }

  private scheduleNextUpdate() {
    setTimeout(() => {
      this.update()
    }, this.speed)
  }
}
