import Rect from '../Components/Rect'
import Degrees from '../Components/Degrees'
import BaseEntity from './BaseEntity'

export default interface RectEntity extends BaseEntity {
  type: 'RectEntity'
  rect: Rect
  degrees: Degrees
}
