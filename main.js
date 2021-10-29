const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      // frame: false,
      titleBarStyle: 'hidden',
      titleBarOverlay: {
        color: '#dc3545',
        symbolColor: '#fff',
      },
      // transparent: true,
      icon: path.join(__dirname + '/images/DD_Transparent.png'), 
      webPreferences: {
      preload: path.join(__dirname, '/js/data.js'),
      nodeIntegration: true,  // Can cause Security Risk!
      contextIsolation: false, // Can cause Security Risk!
      }
    })
  
    // Opens Debug Console
    // win.webContents.openDevTools()

    win.removeMenu()

    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })
  