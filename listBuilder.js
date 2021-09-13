const electron = require('electron')
const path = require('path')
const remote = electron.remote
var open = require("open");

const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', function (event) {
    var win = remote.getCurrentWindow();
    win.close();
})

function openWindow(){
    open("http://www.google.com");
}