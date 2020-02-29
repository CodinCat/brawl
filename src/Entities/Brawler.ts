import RectEntity from './RectEntity'
import ActionState from '../Components/ActionState'

const getInitialPosition = () => ({ x: 20, y: 20 })

export default class Brawler implements RectEntity {
  type: 'RectEntity' = 'RectEntity'
  public radian = 0
  public rect = { width: 9, height: 9 }
  public actionState = new ActionState()

  constructor(
    public position = getInitialPosition(),
    public color = 'mediumseagreen',
    public isUser = false,
  ) {
    this.color = color
    this.position = position
  }
}
