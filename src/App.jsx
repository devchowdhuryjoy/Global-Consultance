// import './App.css'
// import StudyAbroadServices from './Component/Abroad/StudyAbroadServices'
// import AwardsCarousel from './Component/Awards&achievements/AwardsCarousel'
// import Banner from './Component/Banner/Banner'
// import ContactUs from './Component/Contact Us/ContactUs'
// import EducationService from './Component/Education Service/EducationService'
// import Footer from './Component/Footer/Footer'
// import Navbar from './Component/Navbar/Navbar'
// import OurAchievements from './Component/Our Achievements/OurAchievements'
// import PopularCourse from './Component/Popular Course/PopularCourse'
// import SimpleSteps from './Component/Simple Steps/SimpleSteps'
// import SuccessStories from './Component/SuccessStories/SuccessStories'
// import Textimage from './Component/TextImage/Textimage'

// function App() {
  

//   return (
//     <>
//       <Navbar></Navbar>
//       <Banner></Banner>
//       <StudyAbroadServices></StudyAbroadServices>
//       <Textimage></Textimage>
//       <PopularCourse></PopularCourse>
//       <SimpleSteps></SimpleSteps>
//       <OurAchievements></OurAchievements>
//       <AwardsCarousel></AwardsCarousel>
//       <SuccessStories></SuccessStories>
//       <ContactUs></ContactUs>
//       <EducationService></EducationService>
//       <Footer></Footer>
//     </>
//   )
// }

// export default App



// App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import HomePage from './Component/Home Page/HomePage';
import ContactUs from './Component/Contact Us/ContactUs';
import AwardsSection from './Component/Navbar/About/AwardsSection';
import TeamSection from './Component/Navbar/About/TeamSection';
import VideoTestimonials from './Component/Navbar/About/VideoTestimonials';
import AboutUs from './Component/Navbar/About/AboutUs';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission" element={<AwardsSection />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/testimonials" element={<VideoTestimonials />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/uk" element={<div className="min-h-[50vh] text-center py-10 text-xl">UK Page</div>} />
        <Route path="/visa-help" element={<div className="min-h-[50vh] text-center py-10 text-xl">Visa Help Page</div>} />
        <Route path="/counseling" element={<div className="min-h-[50vh] text-center py-10 text-xl">Counseling Page</div>} />
        <Route path="/blogs" element={<div className="min-h-[50vh] text-center py-10 text-xl">Blogs Page</div>} />
        <Route path="/guides" element={<div className="min-h-[50vh] text-center py-10 text-xl">Guides Page</div>} />
        <Route path="/scholarships/partial" element={<div className="min-h-[50vh] text-center py-10 text-xl">Partial Scholarship</div>} />
        <Route path="/scholarships/full-funded" element={<div className="min-h-[50vh] text-center py-10 text-xl">Full Funded Scholarship</div>} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;







