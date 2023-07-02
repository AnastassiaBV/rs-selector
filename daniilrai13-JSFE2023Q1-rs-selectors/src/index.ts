import './styles/style.css'
import App from './components/App'
let rightSide = document.querySelector('.right__col') as HTMLDivElement
let leftSide = document.querySelector('.left__col') as HTMLDivElement
let app: App = new App()
app.start(rightSide, leftSide)


