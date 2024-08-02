import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

// 创造一个安装所有插件的安装器
export function makeInstaller(components: Plugin[]) {
  const install = (app: App) =>
    each(components, (c) => {
      app.use(c);
    });

  return install;
}

// 给组件添加一个install方法，使得该组件可以以插件的形式被安装到Vue应用中即可以Vue.use(component)
export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any)?.name || "UnnamedComponent";
    app.component(name, component as SFCWithInstall<T>);
  };
  return component as SFCWithInstall<T>;
};