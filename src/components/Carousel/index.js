import React from "react"
import OmgCarousel from "../OmgCarousel"
import slide1 from "../../images/carousel/bunner.jpg"
import slide2 from "../../images/carousel/d.jpg"
import slide3 from "../../images/carousel/outside.jpg"

import "./style.css"
const settings = {
  fade: true,
  speed: 2000,
  pause: `hover` /* false or hover */,
  controls: true,
  indicators: true,
  slide: true,
  style: "bg-dark",
}
const slides = [
  {
    img: slide1,
    alt: "",
    head: "",
    parag: "",
    class: {
      item: "",
      img: "d-inline-block w-100",
      img2: "",
      caption: "",
      head: "",
      parag: "",
    },
  },
  {
    img: slide2,
    alt: "",
    head: "",
    parag: "",
    class: {
      item: "",
      img: "d-inline-block w-100",
      img2: "",
      caption: "",
      head: "",
      parag: "",
    },
  },
  {
    img: slide3,
    alt: "",
    head: "",
    parag: "",
    class: {
      item: "",
      img: "d-inline-block w-100",
      img2: "",
      caption: "",
      head: "",
      parag: "",
    },
  },
  /* {
    img: slide1,
    alt: "",
    head: "second slide label",
    parag: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    class: {
      item: "",
      img: "d-inline-block w-50 ",
      img2: "w-50",
      caption: "",
      head: "",
      parag: "",
    },
  },
  {
    img: slide1,
    alt: "",
    img2: slide2,
    alt2: "",
    head: "First slide label2",
    parag: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    class: {
      item: "",
      img: "d-inline-block w-50",
      img2: "w-50",
      caption: "",
      head: "",
      parag: "",
    },
  }, */
]

const Carousel = () => {
  return (
    <div className=" bg-white">
      <div className="row">
        <div className="col-md-6 pt-5 pb-5 text-left">
          <h1 id="intro" className="px-5 text-center py-5 gray">
            Posidonia 2022
          </h1>
          <div className="px-5 py-5 gray">
            <p className="px-5">
              Συνάντηση με τους ανθρώπους μου στα Ποσειδώνια,τη γιορτή της
              ναυτιλίας.
            </p>
            <p className="px-5">
              Ένα μεγάλο μπράβο για τις ενέργειες τους οι οποιες κρατάνε ψηλά
              τις εταιριες τους στο παγκόσμιο στερέωμα .
            </p>
          </div>
        </div>
        <div className="col-md-6 pb-5 pt-5">
          <OmgCarousel slides={slides} settings={settings} />
        </div>
      </div>
    </div>
  )
}

export default Carousel
