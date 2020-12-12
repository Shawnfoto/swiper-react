import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import "./App.css";
import {data} from "./json"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function App() {
  const { newMatches } = data
  console.log("newMatches",newMatches)

  return (
    <div className="App">
    <Swiper
      navigation
      tag="section"
      wrapperTag="ul"
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {newMatches.map((item, i) => {
        if(!item.to.photoRect) return (
          <SwiperSlide key={`slide-${i}`} tag='li'>
            no picture
            </SwiperSlide>
        )
        
        return (
          <SwiperSlide key={`slide-${i}`} tag='li'>
            <img
            src={`${item.to.photoRect}`}
            alt={`Slide ${i}`}
            />
            </SwiperSlide>
        )
      })}
    </Swiper>
    </div>
  );
}

export default App;
