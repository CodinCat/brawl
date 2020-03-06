import AI from '../Components/AI'
import AIControlledBrawler from '../AIAPI/AIControlledBrawler'
import AIFn from '../AIAPI/AIFn'
import Brawler from './Brawler'

export default class AIBrawler extends Brawler {
  type: 'BrawlerEntity' = 'BrawlerEntity'
  public ai = new AI()

  constructor(fn: AIFn) {
    super({ x: 20, y: 20 }, 'mediumseagreen', false)
    this.ai.fn = fn
    this.ai.brawler = this
    this.ai.brawlerAPI = new AIControlledBrawler(this)
  }
}
