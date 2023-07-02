import LeftSide from './LeftSide'
import RightSide from './RightSide'

class App {
    leftSide: LeftSide
    rightSide: RightSide

    constructor() {
        this.leftSide = new LeftSide();
        this.rightSide = new RightSide();
    }
    start(rightSideEl:HTMLElement,leftSideEl: HTMLElement) {
        this.leftSide.drawSide(leftSideEl)
    }
}
export default App