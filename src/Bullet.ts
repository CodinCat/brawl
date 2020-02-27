import { Position } from './Position'

export default class Bullet {
  constructor(private position: Position, private direction) {
    this.position = position
    this.direction = direction
  }
}
