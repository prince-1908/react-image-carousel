import './index.css'
import './App.css'
import { Carousel } from './components/Carousel'
import { slides } from './data/CarouselData.json'

function App() {

  return (
    <>
      <div className='flex justify-center items-center h-[100vh]'>
        <Carousel data={slides} />
      </div>
    </>
  )
}

export default App
