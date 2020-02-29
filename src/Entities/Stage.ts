import Rect from '../Components/Rect'
import RectEntity from './RectEntity'

export default class Stage implements RectEntity {
  type: 'RectEntity' = 'RectEntity'
  color = 'palegoldenrod'
  radian = 0
  position = { x: 0, y: 0 }
  rect: Rect

  constructor(rect: Rect) {
    this.rect = rect
  }
}
