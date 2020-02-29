import ActionState from '../Components/ActionState'
import HP from '../Components/HP'

const getInitialPosition = () => ({ x: 20, y: 20 })

export default class Brawler {
  type: 'BrawlerEntity' = 'BrawlerEntity'
  public radian = 0
  public rect = { width: 9, height: 9 }
  public actionState = new ActionState()
  public hp = new HP()

  constructor(
    public position = getInitialPosition(),
    public color = 'mediumseagreen',
    public isUser = false,
  ) {
    this.color = color
    this.position = position
  }
}
