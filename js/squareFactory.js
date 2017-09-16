let Square1 = function () {
    this.data = [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
    ]
    this.origin = {
        x: 0,
        y: 0
    }
    this.rotate = [
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ], [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
        ], [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
    ]

    this.addSoleColor()
}

Square1.prototype = Square.prototype

//2


let Square2 = function () {
    this.data = [
        [0, 2, 0, 0],
        [2, 2, 2, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    this.origin = {
        x: 0,
        y: 0
    }
    this.rotate = [
        [
            [0, 2, 0, 0],
            [2, 2, 2, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [2, 0, 0, 0],
            [2, 2, 0, 0],
            [2, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [2, 2, 2, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 2, 0, 0],
            [2, 2, 0, 0],
            [0, 2, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
    this.dir = 0
    this.addSoleColor()
}

Square2.prototype = Square.prototype

//3

let Square3 = function () {
    this.data = [
        [3, 3, 3, 0],
        [0, 0, 3, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    this.origin = {
        x: 0,
        y: 0
    }
    this.rotate = [
        [
            [3, 3, 3, 0],
            [3, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [3, 3, 0, 0],
            [0, 3, 0, 0],
            [0, 3, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 3, 0],
            [3, 3, 3, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [3, 0, 0, 0],
            [3, 0, 0, 0],
            [3, 3, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
    this.dir = 0
    this.addSoleColor()
}

Square3.prototype = Square.prototype


//4

let Square4 = function () {
    this.data = [
        [4, 4, 4, 0],
        [4, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    this.origin = {
        x: 0,
        y: 0
    }
    this.rotate = [
        [
            [4, 4, 4, 0],
            [4, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [4, 4, 0, 0],
            [0, 4, 0, 0],
            [0, 4, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 4, 0],
            [4, 4, 4, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [4, 0, 0, 0],
            [4, 0, 0, 0],
            [4, 4, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
    this.dir = 0
    this.addSoleColor()
}

Square4.prototype = Square.prototype

//5


let Square5 = function () {
    this.data = [
        [0, 0, 0, 0],
        [0, 5, 5, 0],
        [0, 5, 5, 0],
        [0, 0, 0, 0],
    ]
    this.origin = {
        x: 0,
        y: 0
    }
    this.rotate = [
        [
            [0, 0, 0, 0],
            [0, 5, 5, 0],
            [0, 5, 5, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 5, 5, 0],
            [0, 5, 5, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 5, 5, 0],
            [0, 5, 5, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 5, 5, 0],
            [0, 5, 5, 0],
            [0, 0, 0, 0],
        ],
    ]
    this.dir = 0
    this.addSoleColor()
}

Square5.prototype = Square.prototype

//6

let Square6 = function () {
    this.data = [
        [0, 6, 6, 0],
        [6, 6, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    this.origin = {
        x: 0,
        y: 0
    }
    this.rotate = [
        [
            [0, 6, 6, 0],
            [6, 6, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [6, 0, 0, 0],
            [6, 6, 0, 0],
            [0, 6, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 6, 6, 0],
            [6, 6, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [6, 0, 0, 0],
            [6, 6, 0, 0],
            [0, 6, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
    this.dir = 0
    this.addSoleColor()
}

Square6.prototype = Square.prototype

//7

let Square7 = function () {
    this.data = [
        [7, 7, 0, 0],
        [0, 7, 7, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    this.origin = {
        x: 0,
        y: 0
    }
    this.rotate = [
        [
            [7, 7, 0, 0],
            [0, 7, 7, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 7, 0, 0],
            [7, 7, 0, 0],
            [7, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [7, 7, 0, 0],
            [0, 7, 7, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 7, 0, 0],
            [7, 7, 0, 0],
            [7, 0, 0, 0],
            [0, 0, 0, 0],
        ],
    ]
    this.dir = 0
    this.addSoleColor()
}

Square7.prototype = Square.prototype


//factory

let Factory = function () {

}

Factory.prototype.make = function (index, dir) {
    let s
    switch (index) {
        case 1:
            s = new Square1();
            break;
        case 2:
            s = new Square2();
            break;
        case 3:
            s = new Square3();
            break;
        case 4:
            s = new Square4();
            break;
        case 5:
            s = new Square5();
            break;
        case 6:
            s = new Square6();
            break;
        case 7:
            s = new Square7();
            break;
        default:
            s = new Square1();
            break;
    }

    s.origin.x = 0
    s.origin.y = 5

    s.getRoate(dir)

    return s
}

window.factory = new Factory();