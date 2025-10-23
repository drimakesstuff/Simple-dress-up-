const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 410,
    height: 1000,
    
    fullscreen: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // Required if using require() in your HTML JS
    }
  });

  win.loadFile('1.html'); // Entry point
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
