import EnvConfig from './env.config'
import ImageConfig from './image.config'

import { disposeSrc } from '@/utils/config-tools'

const env = 'dev' // 'dev' or 'prod'
const image = disposeSrc(ImageConfig, EnvConfig[env].image)
export default {
  env,
  image
}
