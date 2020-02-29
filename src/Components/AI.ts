import AIFn, { AIControlledBrawler } from '../AIAPI/AI'
import Brawler from '../Entities/Brawler'

export default class AI {
  public fn: AIFn
  public brawler: Brawler
  public brawlerAPI: AIControlledBrawler
}
