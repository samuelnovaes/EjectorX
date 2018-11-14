const cp = require('child_process')

function loopEject(){
	const ejector = cp.spawn('eject', ['-T'])
	ejector.on('close', () => {
		loopEject()
	})
}

function loopSong(){
	const ejector = cp.spawn('aplay', ['x.wav'])
	ejector.on('close', () => {
		loopSong()
	})
}

loopEject()
loopSong()