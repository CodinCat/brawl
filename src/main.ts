import Canvas from './Canvas'
import Brawler from './Brawler'
import GameController from './GameController'

const canvasElement = <HTMLCanvasElement>document.getElementById('canvas')
const canvas = new Canvas(canvasElement, 5)
const b1 = new Brawler(canvas)
const b2 = new Brawler(canvas, { x: 30, y: 30 }, 'red', true)
const game = new GameController(canvas, [b1, b2])
game.start()
