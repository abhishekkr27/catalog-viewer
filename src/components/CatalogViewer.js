import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Button, Spinner } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const images = [
  {
    id: 1,
    src: 'https://picsum.photos/id/12/600/400',
    title: 'W Maldives',
    description: 'Image 1 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 2,
    src: 'https://picsum.photos/id/37/600/400',
    title: 'Q Maldives',
    description: 'Image 2 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 3,
    src: 'https://picsum.photos/id/108/600/400',
    title: 'P Maldives',
    description: 'Image 3 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    id: 4,
    src: 'https://picsum.photos/id/147/600/400',
    title: 'Y Maldives',
    description: 'Image 4 is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
];

const CatalogViewer = () => {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [slideshowActive, setSlideshowActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (slideshowActive) {
      intervalId = setInterval(() => {
        const activeIndex = images.findIndex((image) => image.id === activeImage.id);
        const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
        setActiveImage(images[nextIndex]);
      }, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [activeImage, slideshowActive]);

  const handlePrevClick = () => {
    const activeIndex = images.findIndex((image) => image.id === activeImage.id);
    const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveImage(images[prevIndex]);
  };

  const handleNextClick = () => {
    const activeIndex = images.findIndex((image) => image.id === activeImage.id);
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveImage(images[nextIndex]);
  };

  const handleSlideshowClick = () => {
    setSlideshowActive(!slideshowActive);
  };

  const handleThumbnailClick = (image) => {
    setActiveImage(image);
    setSlideshowActive(false);
  };

  return (
    <Container fluid>
      <Row className=''>
        <Col sm={8} className='justify-content-evenly'>
          <div style={{ position: 'relative' }}>
            <Image src={activeImage.src} className=' rounded-3  img-all' fluid />
            {slideshowActive && (
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <Spinner animation="grow" size="lg" />
              </div>
            )}
          </div>
          <div style={{ marginTop: '1rem' }}>
            {/* <BsChevronLeft onClick={handlePrevClick} className='me-5 prev' />{' '}
            <BsChevronRight onClick={handleNextClick} className='me-5 next' />{' '} */}

            <span onClick={handleSlideshowClick}>
              {slideshowActive ? <PauseCircleIcon color="primary" sx={{ fontSize: 60 }}/>: <PlayCircleFilledWhiteIcon color="primary" sx={{ fontSize: 60 }}/>}
            </span>
          </div>
        </Col>

        <Col sm={4}>
          <div className="rectangle-3">
            <h5 className='dummy-title'>{activeImage.title}</h5>
            <p className="dummy-text">{activeImage.description}</p>
          </div>
        </Col>


      </Row>
      <Row>
        <Col sm={6} className='align-items-center'>

          <div className='d-flex'>
            <ArrowLeftIcon sx={{ fontSize: 60 }} onClick={handlePrevClick} />
            {images.map((image) => (
              <div key={image.id} style={{ margin: '0.5rem' }} className='scroll-image'>
                <Image
                  rounded-3
                  thumbnail
                  src={image.src}

                  onClick={() => handleThumbnailClick(image)}
                  style={{ border: activeImage.id === image.id ? '2px solid blue' : 'none' }}
                />

              </div>
            ))}
            <ArrowRightIcon sx={{ fontSize: 60 }} onClick={handleNextClick} />
          </div>

        </Col>
      </Row>
    </Container>
  );
};

export default CatalogViewer;
