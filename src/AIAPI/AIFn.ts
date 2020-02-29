import Brawler from '../Entities/Brawler'
import Bullet from '../Entities/Bullet'
import AIControlledBrawler from './AIControlledBrawler'

type AIFn = (
  ownedBrawler: AIControlledBrawler,
  brawlers: Brawler[],
  bullets: Bullet[],
) => void

export default AIFn
