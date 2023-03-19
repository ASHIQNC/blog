import React, { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
// component import
import Footer from "../footer/Footer";
import Navbar from "../Navbar/Navbar";
//css
import "./Blog.scss";
import flower from "../../assets/garden.jpg";
import small1 from "../../assets/small1.png";

const Blog = () => {
  const [images, setImages] = useState([]);
  const fetchapi = async () => {
    const response = await axios.get(
      "https://api.unsplash.com/photos/?client_id=8CJ7OwkGBZuaKne_wrEZ7K3oAIwgoXfvlOCPlbsJvUc"
    );
    console.log(response);
    const data = await response.data;
    console.log(data);

    setImages(data);
  };

  useEffect(() => {
    fetchapi();
  }, []);
  const breakPoint = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <div className="blog__container">
      <Navbar classname="blog__container__navbar" />
      {/* content  */}
      <div className="blog__container__wrapper">
        {/* banner image section */}
        <div className="blog__container__image">
          <img
            className="blog__container__image-flower"
            src={flower}
            alt="flower"
          />
        </div>
        {/* image gallery */}
        <div className="blog__container__image-gallery">
          <div className="blog__container__image-gallery__container">
            <div className="blog__container__image-gallery__header-section">
              <h1>MY BLOG</h1>
            </div>
            <div className="blog__container__image-gallery__body-section">
              <div className="blog__container__image-gallery__body-section__card">
                {/* card */}
                <Masonry
                  breakpointCols={breakPoint}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column">
                  {images.map((data) => {
                    return (
                      <div class="w-64  bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                          <img
                            class="rounded-t-lg"
                            style={{ width: "100%", height: "30vh" }}
                            src={data.urls.small}
                            alt="image"
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
                            {data.alt_description}
                          </p>
                          <p class="mb-2 text-sm  tracking-tight text-gray-300 dark:text-white">
                            BY MICHEL JHON / 02 MAY 2022
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </Masonry>
              </div>
            </div>
          </div>
        </div>

        {/* next page icon */}
        <div className="blog__container__single-card-pagination">
          <div className="blog__container__single-card-pagination__wrapper">
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

      {/* footer-section */}
      <div className="blog__footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Blog;
