import Brawler from './Entities/Brawler'
import AIBrawler from './Entities/AIBrawler'
import Game from './Systems/Game'
import test1 from './AIAPI/test1'

const canvasElement = <HTMLCanvasElement>document.getElementById('canvas')

const b1 = new AIBrawler(test1)
const b2 = new Brawler({ x: 200, y: 200 }, 'cadetblue', true)

const game = new Game(canvasElement, [b1, b2])
game.start()
