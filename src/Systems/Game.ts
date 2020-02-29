import Radian from '../Components/Radian'
import Position from '../Components/Position'
import Stage from '../Entities/Stage'
import Brawler from '../Entities/Brawler'
import AIBrawler from '../Entities/AIBrawler'
import Bullet from '../Entities/Bullet'
import DrawSystem from './DrawSystem'
import MoveSystem from './MoveSystem'
import RotateSystem from './RotateSystem'
import UserControlSystem from './UserControlSystem'
import BrawlerActionSystem from './BrawlerActionSystem'
import BulletSystem from './BulletSystem'
import CollisionSystem from './CollisionSystem'
import DamageSystem from './DamageSystem'
import Canvas from './Canvas'
import AISystem from './AISystem'

export default class Game {
  public drawSystem: DrawSystem
  public moveSystem = new MoveSystem()
  public rotateSystem = new RotateSystem()
  public bulletSystem = new BulletSystem(this)
  public brawlerActionSystem = new BrawlerActionSystem(this)
  public collisionSystem = new CollisionSystem(this)
  public damageSystem = new DamageSystem()
  public aiSystem = new AISystem(this)
  public bullets: Bullet[] = []
  private stage = new Stage({ height: 120, width: 160 })

  constructor(
    canvasElement: HTMLCanvasElement,
    public brawlers: (Brawler | AIBrawler)[],
  ) {
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

  public addBullet(owner: Brawler, p: Position, radian: Radian) {
    this.bullets.push(new Bullet(owner, p, radian))
  }

  public removeBullet(index: number) {
    this.bullets.splice(index, 1)
  }

  private update() {
    this.bulletSystem.updateBullets(this.bullets)
    this.collisionSystem.update(this.brawlers, this.bullets)
    this.executeBrawlersActions()
    this.drawSystem.draw([this.stage, ...this.brawlers, ...this.bullets])
    this.scheduleNextUpdate()
  }

  private executeBrawlersActions() {
    this.brawlers.forEach(brawler => {
      this.brawlerActionSystem.executeAction(brawler)
      if (this.isAIBrawler(brawler)) {
        this.aiSystem.update(brawler)
      }
    })
  }

  private isAIBrawler(brawler): brawler is AIBrawler {
    return typeof brawler.ai !== 'undefined'
  }

  private scheduleNextUpdate() {
    requestAnimationFrame(() => {
      this.update()
    })
  }
}
