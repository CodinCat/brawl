import AIControlledBrawler from '../AIAPI/AIControlledBrawler'
import AIFn from '../AIAPI/AIFn'
import Brawler from '../Entities/Brawler'

export default class AI {
  public fn: AIFn
  public brawler: Brawler
  public brawlerAPI: AIControlledBrawler
}
