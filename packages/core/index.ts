import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { makeInstaller } from "@dawn-ui/utils";
import "@dawn-ui/theme/index.css"
import components from "./components";

library.add(fas);

const installer = makeInstaller(components);

export * from '@dawn-ui/components'
export default installer;