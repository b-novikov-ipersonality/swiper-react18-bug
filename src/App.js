import logo from "./logo.svg";
import "./App.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

function App() {
  const [swiper, setSwiper] = useState();
  useEffect(() => {
    if (swiper) {
      swiper.on('slideChange', (s) => {
        console.log(s);
      })
    }
  }, [swiper])
  return (
    <div className="App">
      <Swiper onSwiper={setSwiper}>
        <SwiperSlide>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </SwiperSlide>
        <SwiperSlide>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Or don't learn React
            </a>
          </header>
        </SwiperSlide>
        <SwiperSlide>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              I don't care
            </a>
          </header>
        </SwiperSlide>
        <SwiperSlide>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Do whatever you want
            </a>
          </header>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
