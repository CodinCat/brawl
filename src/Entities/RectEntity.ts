import Rect from '../Components/Rect'
import Radian from '../Components/Radian'
import BaseEntity from './BaseEntity'

export default interface RectEntity extends BaseEntity {
  type: 'RectEntity'
  rect: Rect
  radian: Radian
}
