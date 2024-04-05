import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import accraGirlGroupPic from "../../../public/hero/accra-girls-group.jpg";
import hero1 from "../../../public/hero/hero1.jpg";
import hero2 from "../../../public/hero/hero2.jpg";
import Link from "next/link";

// Styled-components
const HeroImage = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust height as needed */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Adjust opacity as needed */
`;

export interface CarouselImageProps {
  src: StaticImageData;
  alt?: string;
  caption: {
    title: string;
    text: string;
  };
}

const CarouselImage: React.FC<CarouselImageProps> = ({
  src,
  alt = "Placeholder",
  caption,
}) => (
  <HeroImage className="d-flex align-items-center">
    <Image
      priority
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      aria-label={`${caption.title}: ${caption.text}`}
    />
    <Overlay />
    <div className="carousel-caption">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 pt-5">
            <h1 className="display-4 text-white mb-3 animated slideInDown">
              {caption.title}
            </h1>
            <p className="fs-5 text-white-50 mb-5 animated slideInDown">
              {caption.text}
            </p>
            <Link
              className="btn btn-primary py-2 px-3 animated slideInDown"
              href="/who-we-are"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </HeroImage>
);

const HeroCarousel: React.FC = () => {
  return (
    <Carousel interval={5000} pause={false} nextLabel="" prevLabel="">
      <Carousel.Item>
        <CarouselImage
          src={hero1}
          alt="Hero Image 1"
          caption={{
            title: "Empowering the Future of Engineers",
            text: "YCEM ignites passion in young women for engineering. Through events, mentorship, and tech hubs, we bridge the gender gap in STEM.",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage
          src={accraGirlGroupPic}
          alt="Hero Image 2"
          caption={{
            title: "Transforming Lives in STEM",
            text: "Join us on a journey of transformation! YCEM offers unwavering support to young women in science, technology, engineering, and mathematics, fostering innovation.",
          }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage
          src={hero2}
          alt="Hero Image 3"
          caption={{
            title: "Leading Women in Engineering",
            text: "YCEM empowers young women in engineering. With experience and mentorship, we lead the way to a brighter future in science and technology.",
          }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
