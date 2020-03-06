import AIControlledBrawler from './AIControlledBrawler'
import { SerializedGame } from './serializeGame'

type AIFn = (
  ownedBrawler: AIControlledBrawler,
  gameData: SerializedGame,
) => void

export default AIFn
