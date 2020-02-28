import Degrees from '../Components/Degrees'
import Position from '../Components/Position'
import RectEntity from './RectEntity'

export default class Bullet implements RectEntity {
  type: 'RectEntity' = 'RectEntity'
  color = 'black'
  rect = { width: 1, height: 1 }

  constructor(public position: Position, public degrees: Degrees) {
    this.position = position
    this.degrees = degrees
  }
}
