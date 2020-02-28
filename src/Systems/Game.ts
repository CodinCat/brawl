import Degrees from '../Components/Degrees'
import Position from '../Components/Position'
import Stage from '../Entities/Stage'
import Brawler from '../Entities/Brawler'
import Bullet from '../Entities/Bullet'
import DrawSystem from './DrawSystem'
import MoveSystem from './MoveSystem'
import RotateSystem from './RotateSystem'
import UserControlSystem from './UserControlSystem'
import BrawlerCommandSystem from './BrawlerCommandSystem'
import Canvas from './Canvas'
import BulletSystem from './BulletSystem'

export default class Game {
  public drawSystem: DrawSystem
  public moveSystem = new MoveSystem()
  public rotateSystem = new RotateSystem()
  public bulletSystem = new BulletSystem(this)
  public brawlerCommandSystem = new BrawlerCommandSystem(this)
  public bullets: Bullet[] = []
  private stage = new Stage({ height: 120, width: 160 })

  constructor(canvasElement: HTMLCanvasElement, public brawlers: Brawler[]) {
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

  public addBullet(p: Position, degrees: Degrees) {
    this.bullets.push(new Bullet(p, degrees))
  }

  private update() {
    this.drawSystem.draw([this.stage, ...this.brawlers, ...this.bullets])
    this.bulletSystem.updateBullets(this.bullets)
    this.flushBrawlersCommands()
    this.scheduleNextUpdate()
  }

  private flushBrawlersCommands() {
    this.brawlers.forEach(brawler => {
      const command = brawler.commandQueue.shift()
      this.brawlerCommandSystem.executeCommand(brawler, command)
    })
  }

  private scheduleNextUpdate() {
    requestAnimationFrame(() => {
      this.update()
    })
  }
}
