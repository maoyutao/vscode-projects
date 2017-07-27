import { placePiece} from "./chessboard"

class player
{
    public state:boolean = false;
    constructor(public side:'o'|'x'){}
    changeState(){
        if (this.state) {
            this.state = false
        }else {
            this.state = true
        }
    }
}
export class humanPlayer extends player
{
    place(num:number):string  {
        if(this.state) {
            if(num > 9 ) {
                return `${num}不代表棋格`
            }
            if(placePiece(num, this.side)) {
                this.changeState()
                return `${this.side}方在${num}号位置成功落子`
            }else {
                return `${num}号位置不可落子`
            }
        }else {
            return "您现在不能下棋"
        }
    }
}
export class computerPlayer extends player
{
    randomPlace() {
        if(this.state) {
            while (!placePiece(Math.floor(Math.random()*9),this.side)){}
            this.changeState()
        }
    }
}