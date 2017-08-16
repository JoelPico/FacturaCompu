/*const electron = require('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url  = require('url')

let win 

function createWindow(){

	win = new BrowserWindow ({width: 800, height: 600})
	win.loadURL(url.format({
		pathname: path.join(__dirname, 'login.html'),
		protocol: 'file',
		slashes: true
	}))
}

app.on('ready', createWindow)*/

const electron = require('electron');
const { app, BrowserWindow, globalShorcut } = electron;

let mainWindow;

app.on('ready', () =>{
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 800
	});

	mainWindow.setTitle('Facturacion');
	mainWindow.loadURL('http://localhost/Facturacion/login.php');

	mainWindow.on('closed', () =>{
		mainWindow = null;
	});
});












