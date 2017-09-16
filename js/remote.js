class Remote {
  constructor(socket) {
    this.game = {};
    this.ITERVAL = 600;
    this.timer = {};
    this.score = 0;
    this.scoreDiv = document.getElementById("remote_score");
    this.timeDiv = document.getElementById("remote_time");
    this.beginTime = 0;
    this.time = 0;
    this.bindKeyEvent();
  }
  start(type, dir) {
    let gameDiv = document.getElementById("remote_gameBox");
    let nextDiv = document.getElementById("remote_nextBox");
    let resetDiv = document.getElementById("lose");
    this.game = new Game();
    this.game.init(
      {
        gameDiv,
        nextDiv,
        resetDiv
      },
      type,
      dir
    );

    document.querySelector("#waiting").style.display = "none";

    this.beginTime = Date.now();
  }
  bindKeyEvent() {
    socket.on("init", data => {
      this.start(data.type, data.roate);
    });
    socket.on("next", data => {
      this.game.getNextSquare(data.type, data.dir);
    });
    socket.on("rotate", data => {
      this.game.rotate();
    });
    socket.on("right", data => {
      this.game.right();
    });
    socket.on("left", data => {
      this.game.left();
    });
    socket.on("down", data => {
      this.game.down();
    });
    socket.on("fall", data => {
      this.game.fall();
    });
    socket.on("line", data => {
      this.game.checkClear();
      local.game.addTailLines(data);
      //为了避免高延迟发生的错误 还是需要进行确认同步  
      socket.emit('addLineSucces',data)
    });
    socket.on("addScope", data => {
      this.addScope(data);
    });
    socket.on("lose", data => {
      local.game.gameOver("你赢了");
      local.stop();
    });
    socket.on("addTail", data => {
        thi
    });
    socket.on('addLineSucces', data => {
        this.game.addTailLines(data)
    })  
  }
  stop() {
    clearInterval(this.timer);
    window.onkeydown = null;
  }
  addScope(number) {
    console.log(number);
    this.score += number;
    this.scoreDiv.innerHTML = this.score;
  }
  addTime() {
    let nowTime = Math.floor(this.time / 1000);
    // this.game.addTailLines(this.generataBottomLine(1))
    this.timeDiv.innerHTML = nowTime;
  }
  generataBottomLine(lineNum) {
    console.log(lineNum);
    let lines = [];
    for (let i = 0; i < lineNum; i++) {
      let line = [];
      for (let j = 0; j < this.game.gameData[0].length; j++) {
        line.push(Math.ceil(Math.random() * 7) - 1);
      }
      lines.push(line);
    }
    return lines;
  }
}
