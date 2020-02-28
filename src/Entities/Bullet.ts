import RectEntity from './RectEntity'

export default class Bullet implements RectEntity {
  type: 'RectEntity' = 'RectEntity'
  color = 'black'
  degrees = 0
  position = { x: 0, y: 0 }
  rect = { width: 1, height: 1 }
}
