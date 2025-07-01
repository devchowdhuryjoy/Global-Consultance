import './App.css'
import StudyAbroadServices from './Component/Abroad/StudyAbroadServices'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'
import PopularCourse from './Component/Popular Course/PopularCourse'
import Textimage from './Component/TextImage/Textimage'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <StudyAbroadServices></StudyAbroadServices>
      <Textimage></Textimage>
      <PopularCourse></PopularCourse>
    </>
  )
}

export default App
