import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import "./App.scss";
import no_profile_image from "./images/no_profile_image.jpg";

import {data} from "./json"


function App() {
  const { newMatches } = data
  console.log("newMatches",newMatches)

  return (
    <div className="App">
    <Swiper
      tag="section"
      wrapperTag="ul"
      spaceBetween={0}
      slidesPerView={1}
    >
      {newMatches.map((item, i) => {
        if(!item.to.photoRect) return (
          <SwiperSlide key={`slide-${i}`} tag='li'>
            <img
            src={no_profile_image}
            alt={`Slide ${i}`}
            />
            </SwiperSlide>
        )
        
        return (
          <SwiperSlide key={`slide-${i}`} tag='li'>
            <div className="img-container">
            <img
            src={`${item.to.photoRect}`}
            alt={`Slide ${i}`}
            />
            <div className="info">
                <div className="name">{item.to.name}</div>
                <div className="job-title">{item.to.jobTitle}</div>
                <div className="location">{item.to.displayLocation}</div>
                <div className="backgrounds">{item.to.backgrounds}</div>
                <div className="industries">{item.to.industries}</div>
                <div className="interests">{item.to.interests}</div>
                
            </div>

            </div>
           
            </SwiperSlide>
        )
      })}
    </Swiper>
    </div>
  );
}

export default App;
