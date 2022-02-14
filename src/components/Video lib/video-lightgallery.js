import React, { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "react-bootstrap/Image"
import "../Video lib/style.css"
const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi])
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          {" "}
          <a
            href="https://www.youtube.com/watch?v=WvZ1cL-4Rvw"
            data-lg-size="1280-720"
            data-src="https://www.youtube.com/watch?v=WvZ1cL-4Rvw"
            data-poster="https://i3.ytimg.com/vi/WvZ1cL-4Rvw/maxresdefault.jpg"
            data-sub-html="<h4>Visual Soundscapes - Mountains | Planet Earth II | BBC America</h4><p>On the heels of Planet Earth II’s record-breaking Emmy nominations, BBC America presents stunning visual soundscapes from the series' amazing habitats.</p>"
          >
            <Image
              className=""
              alt="porsche-vid"
              width="480 "
              height="360"
              src="https://i3.ytimg.com/vi/WvZ1cL-4Rvw/hqdefault.jpg"
            />
          </a>
        </div>
        <div className="embla__slide">
          {" "}
          <a
            href="https://www.youtube.com/watch?v=WvZ1cL-4Rvw"
            data-lg-size="1280-720"
            data-src="https://www.youtube.com/watch?v=WvZ1cL-4Rvw"
            data-poster="https://i3.ytimg.com/vi/WvZ1cL-4Rvw/maxresdefault.jpg"
            data-sub-html="<h4>Visual Soundscapes - Mountains | Planet Earth II | BBC America</h4><p>On the heels of Planet Earth II’s record-breaking Emmy nominations, BBC America presents stunning visual soundscapes from the series' amazing habitats.</p>"
          >
            <Image
              className=" "
              alt="porsche-vid"
              width="480 "
              height="360"
              src="https://i3.ytimg.com/vi/WvZ1cL-4Rvw/hqdefault.jpg"
            />
          </a>
        </div>
        <div className="embla__slide">
          {" "}
          <a
            href="https://www.youtube.com/watch?v=WvZ1cL-4Rvw"
            data-lg-size="1280-720"
            data-src="https://www.youtube.com/watch?v=WvZ1cL-4Rvw"
            data-poster="https://i3.ytimg.com/vi/WvZ1cL-4Rvw/maxresdefault.jpg"
            data-sub-html="<h4>Visual Soundscapes - Mountains | Planet Earth II | BBC America</h4><p>On the heels of Planet Earth II’s record-breaking Emmy nominations, BBC America presents stunning visual soundscapes from the series' amazing habitats.</p>"
          >
            <Image
              className=""
              alt="porsche-vid"
              width="480 "
              height="360"
              src="https://i3.ytimg.com/vi/WvZ1cL-4Rvw/hqdefault.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
export default EmblaCarousel
