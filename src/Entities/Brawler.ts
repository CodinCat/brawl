import RectEntity from './RectEntity'
import BrawlerCommand from '../Components/BrawlerCommand'

const getInitialPosition = () => ({ x: 20, y: 20 })

export default class Brawler implements RectEntity {
  type: 'RectEntity' = 'RectEntity'
  public degrees = 0
  public rect = { width: 10, height: 10 }
  public commandQueue: BrawlerCommand[] = []

  constructor(
    public position = getInitialPosition(),
    public color = 'mediumseagreen',
    public isUser = false,
  ) {
    this.color = color
    this.position = position
  }
}
