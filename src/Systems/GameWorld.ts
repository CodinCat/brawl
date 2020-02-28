import Stage from '../Entities/Stage'
import Brawler from '../Entities/Brawler'
import DrawSystem from './DrawSystem'
import MoveSystem from './MoveSystem'
import RotateSystem from './RotateSystem'
import UserControlSystem from './UserControlSystem'
import BrawlerCommandSystem from './BrawlerCommandSystem'
import Canvas from './Canvas'

export default class Game {
  private drawSystem: DrawSystem
  private moveSystem = new MoveSystem()
  private rotateSystem = new RotateSystem()
  private brawlerCommandSystem = new BrawlerCommandSystem(
    this.moveSystem,
    this.rotateSystem,
  )
  private stage = new Stage({ height: 120, width: 160 })

  constructor(canvasElement: HTMLCanvasElement, private brawlers: Brawler[]) {
    this.brawlers = brawlers
    this.drawSystem = new DrawSystem(new Canvas(canvasElement, 5))
  }

  public start() {
    console.log(this)
    const userBrawler = this.brawlers.find(b => b.isUser)
    if (userBrawler) {
      const userControlSystem = new UserControlSystem(userBrawler)
      userControlSystem.start()
    }
    this.update()
  }

  private update() {
    this.drawSystem.update([this.stage, ...this.brawlers])
    this.brawlers.forEach(brawler => {
      const command = brawler.commandQueue.shift()
      this.brawlerCommandSystem.executeCommand(brawler, command)
    })
    this.scheduleNextUpdate()
  }

  private scheduleNextUpdate() {
    requestAnimationFrame(() => {
      this.update()
    })
  }
}
