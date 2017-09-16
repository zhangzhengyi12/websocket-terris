let Square = function () {
    this.data = [
        [0, 3, 0, 0],
        [0, 3, 0, 0],
        [0, 3, 0, 0],
        [0, 3, 0, 0],
    ]
    this.origin = {
        x: 0,
        y: 0
    }
    this.rotate = [
        [
            [0, 3, 0, 0],
            [0, 3, 0, 0],
            [0, 3, 0, 0],
            [0, 3, 0, 0],
        ], [
            [0, 0, 0, 0],
            [3, 3, 3, 3],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 3, 0, 0],
            [0, 3, 0, 0],
            [0, 3, 0, 0],
            [0, 3, 0, 0],
        ], [
            [0, 0, 0, 0],
            [3, 3, 3, 3],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
    this.dir = 0
    this.addSoleColor()
}

Square.prototype.canDown = function (isValid) {
    let test = {}
    test.x = this.origin.x + 1
    test.y = this.origin.y
    let res = isValid(test, this.data)
    // console.log(res);
    return res
}

Square.prototype.down = function () {
    this.origin.x = this.origin.x + 1
}

Square.prototype.canLeft = function (isValid) {
    let test = {}
    test.x = this.origin.x
    test.y = this.origin.y - 1
    return isValid(test, this.data)
}

Square.prototype.left = function () {
    this.origin.y = this.origin.y - 1
}

Square.prototype.canRight = function (isValid) {
    let test = {}
    test.x = this.origin.x
    test.y = this.origin.y + 1
    return isValid(test, this.data)
}

Square.prototype.right = function () {
    this.origin.y = this.origin.y + 1
}

Square.prototype.canRoate = function (isValid) {
    let tmpDir = this.dir + 1
    if (tmpDir >= 4) { tmpDir = 0 }
    return isValid(this.origin, this.rotate[tmpDir])
}

Square.prototype.roate = function () {
    this.dir++
    this.dir %= 4
    this.data = this.rotate[this.dir]
}

Square.prototype.addSoleColor = function () {
    let allSole = Math.random() * .1
    // console.log(allSole);
    for (let i = 0; i < this.data.length; i++) {
        for (let j = 0; j < this.data[0].length; j++) {
            if (this.data[i][j] != 0) { //方块不为空
                this.data[i][j] += allSole
            }
        }
    }

    this.rotate.forEach((item) => {
        for (let i = 0; i < item.length; i++) {
            for (let j = 0; j < item[0].length; j++) {
                if (item[i][j] != 0) { //方块不为空
                    item[i][j] += allSole
                }
            }
        }
    })
}

Square.prototype.getRoate = function (index) {
    this.dir = index
    this.data = this.rotate[index]
}
