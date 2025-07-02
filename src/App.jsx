import './App.css'
import StudyAbroadServices from './Component/Abroad/StudyAbroadServices'
import AwardsCarousel from './Component/Awards&achievements/AwardsCarousel'
import Banner from './Component/Banner/Banner'
import ContactUs from './Component/Contact Us/ContactUs'
import EducationService from './Component/Education Service/EducationService'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import OurAchievements from './Component/Our Achievements/OurAchievements'
import PopularCourse from './Component/Popular Course/PopularCourse'
import SimpleSteps from './Component/Simple Steps/SimpleSteps'
import SuccessStories from './Component/SuccessStories/SuccessStories'
import Textimage from './Component/TextImage/Textimage'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <StudyAbroadServices></StudyAbroadServices>
      <Textimage></Textimage>
      <PopularCourse></PopularCourse>
      <SimpleSteps></SimpleSteps>
      <OurAchievements></OurAchievements>
      <AwardsCarousel></AwardsCarousel>
      <SuccessStories></SuccessStories>
      <ContactUs></ContactUs>
      <EducationService></EducationService>
      <Footer></Footer>
    </>
  )
}

export default App
