import { makeInstaller } from "@dawn-ui/utils";
import components from "./components";
import "@dawn-ui/theme/index.css"

const installer = makeInstaller(components);

export * from '@dawn-ui/components'
export default installer;