import Stage from '../Entities/Stage'
import Brawler from '../Entities/Brawler'
import DrawSystem from './DrawSystem'
import InputSystem from './InputSystem'
import Canvas from './Canvas'

export default class GameWorld {
  private inputSystem: InputSystem
  private drawSystem: DrawSystem
  private stage = new Stage({ height: 120, width: 160 })

  constructor(canvasElement: HTMLCanvasElement, private brawlers: Brawler[]) {
    const canvas = new Canvas(canvasElement, 5)
    this.brawlers = brawlers
    this.inputSystem = new InputSystem(brawlers)
    this.drawSystem = new DrawSystem(canvas)
  }

  public start() {
    console.log(this)
    this.inputSystem.start()
    this.update()
  }

  private update() {
    this.drawSystem.update([this.stage, ...this.brawlers])
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
}
