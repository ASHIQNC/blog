import React from "react";
import "./Home.scss";
import wallpaper from "../../assets/wallpaper1.jpg";
import small1 from "../../assets/small1.png";
import small2 from "../../assets/small2.png";
import small3 from "../../assets/small3.png";
import small4 from "../../assets/small4.png";
import laptop from "../../assets/laptop.jpg";
import video from "../../assets/video/SampleVideo_1280x720_20mb.mp4";

import Navbar from "../Navbar/Navbar";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <div className="home__container">
      <Navbar classname="home__container__navbar" />
      <div className="home__container__wrapper">
        <div className="home__container__image-section">
          <img
            className="home__container__background-image"
            src={wallpaper}
            alt=""
          />
        </div>
        <div className="home__container__info-section">
          <div className="home__container__info-section__description">
            <div className="home__container__info-section__description-top">
              <h4 className="text-sm text-gray-400">BY EMMA / 02 MAY 2022 </h4>
              <br />
              <h1 className="text-6xl">
                Life is a flower of which love is a honey
              </h1>
              <br />
              <br />
              <h4 className="text-sm text text-gray-400">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrat text commonly used to
                demonstrate the visual form of a documen
              </h4>
            </div>
            <div className="home__container__info-section__read-me">
              <br />
              <br />
              <h4 className="text-sm text-gray-400">READ MORE </h4>
              <ArrowForwardOutlinedIcon className="home__container__info-section__arrow" />
            </div>
          </div>

          <div className="home__container__info-section__image-gallery">
            <img src={small1} alt="image1" />
            <img src={small2} alt="image2" />
            <img src={small3} alt="image3" />
            <img src={small4} alt="image4" />
          </div>
        </div>
      </div>
      <div className="home__container__popular-stories">
        <div className="home__container__popular-stories-wrapper">
          <div className="home__container__popular-stories-sub-section">
            <hr className="home__container__popular-stories-line" />
            <button class="bg-gray-300 hover:bg-blue-700 hover:text-white text-gray-500 py-2 px-4 rounded">
              POPULAR STORIES
            </button>

            <hr className="home__container__popular-stories-line" />
          </div>
          {/* card section */}
          <div className="home__container__popular-stories__card-section">
            <div class="w-96  bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  style={{ width: "100%" }}
                  src={small1}
                  alt=""
                />
              </a>
              <div class="flex flex-col items-center pb-10">
                <a href="#">
                  <h5 class="mb-2 underline  my-5 text-2xl tracking-tight text-gray-300 dark:text-white py:2">
                    TRAVEL
                  </h5>
                </a>
                <p
                  class="mb-3 font-bold text-gray-700 dark:text-gray-400 item-center"
                  style={{ textAlign: "center" }}>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far
                </p>
                <p class="mb-2 text-sm  tracking-tight text-gray-300 dark:text-white">
                  BY MICHEL JHON / 02 MAY 2022
                </p>
              </div>
            </div>
            {/*card 2  */}

            <div class="w-96 mx-5 bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  style={{ width: "100%" }}
                  src={small2}
                  alt=""
                />
              </a>
              <div class="flex flex-col items-center pb-10">
                <a href="#">
                  <h5 class="mb-2 underline my-5 text-2xl tracking-tight text-gray-300 dark:text-white py:2">
                    LIFESTYLE
                  </h5>
                </a>
                <p
                  class="mb-3 font-bold text-gray-700 dark:text-gray-400 item-center"
                  style={{ textAlign: "center" }}>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far
                </p>
                <p class="mb-2 text-sm underline  tracking-tight text-gray-300 dark:text-white">
                  BY MICHEL JHON / 02 MAY 2022
                </p>
              </div>
            </div>

            <div class="w-96 bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  class="rounded-t-lg"
                  style={{ width: "100%" }}
                  src={small3}
                  alt=""
                />
              </a>
              <div class="flex flex-col items-center pb-10">
                <a href="#">
                  <h5 class="mb-2 underline my-5 text-2xl tracking-tight text-gray-300 dark:text-white py:2">
                    FASION
                  </h5>
                </a>
                <p
                  class="mb-3 font-bold text-gray-700 dark:text-gray-400 item-center"
                  style={{ textAlign: "center" }}>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far
                </p>
                <p class="mb-2 text-sm underline tracking-tight text-gray-300 dark:text-white">
                  BY MICHEL JHON / 02 MAY 2022
                </p>
              </div>
            </div>
          </div>
          <hr className="home__container__popular-stories__seperation" />
          {/* section2 */}
          <div className="home__container__single-card-section">
            <div className="home__container__single-card-sub-section">
              <div className="home__container__single-card">
                <div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      style={{ width: "37rem" }}
                      class="rounded-t-lg"
                      src={laptop}
                      alt="image"
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 underline my-5 text-sm tracking-tight text-gray-300 dark:text-white py:2">
                        LIFESTYLE
                      </h5>
                    </a>
                    <p class="mb-3 text-2xl font-bold text-gray-700 dark:text-gray-400 item-center">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far biggest enterprise technology
                    </p>
                    <p class="mb-2 text-sm tracking-tight text-gray-300 dark:text-white">
                      BY MICHEL JHON / 02 MAY 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="home__container__single-card__profile-section">
                <div className="home__container__single-card__search-section">
                  <input
                    type="text"
                    className="home__container__single-card__search-input"
                    placeholder="Search"
                  />

                  <div
                    style={{ marginTop: "10px" }}
                    class="w-full max-w-sm bg-gray-100 items-center border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex flex-col items-center pb-20">
                      <img
                        class="w-24 h-24 mb-3 mt-20 rounded-full shadow-lg"
                        src={small2}
                        alt="Bonnie image"
                      />
                      <h5 class="mb-1 text-xl mt-10 font-medium text-gray-900 dark:text-white">
                        Bonnie Green
                      </h5>
                      <span class="text-sm text-gray-500 dark:text-gray-400">
                        Visual Designer
                      </span>
                      <p
                        style={{ maxWidth: "267px" }}
                        class="mb-3 my-5 text-sm font-small text-gray-700 dark:text-gray-400 items-center">
                        Here are the biggest enterprise technology acquisitions
                        here are the biggest enterprise technology acquisitions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card section3 */}
          <br />
          <br />
          <div className="home__container__card__section-three__wrapper">
            <div
              style={{ width: "45%" }}
              class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  style={{ width: "37rem" }}
                  class="rounded-t-lg"
                  src={laptop}
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 underline my-5 text-sm tracking-tight text-gray-300 dark:text-white py:2">
                    LIFESTYLE
                  </h5>
                </a>
                <p class="mb-3 text-2xl font-bold text-gray-700 dark:text-gray-400 item-center">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far biggest enterprise technology
                </p>
                <p class="mb-2 text-sm tracking-tight text-gray-300 dark:text-white">
                  BY MICHEL JHON / 02 MAY 2022
                </p>
              </div>
            </div>

            {/* video card */}

            <br />
            <br />
            <div
              style={{ width: "45%" }}
              class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <video
                  style={{ width: "37rem" }}
                  class="rounded-t-lg"
                  src={video}
                  alt="video"
                  controls
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 underline my-5 text-sm tracking-tight text-gray-300 dark:text-white py:2">
                    LIFESTYLE
                  </h5>
                </a>
                <p class="mb-3 text-2xl font-bold text-gray-700 dark:text-gray-400 item-center">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far biggest enterprise technology
                </p>
                <p class="mb-2 text-sm tracking-tight text-gray-300 dark:text-white">
                  BY MICHEL JHON / 02 MAY 2022
                </p>
              </div>
            </div>
          </div>
          {/* next page icon */}
          <div className="home__container__single-card-pagination">
            <nav aria-label="Page navigation example">
              <ul class="inline-flex -space-x-px">
                <li>
                  <a
                    href="#"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-green-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="px-3 mx-2.5 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-green-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    2
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-green-500 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
