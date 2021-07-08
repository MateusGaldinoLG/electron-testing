import {app, BrowserWindow} from "electron";
import path from "path";

function createWindow(){
    const win = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    //relative to the root
    win.loadFile('index.html');
}

app.whenReady().then(() =>{
    createWindow()

    //for macOS
    app.on('activate', function(){
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

app.on('window-all-closed', function(){
    //darwin == macOS
    if(process.platform !== 'darwin') app.quit()
})