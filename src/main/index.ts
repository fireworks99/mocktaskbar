import { app, BrowserWindow, screen, globalShortcut } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'

let win: BrowserWindow

function createWindow() {
  // const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const { width, height } = screen.getPrimaryDisplay().size

  win = new BrowserWindow({
    x: 0,
    y: height - 48,
    width,
    height: 48,

    frame: false,
    transparent: true,

    alwaysOnTop: true,
    skipTaskbar: true,
    focusable: false,

    resizable: false,

    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  win.setAlwaysOnTop(true, 'screen-saver')

  is.dev &&
    win.webContents.openDevTools({ mode: 'detach' })


  is.dev && process.env.ELECTRON_RENDERER_URL
    ? win.loadURL(process.env.ELECTRON_RENDERER_URL)
    : win.loadFile(join(__dirname, '../renderer/index.html'))
}

let visible = true
app.whenReady().then(() => {
  createWindow()

  // globalShortcut.register('Alt+`', () => {
  //   if (win.isVisible()) {
  //     win.hide()
  //   } else {
  //     win.showInactive()
  //     win.setAlwaysOnTop(true, 'screen-saver')
  //   }
  // })

  globalShortcut.register('Alt+`', () => {
    visible = !visible

    if (visible) {
      win.setOpacity(1)
      win.setIgnoreMouseEvents(false)
      win.moveTop()
    } else {
      win.setOpacity(0)
      win.setIgnoreMouseEvents(true)
    }
  })
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})