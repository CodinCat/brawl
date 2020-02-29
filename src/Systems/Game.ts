import Radian from '../Components/Radian'
import Position from '../Components/Position'
import Stage from '../Entities/Stage'
import Brawler from '../Entities/Brawler'
import Bullet from '../Entities/Bullet'
import DrawSystem from './DrawSystem'
import MoveSystem from './MoveSystem'
import RotateSystem from './RotateSystem'
import UserControlSystem from './UserControlSystem'
import BrawlerActionSystem from './BrawlerActionSystem'
import Canvas from './Canvas'
import BulletSystem from './BulletSystem'

export default class Game {
  public drawSystem: DrawSystem
  public moveSystem = new MoveSystem()
  public rotateSystem = new RotateSystem()
  public bulletSystem = new BulletSystem(this)
  public brawlerActionSystem = new BrawlerActionSystem(this)
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

  public addBullet(p: Position, radian: Radian) {
    this.bullets.push(new Bullet(p, radian))
  }

  private update() {
    this.drawSystem.draw([this.stage, ...this.brawlers, ...this.bullets])
    this.bulletSystem.updateBullets(this.bullets)
    this.executeBrawlersActions()
    this.scheduleNextUpdate()
  }

  private executeBrawlersActions() {
    this.brawlers.forEach(brawler => {
      this.brawlerActionSystem.executeAction(brawler)
    })
  }

  private scheduleNextUpdate() {
    requestAnimationFrame(() => {
      this.update()
    })
  }
}
