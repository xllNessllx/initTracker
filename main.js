const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false,
      // transparent: true,
      icon: path.join(__dirname + '/images/DD_Transparent.png'), 
      webPreferences: {
        preload: path.join(__dirname, 'listBuilder.js')
      }
    })
  
    win.removeMenu()

    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })
  