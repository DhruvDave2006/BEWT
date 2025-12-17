const child_process = require('child_process')

const child = child_process.spawn('cmd.exe', ["/c", "dir", "/s", "C:\\"]);
child.stderr.on('data', (data) => {
    console.log("Stderr :", data)
})

child.stdout.on('data', (data) => {
    console.log("Stdout :", data.toString( ))
})

child.on('close', (data) => {
    console.log("Data :", data)
})

