import {app, BrowserWindow} from "electron";
import path from "path";

console.log(path.join(__dirname, 'index.html'))

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

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