let socket = io("ws://localhost:3001")




let local = new Local(socket)
// local.start()
let remote = new Remote(socket)
// remote.start(3,1)

socket.on("waiting", function (str) {
    console.log("wait");
    document.getElementById("waiting").innerHTML = str;
})

