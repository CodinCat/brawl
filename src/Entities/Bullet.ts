import Radian from '../Components/Radian'
import Position from '../Components/Position'
import RectEntity from './RectEntity'
import Brawler from './Brawler'

export default class Bullet implements RectEntity {
  type: 'RectEntity' = 'RectEntity'
  color = 'black'
  rect = { width: 5, height: 5 }
  ttl = 50
  damage = 40
  speed = 6.5

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
