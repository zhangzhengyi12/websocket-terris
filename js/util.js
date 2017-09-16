
class Util {
    constructor() {
       
    }
    pickColor(number) {
        // switch (number) {
        //     case 0:
        //         return "none";
        //         break;
        //     case 1:
        //         return "blue";
        //         break;
        //     case 2:
        //         return "red";
        //         break;
        //     case 3:
        //         return "yellow";
        //         break;
        //     case 4:
        //         return "green";
        //         break;
        //     case 5:
        //         return "purple";
        //         break;
        //     case 6:
        //         return "pink";
        //         break;
        // }
        if (number === 0) {
            return "none"
        }
        if (number < 1.3) {
            return "blue"
        }
        if (number < 2.3) {
            return "red";
        }
        if (number < 3.3) {
            return "yellow"
        }
        if (number < 4.3) {
            return "green"
        }
        if (number < 5.3) {
            return "purple"
        }
        if (number < 6.3) {
            return "pink"
        }
        if (number < 7.3) {
            return "cyan"
        }
        return "none"
    }

    getRamdonRoate() {
        let randomNumber = Math.floor(Math.random() * 4)
        return randomNumber;
    }
    getRamdonSquareType() {
        let randomType = Math.ceil(Math.random() * 7)
        return randomType
    }

        
    // }

}

window.util = new Util();
