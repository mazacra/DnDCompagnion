const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

let win

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadURL(url.format ({
      pathname: path.join(__dirname, 'View/index.html'),
      protocol: 'file:',
      slashes: true
   }))
  }

  app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })