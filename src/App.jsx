
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
import StudyInUk from './Component/Navbar/Destination/StudyInUk';
import EducationService from './Component/Education Service/EducationService';
import StudyInCanada from './Component/Navbar/Destination/StudyInCanada';
import StudyInAustralia from './Component/Navbar/Destination/StudyInAustralia';
import StudyInUsa from './Component/Navbar/Destination/StudyInUsa';
import StudyInEurope from './Component/Navbar/Destination/StudyInEurope';
import StudyInNewZealand from './Component/Navbar/Destination/StudyInNewZealand';
import StudyInJapan from './Component/Navbar/Destination/StudyInJapan';
import AdmissionSupport from './Component/Navbar/OurService/AdmissionSupport';
import Blog from './Component/Navbar/Resource/Blog';
import ScolarshipInAustralia from './Component/Navbar/Scolarship/ScolarshipInAustralia';
import ScolarshipInUk from './Component/Navbar/Scolarship/ScolarshipInUk';


function App() {
  return (
    <>
    <div className="font-roboto">

      {/* Homepage */}
      <Navbar />
      {/* Homepage */}

      <Routes>

        {/* Homepage */}
        <Route path="/" element={<HomePage />} />
        {/* Homepage */}

        {/* about */}
        <Route path="/mission" element={<AwardsSection />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/testimonials" element={<VideoTestimonials />} />
        <Route path="/aboutus" element={<AboutUs />} />
        {/* about */}

        {/* Destination */}
        <Route path="/uk" element={<StudyInUk />} />
        <Route path="/canada" element={<StudyInCanada />} />
        <Route path="/australia" element={<StudyInAustralia />} />
        <Route path="/usa" element={<StudyInUsa />} />
        <Route path="/europe" element={<StudyInEurope />} />
        <Route path="/new-zealand" element={<StudyInNewZealand/>} />
        <Route path="/japan" element={<StudyInJapan/>} />
        {/* Destination */}
        
        {/* Our Services */}
        <Route path="/admission-support" element={<AdmissionSupport/>} />
        <Route path="/counseling" element={<div className="min-h-[50vh] text-center py-10 text-xl">Counseling Page</div>} />
        {/* Our Services */}

        {/* Blog */}
        <Route path="/blogs" element={<Blog/>} />
        {/* Blog */}

        {/* Scholarship */}
        <Route path="/scholarships" element={<ScolarshipInAustralia/>} />
        <Route path="/scolarshipinuk" element={<ScolarshipInUk/>} />
        {/* Scholarship */}

        <Route path="/scholarships/full-funded" element={<div className="min-h-[50vh] text-center py-10 text-xl">Full Funded Scholarship</div>} />

        {/* Homepage */}
        <Route path="/contactus" element={<ContactUs />} />
        {/* Homepage */}

      </Routes>

      {/* Homepage */}
      <EducationService />
      <Footer />
      {/* Homepage */}

    </div>
      
    </>
  );
}

export default App;







