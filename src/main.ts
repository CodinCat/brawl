import Brawler from './Entities/Brawler'
import Game from './Systems/Game'

const canvasElement = <HTMLCanvasElement>document.getElementById('canvas')

const b1 = new Brawler()
const b2 = new Brawler({ x: 30, y: 30 }, 'red', true)

const game = new Game(canvasElement, [b1, b2])
game.start()
