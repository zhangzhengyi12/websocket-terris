
class Local {
    constructor(socket) {
        this.socket = socket
        this.game = {}
        this.ITERVAL = 600
        this.timer = {}
        this.score = 0
        this.scoreDiv = document.getElementById("local_score")
        this.timeDiv = document.getElementById("local_time")
        this.beginTime = 0;
        this.time = 0

        //如果接受到开始 触发自动初始化

        socket.on("start", () => {
            console.log("start");
            this.start()
        })

    }
    start() {
        let gameDiv = document.getElementById("local_gameBox")
        let nextDiv = document.getElementById("local_nextBox")
        let resetDiv = document.getElementById("lose")

        let type = util.getRamdonSquareType()
        let roate = util.getRamdonRoate()

        this.socket.emit("init", { type, roate })
        this.game = new Game()
        this.game.init({
            gameDiv,
            nextDiv,
            resetDiv
        }, type, roate)
        this.bindKeyEvent()


        this.beginTime = Date.now()

        this.timer = setTimeout(() => {
            this.move(true)
        }, this.ITERVAL)

        let secSquareType = util.getRamdonSquareType();
        let secSquareRoate = util.getRamdonRoate();
        this.game.getNextSquare(secSquareType, secSquareRoate)
        this.socket.emit("next",{type:secSquareType,dir:secSquareRoate})
    }
    bindKeyEvent() {
        let _this = this
        window.onkeydown = function (e) {
            let key = e.keyCode
            if (key === 38) {
                //up
                _this.socket.emit("rotate")
                return _this.game.rotate()
            }
            if (key === 40) {
                //down
                _this.socket.emit("down")
                return _this.game.down()
            }
            if (key === 37) {
                //left
                _this.socket.emit("left")
                return _this.game.left()
            }
            if (key === 39) {
                _this.socket.emit("right")
                return _this.game.right()
                //right
            }
            if (key === 32) {
                _this.socket.emit("fall")
                return _this.game.fall()
                //right
            }
        }

        this.socket.on('leave', () => {
            this.game.gameOver('对方离线')
            clearTimeout(this.timer)
        })
    }
    move(first) {
        let that = this
        this.time = Date.now() - this.beginTime
        this.addTime()
        //add leve
        if (!this.game.down()) {
            let isOver = this.game.checkGameOver()
            if (isOver) {
                this.game.gameOver("你输啦")
                this.socket.emit("lose")
                return
            }
            this.socket.emit('fixed')

            let secSquareType = util.getRamdonSquareType();
            let secSquareRoate = util.getRamdonRoate();
            this.game.getNextSquare(secSquareType, secSquareRoate)

            this.socket.emit("next",{type:secSquareType,dir:secSquareRoate})
            
            let clearRowNumber = this.game.checkClear()
            this.socket.emit("addScope", 50 + clearRowNumber * clearRowNumber * 1000);
            // 没必要来回传送 在本地构建数据并直接进行渲染即可
            if(clearRowNumber!==0){this.socket.emit('line',this.generataBottomLine(clearRowNumber))}
            this.addScope(50)
            this.addScope(clearRowNumber * clearRowNumber * 1000)
            this.ITERVAL -= 1
        } else {
            this.socket.emit('down')
        }
        this.timer = setTimeout(function () {
            that.move()
        }, this.ITERVAL)
    }
    stop() {
        clearTimeout(this.timer)
        window.onkeydown = null;
    }
    addScope(number) {
        this.score += number
        this.scoreDiv.innerHTML = this.score
    }
    addTime() {
        let nowTime = Math.floor(this.time / 1000)
        this.timeDiv.innerHTML = nowTime
    }
    generataBottomLine(lineNum) {
        let lines = []
        for (let i = 0; i < lineNum; i++) {
            let line = []
            for (let j = 0; j < this.game.gameData[0].length; j++) {
                line.push(Math.ceil(Math.random() * 7) - 1)
            }
            lines.push(line)
        }
        return lines 
    }
}