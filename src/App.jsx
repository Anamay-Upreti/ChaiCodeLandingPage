import React from "react";
import Navbar from "./components/Navbar";
import ContainerOne from "./components/ContainerOne";
import TrustedBtn from "./components/TrustedBtn";
import CohortBtn from "./components/CohortBtn";
import LinePart from "./components/LinePart";
import TweetContainer from "./tweetsec/TweetContainer";
import TweetCard from "./tweetsec/TweetCard";
import TweetCard2 from "./tweetsec/TweetCard2";
import TweetCard3 from "./tweetsec/TweetCard3";
import CohortClassBtn from "./components/CohortClassBtn";
import StudentCard from "./components/StudentCard";
import CohortContainer from "./Cohortsec/CohortContainer";
import CohortCard from "./Cohortsec/CohortCard";
import CohortCard2 from "./Cohortsec/CohortCard2";
import CohortCard3 from "./Cohortsec/CohortCard3";
import ViewCohortBtn from "./components/ViewCohortBtn";
import FeedbackContainer from "./Feedback/FeedbackContainer";
import FeedbackCard from "./Feedback/FeedbackCard";
import UdemyInfo from "./Udemy/UdemyInfo";
import UdemyCard from "./Udemy/UdemyCard";
import Benefits from "./Benefits/Benefits";
import BenefitsCard from "./Benefits/BenefitsCard";
import BenefitsCard2 from "./Benefits/BenefitsCard2";
import BenefitsCard3 from "./Benefits/BenefitsCard3";
import BenefitsCard4 from "./Benefits/BenefitsCard4";
import BenefitsCard5 from "./Benefits/BenefitsCard5";
import BenefitsCard6 from "./Benefits/BenefitsCard6";
import AluminiCard from "./components/AluminiCard";
import ProofCContainer from "./ChaiCodeSir/ProofCContainer";
import HC from "./ChaiCodeSir/HC";
import CCard from "./ChaiCodeSir/CCard";
import CCard2 from "./ChaiCodeSir/CCard2";
import CCard3 from "./ChaiCodeSir/CCard3";
import CCard5 from "./ChaiCodeSir/CCard5";
import CCard4 from "./ChaiCodeSir/CCard4";
import CCard6 from "./ChaiCodeSir/CCard6";
import TopicsContainer from "./topicscard/TopicsContainer";
import Community from "./Community/Community";
import DisUser from "./components/DisUser";
import FreeAPI from "./FreeAPI/FreeAPI";
import ApiCard from "./FreeAPI/ApiCard";
import ApiButton from "./FreeAPI/ApiButton";
import CommunityCard from "./Community/CommunityCard";
import Footer1 from "./Community/Footer1";
import Footer2 from "./Community/Footer2";
import FooterMain from "./components/FooterMain";
import TopicsCard from "./topicscard/TopicsCard";
import TopicsCard2 from "./topicscard/TopicsCard2";
import TopicsCard3 from "./topicscard/TopicsCard3";
import TopicsCard4 from "./topicscard/TopicsCard4";
import TopicsCard5 from "./topicscard/TopicsCard5";
import TopicsCard6 from "./topicscard/TopicsCard6";
import TopicsCard7 from "./topicscard/TopicsCard7";
import TopicsCard8 from "./topicscard/TopicsCard8";
import TopicsCard9 from "./topicscard/TopicsCard9";
import TopicsCard10 from "./topicscard/TopicsCard10";
import TopicsCard11 from "./topicscard/TopicsCard11";
import TopicsCard12 from "./topicscard/TopicsCard12";
import TopicsCard13 from "./topicscard/TopicsCard13";
import TopicsCard14 from "./topicscard/TopicsCard14";
import TopicsCard15 from "./topicscard/TopicsCard15";
import LinePartSM from "./components/LinePartSM";
import DisUserSM from "./components/DisUserSM";
import ApiButtonSM from "./FreeAPI/ApiButtonSM";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <ContainerOne />
      </div>
      <div className="absolute top-78 left-165 ">
        <TrustedBtn />
      </div>
      <div className="absolute top-100 left-120 rounded-3xl cursor-pointer max-sm:hidden className='flex flex-col items-center justify-center'">
        <iframe
          width="660"
          height="315"
          src="https://www.youtube.com/embed/VNb_LawBBWU?si=VM05t20f0hR2cp1X" // Replace with your YouTube video ID
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* mobile */}
      <div className="relative w-full pb-[56.25%] sm:hidden">
        {" "}
        {/* 16:9 aspect ratio container */}
        <div className="absolute top-55 left-61 transform -translate-x-1/2 w-[70%] rounded-3xl overflow-hidden">
          <iframe
            className="w-full h-full aspect-video" // 16:9 aspect ratio
            src="https://www.youtube.com/embed/VNb_LawBBWU?si=VM05t20f0hR2cp1X"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <CohortBtn />
      <LinePart />
      <LinePartSM />
      <TweetContainer />
      <TweetCard />
      <TweetCard2 />
      <TweetCard3 />
      <CohortClassBtn />
      <div className="absolute top-160 left-0 max-sm:hidden">
        <LinePart />
      </div>
      <div className="absolute top-100 left-0 sm:hidden">
        <LinePartSM />
      </div>
      <div className="absolute top-375 left-130 text-white jaldi-bold text-xl max-sm:hidden">
        <h1>
          Our Students are not only working in big tech companies but are now
          founders of{" "}
        </h1>
        <span className="absolute left-40">
          funded startups and product creators.
        </span>
      </div>
      {/* mobile */}
      <div className="absolute top-220 left-29 text-white jaldi-bold text-[8px] sm:hidden">
        <h1>
          Our Students are not only working in big tech companies but are now
          founders of{" "}
        </h1>
        <span className="absolute left-17">
          funded startups and product creators.
        </span>
      </div>
      <StudentCard />
      <span className="absolute top-0 left-75 max-sm:absolute max-sm:left-26">
        <StudentCard />
      </span>
      <span className="absolute top-0 left-151 max-sm:absolute max-sm:left-52">
        <StudentCard />
      </span>
      <span className="absolute top-0 left-227 max-sm:hidden">
        <StudentCard />
      </span>
      <div className="absolute top-230 left-0">
        <LinePart />
      </div>
      <div className="absolute top-130 left-0">
        <LinePartSM />
      </div>
      <CohortContainer />

      <CohortCard />
      <CohortCard2 />
      <CohortCard3 />
      <ViewCohortBtn />
      <div className="absolute top-430 left-0">
        <LinePart />
      </div>
      <div className="absolute top-535 left-0">
        <LinePartSM />
      </div>
      <FeedbackContainer />
      <FeedbackCard />
      <span className="absolute top-0 left-100 max-sm:absolute max-sm:-left-40 max-sm:-top-24 ">
        <FeedbackCard />
      </span>
      <span className="absolute top-0 left-200 max-sm:hidden">
        <FeedbackCard />
      </span>
      <span className="absolute top-60 left-0 max-sm:top-52">
        <FeedbackCard />
      </span>
      <span className="absolute top-60 left-100 max-sm:absolute max-sm:-left-40 max-sm:top-27">
        <FeedbackCard />
      </span>
      <span className="absolute top-60 left-200 max-sm:hidden">
        <FeedbackCard />
      </span>
      <div className="absolute top-490 -left-10 max-sm:hidden">
        <CohortClassBtn />
      </div>
      <div className="absolute top-590 -left-2 sm:hidden ">
        <CohortClassBtn />
      </div>
      <div className="absolute top-650 left-0">
        <LinePart />
      </div>
      <div className="absolute top-685 left-0">
        <LinePartSM />
      </div>
      <UdemyInfo />
      <UdemyCard />
      <div className="absolute top-840 left-0">
        <LinePart />
      </div>
      <div className="absolute top-785 left-0">
        <LinePartSM />
      </div>
      <Benefits />
      <BenefitsCard />
      <BenefitsCard2 />
      <BenefitsCard3 />
      <BenefitsCard4 />
      <BenefitsCard5 />
      <BenefitsCard6 />
      <AluminiCard />
      <div className="absolute top-1150 left-0">
        <LinePart />
      </div>
      <div className="absolute top-965 left-0">
        <LinePartSM />
      </div>
      <ProofCContainer />
      <HC />
      <CCard />
      <CCard2 />
      <CCard3 />
      <CCard5 />
      <CCard4 />
      <CCard6 />
      <div className="absolute top-1270 -left-2 max-sm:hidden">
        <CohortClassBtn />
      </div>
      <div className="absolute top-1108 -left-2 sm:hidden">
        <CohortClassBtn />
      </div>
      <div className="absolute top-1430 left-0">
        <LinePart />
      </div>
      <div className="absolute top-1205 left-0">
        <LinePartSM />
      </div>
      <TopicsContainer />
      <TopicsCard />
      <TopicsCard2 />
      <TopicsCard3 />
      <TopicsCard4 />
      <TopicsCard5 />
      <TopicsCard6 />
      <TopicsCard7 />
      <TopicsCard8 />
      <TopicsCard9 />
      <TopicsCard10 />
      <TopicsCard11 />
      <TopicsCard12 />
      <TopicsCard13 />
      <TopicsCard14 />
      <TopicsCard15 />
      <div className="absolute top-1550 left-0">
        <LinePart />
      </div>
      <Community />
      <DisUser />
      <DisUserSM />
      <div className="absolute top-1735 left-0">
        <LinePart />
      </div>
      <div className="absolute top-1285 left-0">
        <LinePartSM />
      </div>
      <FreeAPI />
      <ApiCard />
      <ApiButton />
      <ApiButtonSM />
      <div className="absolute top-1890 left-0">
        <LinePart />
      </div>
      <div className="absolute top-1390 left-0">
        <LinePartSM />
      </div>
      <CommunityCard />
      <Footer1 />
      <Footer2 />
      <FooterMain />
    </>
  );
};

export default App;
