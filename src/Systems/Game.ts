import Stage from '../Entities/Stage'
import Brawler from '../Entities/Brawler'
import AIBrawler from '../Entities/AIBrawler'
import Bullet from '../Entities/Bullet'
import AISystem from './AISystem'
import BrawlerActionSystem from './BrawlerActionSystem'
import BulletSystem from './BulletSystem'
import CollisionSystem from './CollisionSystem'
import DamageSystem from './DamageSystem'
import DrawSystem from './DrawSystem'
import MoveSystem from './MoveSystem'
import RotateSystem from './RotateSystem'
import UserControlSystem from './UserControlSystem'

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
  public frameCount = 0
  private stage = new Stage({ height: 600, width: 800 })

  constructor(
    canvasElement: HTMLCanvasElement,
    public brawlers: (Brawler | AIBrawler)[],
  ) {
    this.brawlers = brawlers
    this.drawSystem = new DrawSystem(canvasElement)
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

  public addBullet(bullet: Bullet) {
    this.bullets.push(bullet)
  }

  public removeBullet(index: number) {
    this.bullets.splice(index, 1)
  }

  private update() {
    this.bulletSystem.moveBullets(this.bullets)
    this.bulletSystem.removeLeftBullets(this.bullets)
    this.bulletSystem.reload(this.brawlers, this.frameCount)
    this.collisionSystem.update(this.brawlers, this.bullets)
    this.executeBrawlersActions()
    this.drawSystem.draw([this.stage, ...this.brawlers, ...this.bullets])
    this.scheduleNextUpdate()
    this.frameCount++
  }

  private executeBrawlersActions() {
    this.brawlers.forEach(brawler => {
      if (this.isAIBrawler(brawler)) {
        this.aiSystem.update(brawler)
      }
      this.brawlerActionSystem.executeAction(brawler)
    })
  }

  private scheduleNextUpdate() {
    requestAnimationFrame(() => {
      this.update()
    })
  }

  private isAIBrawler(brawler): brawler is AIBrawler {
    return typeof brawler.ai !== 'undefined'
  }
}
