import Banner from "../Banner/Banner";
import StudyAbroadServices from "../Abroad/StudyAbroadServices";
import Textimage from "../TextImage/Textimage";
import PopularCourse from "../Popular Course/PopularCourse";
import SimpleSteps from "../Simple Steps/SimpleSteps";
import OurAchievements from "../Our Achievements/OurAchievements";
import AwardsCarousel from "../Awards&achievements/AwardsCarousel";
import SuccessStories from "../SuccessStories/SuccessStories";
import ContactsTwo from "../ContactsTwo.jsx/ContactsTwo";

// import EducationService from '../Education Service/EducationService';

const HomePage = () => {
  return (
    <>
      <Banner />
      <StudyAbroadServices />
      <Textimage />
      <PopularCourse />
      <SimpleSteps />
      <OurAchievements />
      <AwardsCarousel />
      <SuccessStories />
      <ContactsTwo />

      {/* <EducationService /> */}
    </>
  );
};

export default HomePage;
