class Game {
    constructor() {
        this.gameDiv;
        this.nextDiv;

        this.nextData = [[0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]]

        this.gameData = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],]


        this.nextDivs = [];
        this.gameDivs = [];

        this.resetDiv = {}

        this.cur;
        this.next;
    }
    refreshDiv(data, divs) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[0].length; j++) {
                divs[i][j].className = "item " + util.pickColor(data[i][j])
            }
        }
    }
    initDiv(container, data, divs) {
        for (let i = 0; i < data.length; i++) {
            let div = [];
            for (let j = 0; j < data[0].length; j++) {
                let newNode = document.createElement("div")
                newNode.className = " item "
                container.appendChild(newNode)
                div.push(newNode)
            }
            divs.push(div)
        }
    }
    init(doms,type,dir) {
        let gameDiv = doms.gameDiv
        let nextDiv = doms.nextDiv
        this.resetDiv = doms.resetDiv
        this.next = factory.make(type,dir)
        this.next.getRoate(dir)
        this.initDiv(gameDiv, this.gameData, this.gameDivs)
        this.initDiv(nextDiv, this.next.data, this.nextDivs)
        this.refreshDiv(this.gameData, this.gameDivs)
        this.refreshDiv(this.next.data, this.nextDivs)
    }
    setData() {
        for (let i = 0; i < this.cur.data.length; i++) {
            for (let j = 0; j < this.cur.data[0].length; j++) {
                if (this.check(this.cur.origin, i, j)) {
                    this.gameData[this.cur.origin.x + i][this.cur.origin.y + j] = this.cur.data[i][j]
                }
            }
        }
    }
    clearData() {
        for (let i = 0; i < this.cur.data.length; i++) {
            for (let j = 0; j < this.cur.data[0].length; j++) {
                if (this.check(this.cur.origin, i, j)) {
                    this.gameData[this.cur.origin.x + i][this.cur.origin.y + j] = 0
                }
            }
        }
    }
    check(pos, x, y, imp) {

        if (pos.x + x < 0) {
            return false
        }
        else if (pos.x + x >= this.gameData.length) {
            return false
        }
        else if (pos.y + y < 0) {
            return false
        }
        else if (pos.y + y >= this.gameData[0].length) {
            return false
        }
        else if (this.gameData[pos.x + x][pos.y + y] !== 0 && this.gameData[pos.x + x][pos.y + y] !== this.cur.data[x][y]) {
            return false
        } else {
            return true
        }
    }
    isValid(pos, data, imp) {
        imp = true
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[0].length; j++) {
                if (data[i][j] !== 0) { //方块不为空
                    if (!this.check(pos, i, j, imp)) {
                        //方块检查不合格
                        return false
                    }
                }
            }
        }
        return true
    }
    //handle 
    down() {
        if (this.cur.canDown(this.isValid.bind(this))) {
            this.clearData()
            this.cur.down()
            this.setData()
            this.refreshDiv(this.gameData, this.gameDivs)
            return true
        }
        return false
    }
    right() {
        if (this.cur.canRight(this.isValid.bind(this))) {
            this.clearData()
            this.cur.right()
            this.setData()
            this.refreshDiv(this.gameData, this.gameDivs)
        }
    }
    left() {
        if (this.cur.canLeft(this.isValid.bind(this))) {
            this.clearData()
            this.cur.left()
            this.setData()
            this.refreshDiv(this.gameData, this.gameDivs)
        }
    }
    rotate() {
        if (this.cur.canRoate(this.isValid.bind(this))) {
            this.clearData()
            this.cur.roate()
            this.setData()
            this.refreshDiv(this.gameData, this.gameDivs)
        }
    }
    fall() {
        while (this.down()) { }
    }
    getNextSquare(type,roate) {
        this.cur = this.next
        this.next = factory.make(type,roate)
        this.setData()
        this.refreshDiv(this.gameData, this.gameDivs)
        this.refreshDiv(this.next.data, this.nextDivs)
    }
    checkClear() {
        let clearNumber = 0
        for (let i = this.gameData.length - 1; i >= 0; i--) {
            let clear = true
            for (let j = 0; j < this.gameData[0].length; j++) {
                if (this.gameData[i][j] === 0) {
                    clear = false
                    break
                }
            }
            if (clear) {
                for (let m = i; m > 0; m--) {
                    for (let n = 0; n < this.gameData[0].length; n++) {
                        this.gameData[m][n] = this.gameData[m - 1][n]
                    }
                    for (let n = 0; n < this.gameData[0].length; n++) {
                        this.gameData[0][n] = 0
                    }
                }
                i++
                clearNumber++
            }
        }
        return clearNumber
    }
    checkGameOver() {
        let gameOver = false
        for (let i = 0; i < this.gameData[0].length; i++) {
            if (this.gameData[1][i] !== 0) {
                gameOver = true
                break
            }
        }
        return gameOver
    }
    gameOver(mess) {
        document.getElementById("over_text").innerHTML = mess
        this.resetDiv.style.display = "block"
    }
    addTailLines(lines) {
        for (let i = 0; i < this.gameData.length - lines.length; i++){
            this.gameData[i] = this.gameData[i+lines.length]
        }
        for (let i = 0; i < lines.length; i++){
            this.gameData[this.gameData.length-lines.length+i]= lines[i]
        }

        this.cur.origin.x = this.cur.origin.x - lines.length;
        if (this.cur.origin.x < 0) {
            this.cur.origin.x = 0;
        }

        this.refreshDiv(this.gameData,this.gameDivs)
    }
}
