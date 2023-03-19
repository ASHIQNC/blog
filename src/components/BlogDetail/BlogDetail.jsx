import React from "react";
import Navbar from "../Navbar/Navbar.js";
import "./BlogDetail.scss";
import snow from "../../assets/snow.jpg";
import small1 from "../../assets/small1.png";
import small2 from "../../assets/small2.png";
import small3 from "../../assets/small3.png";
import small4 from "../../assets/small4.png";
import art from "../../assets/art.jpg";

import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Footer from "../footer/Footer";

const BlogDetail = () => {
  return (
    <div className="blog-details__container">
      <Navbar />
      <div className="blog-details__wrapper">
        {/* banner image section */}
        <div className="blog-details__image">
          <img className="blog-details__image-flower" src={snow} alt="snow" />
        </div>
      </div>

      {/* image gallery */}
      <div className="blog-details__image-gallery">
        <div className="blog-details__image-gallery-wrapper">
          {/* section1 */}
          <div className="blog-details__top-section">
            <div className="blog-details__top-sub-section">
              <h5 class="mb-2 underline my-5 text-sm tracking-tight text-gray-300 dark:text-white py:2">
                LIFESTYLE
              </h5>
              <p class="mb-3 text-2xl font-bold text-gray-700 dark:text-gray-400 item-center">
                Here are the biggest enterprise technology acquisitions of 2021
                so far biggest enterprise technology
              </p>
              <p class="mb-2 text-sm tracking-tight text-gray-300 dark:text-white">
                BY MICHEL JHON / 02 MAY 2022
              </p>
            </div>
            <div className="blog-details__search-input__wrapper">
              <input
                type="text"
                className="blog-details__search-input"
                placeholder="Search"
              />
            </div>
          </div>

          {/* section2 */}

          <div className="blog-details__image__left-section">
            {/* left section */}
            <div className="blog-details__image__left__sub-section">
              <img src={snow} alt="" />
              <p class="mb-3 text-xl my-5  text-gray-700 dark:text-gray-400 item-center">
                <strong style={{ fontSize: "50px" }}>In</strong> publishing and
                graphic design, Lorem ipsum is a placeholder text commonly used
                to demonstrate the visual form of a document or a typeface
                without relying on meaningful content. Lorem ipsum may be used
                as a placeholder before final copy is available.
                <br />
                <br />
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
              <p class="mb-2 text-sm tracking-tight text-gray-300 dark:text-white">
                BY MICHEL JHON / 02 MAY 2022
              </p>

              {/* quates section */}
              <div className="blog-details__image__left__quates-container__section">
                <blockquote class="text-xl font-semibold text-gray-900 dark:text-white">
                  <svg
                    aria-hidden="true"
                    class="w-10 h-10 text-gray-400 dark:text-gray-600"
                    viewBox="0 0 24 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                      fill="currentColor"
                    />
                  </svg>
                  <p>
                    Flowbite is just awesome. It contains tons of predesigned
                    components and pages
                  </p>

                  <p class="mb-2 my-5 text-sm tracking-tight text-gray-300 dark:text-white">
                    - BY MICHEL JHON
                  </p>
                </blockquote>
              </div>

              {/* description */}
              <div className="blog-details__image__left__detail__section">
                <div className="blog-details__image__left__detail__description-section">
                  <h3 class="mb-2  my-5 font-bold text-2xl tracking-tight text-black-300 dark:text-white py:2">
                    Familiar with the countless indescribable
                  </h3>
                  <p class="mb-3 text-xl my-5  text-gray-700 dark:text-gray-400 item-center">
                    publishing and graphic design, Lorem ipsum is a placeholder
                    text commonly used to demonstrate the visual form of a
                    document or a typeface without relying on meaningful
                    content. Lorem ipsum may be used as a placeholder before
                    final copy is available.
                  </p>

                  {/* image */}
                  <div className="blog-details__image__left__detail__section-image__wrapper">
                    <div className="blog-details__image__left__detail__section-image">
                      <div className="blog-details__image__left__detail__section-image-one">
                        <img src={art} alt="art" />
                      </div>
                      <div className="blog-details__image__left__detail__section-image-two">
                        <img src={art} alt="art" />
                      </div>
                    </div>
                  </div>

                  <h3 class="mb-2  my-5 font-bold text-2xl tracking-tight text-black-300 dark:text-white py:2">
                    Familiar with the countless indescribable
                  </h3>
                  <p class="mb-3 text-xl my-5  text-gray-700 dark:text-gray-400 item-center">
                    publishing and graphic design, Lorem ipsum is a placeholder
                    text commonly used to demonstrate the visual form of a
                    document or a typeface without relying on meaningful
                    content. Lorem ipsum may be used as a placeholder before
                    final copy is available.
                  </p>
                </div>
              </div>

              {/* shares */}
              <div className="blog-details__image__left__shares__section">
                <div className="blog-details__image__left__shares__section__wrapper">
                  <div className="blog-details__image__left__shares__section__wrapper-header">
                    <h5
                      style={{ letterSpacing: "10px" }}
                      class="mb-2 my-5 text-xl tracking-tight text-gray-500 dark:text-white py:2">
                      SHARES:
                    </h5>
                  </div>
                  <div className="blog-details__image__left__shares__section__wrapper-social-media">
                    <a className="blog-details__image__left__shares__social-media__content">
                      <FacebookRoundedIcon fontSize="large" />
                    </a>
                    <a className="blog-details__image__left__shares__social-media__content">
                      <InstagramIcon fontSize="large" />
                    </a>
                    <a className="blog-details__image__left__shares__social-media__content">
                      <TwitterIcon fontSize="large" />
                    </a>
                    <a className="blog-details__image__left__shares__social-media__content">
                      <LinkedInIcon fontSize="large" />
                    </a>
                  </div>
                </div>
              </div>

              {/* profile */}
              <div className="blog-details__image__left-section__profile-wrapper">
                <a
                  href="#"
                  class="flex flex-col items-center bg-gray-300 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    class="object-cover w-24 mx-10 h-24 mb-3 rounded-full shadow-lg"
                    src={small2}
                    alt=""
                  />
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Emma jackson
                    </h5>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Blogger
                    </h5>
                    <p class="mb-2 text-sm tracking-tight text-black-300 dark:text-white">
                      content. Lorem ipsum may be used as a placeholder before
                      final copy is available.
                    </p>
                  </div>
                </a>
              </div>

              {/* Prevous/next post */}

              {/* image */}
              <div className="blog-details__image__left-section__previous-next-post">
                <div className="blog-details__image__left-section__previous-next-post__container">
                  <div className="blog-details__image__left-section__previous-post">
                    <h5 class="mb-2  my-5 text-2xl tracking-tight text-black-300 dark:text-white py:2">
                      PREVIOUS POST
                    </h5>
                    <h3 class="mb-2 font-bold my-5 text-2xl tracking-tight text-black-300 dark:text-white py:2">
                      Lorem ipsum may be
                    </h3>
                  </div>
                  <div className="blog-details__image__left-section__next-post">
                    <h5 class="mb-2   my-5 text-2xl tracking-tight text-black-300 dark:text-white py:2">
                      NEXT POST
                    </h5>

                    <h3 class="mb-2 font-bold my-5 text-2xl tracking-tight text-black-300 dark:text-white py:2">
                      Lorem ipsum may be
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* right section */}
            <div className="blog-details__sub-image__right-section">
              <h5 class="mb-2  my-5 text-xl tracking-tight text-gray-500 dark:text-white py:2">
                POPULAR POSTS
              </h5>

              {/* card section */}
              <div className="blog-details__card__section">
                <a
                  href="#"
                  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    style={{ height: "170px" }}
                    class="object-cover w-full rounded-t-lg h-98 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={small1}
                    alt=""
                  />
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p class="mb-2 text-sm tracking-tight text-gray-300 dark:text-white">
                      02 MAY 2021
                    </p>
                  </div>
                </a>
                <br />
                <a
                  href="#"
                  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <img
                    style={{ height: "170px" }}
                    class="object-cover w-full rounded-t-lg h-98 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={small2}
                    alt=""
                  />
                  <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                    <p class="mb-2 text-sm tracking-tight text-gray-300 dark:text-white">
                      02 MAY 2021
                    </p>
                  </div>
                </a>
              </div>
              <div className="blog-details__poster">
                <img
                  style={{ width: "28rem", height: "50vh" }}
                  src={art}
                  alt=""
                />
              </div>

              {/* category section */}
              <div className="blog-details__category__section">
                <h5 class="mb-2  my-5 text-xl tracking-tight text-gray-500 dark:text-white py:2">
                  CATEGORIES
                </h5>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <div className="blog-details__category__image-section">
                    <div className="blog-details__category__image-section__content">
                      <img src={small1} alt="" />

                      <h5 class="mb-2  my-5 text-sm tracking-tight text-gray-500 dark:text-white py:2">
                        LifeStyle
                      </h5>
                    </div>
                  </div>
                  {/*  */}
                  <div className="blog-details__category__image-section">
                    <div className="blog-details__category__image-section__content">
                      <img style={{ marginLeft: "10px" }} src={small2} alt="" />
                      <h5 class="mb-2  my-5 text-sm tracking-tight text-gray-500 dark:text-white py:2">
                        Travel
                      </h5>
                    </div>
                  </div>
                  {/*  */}
                  <div className="blog-details__category__image-section">
                    <div className="blog-details__category__image-section__content">
                      <img src={small3} alt="" />
                      <h5 class="mb-2  my-5 text-sm tracking-tight text-gray-500 dark:text-white py:2">
                        Fasion
                      </h5>
                    </div>
                  </div>
                  {/*  */}
                  <div className="blog-details__category__image-section">
                    <div className="blog-details__category__image-section__content">
                      <img style={{ marginLeft: "10px" }} src={small4} alt="" />
                      <h5 class="mb-2  my-5 text-sm tracking-tight text-gray-500 dark:text-white py:2">
                        Interior
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* tag section */}

              <div className="blog-details__tag__section">
                <h5 class="mb-2  my-5 text-xl tracking-tight text-gray-500 dark:text-white py:2">
                  TAGS
                </h5>
                <div className="blog-details__tag__section__button">
                  <div className="blog-details__tag__section__content">
                    <button class="bg-gray-300 mr-5   hover:bg-blue-700 hover:text-white text-gray-500 py-2 px-4 rounded">
                      Art & Design
                    </button>
                  </div>

                  <div className="blog-details__tag__section__content">
                    <button class="bg-gray-300 mr-5 hover:bg-blue-700 hover:text-white text-gray-500 py-2 px-4 rounded">
                      Interior
                    </button>
                  </div>

                  <div className="blog-details__tag__section__content">
                    <button class="bg-gray-300 mr-5 hover:bg-blue-700 hover:text-white text-gray-500 py-2 px-4 rounded">
                      Fasion
                    </button>
                  </div>

                  <div className="blog-details__tag__section__content">
                    <button class="bg-gray-300 mr-5 hover:bg-blue-700 hover:text-white text-gray-500 py-2 px-4 rounded">
                      Travel
                    </button>
                  </div>

                  <div className="blog-details__tag__section__content">
                    <button class="bg-gray-300 mr-5 hover:bg-blue-700 hover:text-white text-gray-500 py-2 px-4 rounded">
                      Home Decor
                    </button>
                  </div>

                  <div className="blog-details__tag__section__content">
                    <button class="bg-gray-300 mr-5 hover:bg-blue-700 hover:text-white text-gray-500 py-2 px-4 rounded">
                      Modern
                    </button>
                  </div>

                  {/* <button class="bg-gray-300 mr-5  hover:bg-blue-700 hover:text-white text-gray-500 py-2 px-4 rounded">
                    POPULAR STORIES
                  </button> */}
                  {/* <button class="bg-gray-300 my-8 hover:bg-blue-700 hover:text-white text-gray-500 py-2 px-4 rounded">
                    POPULAR STORIES
                  </button> */}
                </div>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
