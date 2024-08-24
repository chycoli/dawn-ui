import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

// 制造一个方法可以全局安装所有组件
export function makeInstaller(components: Plugin[] = []) {
  const installer = (app: App) => each(components, (c) => app.use(c))
  return installer as Plugin
}

// 给单个组件添加 install 方法
type SFCwithInstall<T> = T & Plugin
export const withInstall = <T>(component: T) => {
  (component as SFCwithInstall<T>).install = (app: App) => {
    const name = (component as any).name
    app.component(name, component as Plugin)
  }
  return component as SFCwithInstall<T>
}