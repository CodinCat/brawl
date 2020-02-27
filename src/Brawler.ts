import Canvas from './Canvas'
import { Position } from './Position'

export enum BrawlerCommand {
  Left,
  Up,
  Right,
  Down,
}

const getInitialPosition = () => ({ x: 20, y: 20 })

export default class Brawler {
  private stepX = 0
  private stepY = 0
  private degrees = 30
  private commandQueue: BrawlerCommand[] = []
  private collisionListener: Function[] = []

  constructor(
    private canvas: Canvas,
    private position: Position = getInitialPosition(),
    private color = 'mediumseagreen',
  ) {
    this.canvas = canvas
    this.color = color
    this.position = position
  }

  public addCollisionListener(fn) {
    this.collisionListener.push(fn)
  }

  public draw() {
    this.canvas.drawRotatedRect(
      this.position.x,
      this.position.y,
      10,
      10,
      this.color,
      this.degrees,
    )
  }

  public move() {
    this.executeNextCommand()
    this.position.x += this.stepX
    this.position.y += this.stepY
    this.draw()
  }

  public attack() {
    console.log('hi')
  }

  public die() {
    console.log('die')
  }

  public getPosition() {
    return this.position
  }

  public pushCommand(command: BrawlerCommand) {
    this.commandQueue.push(command)
  }

  private executeNextCommand() {
    const command = this.commandQueue.shift()
    switch (command) {
      case BrawlerCommand.Left:
        this.stepX = -1
        this.stepY = 0
        break
      case BrawlerCommand.Up:
        this.stepX = 0
        this.stepY = -1
        break
      case BrawlerCommand.Right:
        this.stepX = 1
        this.stepY = 0
        break
      case BrawlerCommand.Down:
        this.stepX = 0
        this.stepY = 1
        break
    }
  }
}
