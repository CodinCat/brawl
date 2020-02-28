import Brawler from './Entities/Brawler'
import GameWorld from './Systems/GameWorld'

const canvasElement = <HTMLCanvasElement>document.getElementById('canvas')

const b1 = new Brawler()
const b2 = new Brawler({ x: 30, y: 30 }, 'red', true)

const game = new GameWorld(canvasElement, [b1, b2])
game.start()
