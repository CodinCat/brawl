import Radian from '../Components/Radian'
import Position from '../Components/Position'
import RectEntity from './RectEntity'
import Brawler from './Brawler'

export default class Bullet implements RectEntity {
  type: 'RectEntity' = 'RectEntity'
  color = 'black'
  rect = { width: 1, height: 1 }
  ttl = 50

  constructor(
    public owner: Brawler,
    public position: Position,
    public radian: Radian,
  ) {
    this.owner = owner
    this.position = position
    this.radian = radian
  }
}
