import objOfImages from '../components/images'
import { Images } from '../components/images'
import taskQuestionData from './taskQuestion'

class LeftSide {
    imgs: Images
    side: HTMLElement

    constructor() {
        this.imgs = objOfImages;
    }
    drawHeader() {
        let logoImg: HTMLElement = this.side.querySelector('.logo__img')
        logoImg.innerHTML = `<img src=${this.imgs.logo}>`
        // console.log(this.imgs)
    }
    drawTable() {
        let table: HTMLElement = this.side.querySelector('.task__table')
        let tableImage: HTMLElement = document.createElement('img')
        tableImage.setAttribute('src', `${this.imgs.table}`)
        tableImage.setAttribute('class', 'table__img')
        table.prepend(tableImage)
    }
    drawSide(side: HTMLElement) {
        this.side = side
        this.drawHeader()
        this.drawTable()
    }
    drawItems() {
        let tableField: HTMLElement = this.side.querySelector('.table__items')
        tableField.innerHTML = taskQuestionData[0].name
    }
}
export default LeftSide