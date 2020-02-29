import AI from '../Components/AI'
import AIFn, { AIControlledBrawler } from '../AIAPI/AI'
import Brawler from './Brawler'

export default class AIBrawler extends Brawler {
  type: 'BrawlerEntity' = 'BrawlerEntity'
  public ai = new AI()

  constructor(fn: AIFn) {
    super({ x: 20, y: 20 }, 'mediumseagreen', false)
    this.ai.fn = fn
    this.ai.brawler = this
    this.ai.brawlerAPI = new AIControlledBrawler()
  }
}
