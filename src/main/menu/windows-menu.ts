import { createSharedMenuItems } from './shared-menu'
import * as isDev from 'electron-is-dev'

export function createWindowsMenu(
  window: Electron.BrowserWindow
): Electron.MenuItemConstructorOptions[] {
  const shared = createSharedMenuItems(window)

  const fileMenu: Electron.MenuItemConstructorOptions = {
    label: '&File',
    submenu: [{ ...shared.quit, accelerator: 'Alt+F4' }]
  }

  const viewMenu: Electron.MenuItemConstructorOptions = {
    label: 'View',
    submenu: isDev
      ? [
          { ...shared.reload, accelerator: 'Ctrl+R' },
          { ...shared.toggleDevTools, accelerator: 'Ctrl+Alt+I' }
        ]
      : [{ ...shared.fullScreen, accelerator: 'Ctrl+Alt+F' }]
  }

  const helpMenu: Electron.MenuItemConstructorOptions = {
    label: 'Help',
    submenu: [shared.visit]
  }

  return [fileMenu, viewMenu, helpMenu]
}
