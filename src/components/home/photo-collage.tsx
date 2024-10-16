import { Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import img2 from 'public/photo-collage/IMG_P4.jpg';
import img4 from 'public/photo-collage/image2.jpg';
import img5 from 'public/photo-collage/IMG6.jpg';
import img6 from 'public/photo-collage/image7.jpg';
import img7 from 'public/photo-collage/IMG8.jpg';
import img8 from 'public/photo-collage/IMG10.jpg';
import img9 from 'public/photo-collage/IMG_P12.jpg';
import img10 from 'public/photo-collage/image10.jpg';

const PhotoCollage = () => {
  return (
    <div className="container-fluid">
      <Row className="d-flex flex-row flex-wrap justify-content-center">
        <Col xs={12} sm={6} md={3} lg={3} className="d-flex flex-column">
          <Image src={img4} alt="Image 4" />
          <Image src={img8} alt="Image 8" className="m-1 p-1" />
        </Col>

        <Col xs={12} sm={6} md={3} lg={3} className="d-flex flex-column">
          <Image src={img10} alt="Image 1" />
          <Image src={img5} alt="Image 5" className="scale" />
        </Col>

        <Col xs={12} sm={6} md={3} lg={3} className="d-flex flex-column">
          <Image src={img6} alt="Image 6" className="scale mb-2" />
          <Image src={img2} alt="Image 2" />
        </Col>

        <Col xs={12} sm={6} md={3} lg={3} className="d-flex flex-column">
          <Image src={img7} alt="Image 7" />
          <Image src={img9} alt="Image 9" className="image m-1 p-1" />
        </Col>
      </Row>
    </div>
  );
};

export default PhotoCollage;
