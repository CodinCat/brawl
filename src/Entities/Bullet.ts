import Radian from '../Components/Radian'
import Position from '../Components/Position'
import RectEntity from './RectEntity'

export default class Bullet implements RectEntity {
  type: 'RectEntity' = 'RectEntity'
  color = 'black'
  rect = { width: 1, height: 1 }

  constructor(public position: Position, public radian: Radian) {
    this.position = position
    this.radian = radian
  }
}
