import Bullet from '../Components/Bullet'
import ActionState from '../Components/ActionState'
import HP from '../Components/HP'

const getInitialPosition = () => ({ x: 20, y: 20 })

let id = 0

export default class Brawler {
  type: 'BrawlerEntity' = 'BrawlerEntity'
  public radian = 0
  public circle = { radius: 5 }
  public actionState = new ActionState()
  public hp = new HP()
  public bullet = new Bullet()
  public id = id

  constructor(
    public position = getInitialPosition(),
    public color = 'mediumseagreen',
    public isUser = false,
    public team: string = null,
  ) {
    this.color = color
    this.position = position
    this.team = team
    id++
  }
}
