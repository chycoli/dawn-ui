import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import '@dawn-ui/theme'
import { makeInstaller } from '@dawn-ui/utils'
import components from './components'

library.add(fas);
const installer = makeInstaller(components)

export * from '@dawn-ui/components'
export default installer