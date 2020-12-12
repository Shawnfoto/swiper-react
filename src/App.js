import { Button, Chip } from "@material-ui/core"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import "./App.scss";
import no_profile_image from "./images/no_profile_image.jpg";

// icon
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

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
                  <div className="name info-padding">{item.to.name}</div>
                  <div className="job-title info-padding">
                    <BusinessCenterIcon className="icon"/>
                    <div className="text">{item.to.jobTitle}</div>
                  </div>
                  <div className="location info-padding">
                    <LocationOnIcon className="icon"/>
                    <div className="text"> {item.to.displayLocation}</div>
                  </div>
                  <div className="backgrounds info-padding">
                    {item.to.backgrounds.map((background, i) => {
                      return (
                        <Chip 
                        key={`background-chip-${i}`}
                        className="chip-space"
                        label={background}
                        color="primary"
                        size="small"
                        />
                      )
                    })}
                    </div>
                  <div className="industries info-padding">
                  {item.to.industries.map((industry, i) => {
                      return (
                        <Chip 
                        key={`industry-chip-${i}`}
                        className="chip-space"
                        label={industry}
                        color="secondary"
                        size="small"
                        />
                      )
                    })}
                    </div>
                  <div className="interests info-padding">
                  {item.to.interests.map((interest, i) => {
                      return (
                        <Chip 
                        key={`interest-chip-${i}`}
                        className="chip-space"
                        label={interest}
                        size="small"
                        />
                      )
                    })}
                    
                    </div>
              </div>
              <FormatQuoteIcon
               color="primary"
               size="large"
               />
              <div className="desc">
                {item.to.aboutMe}
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
