import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Qualifications(props) {
    const { content, onClick, onChange } = props;
    const handleChange = (selectedIndex, e) => {
        onChange(selectedIndex);
    }
    const onItemClick = () => {
        onClick();
    }
    return (
        <div className="bg-dark text-light section"
            id="qualifications" >
            <Row >
                <Col >
                    <h2 className='p-5' > Qualifications </h2>
                </Col>
            </Row>
            <Row >
                <Col >
                    <Container className="qualificationsCarousel" >
                        <Carousel onClickItem={onItemClick}
                            onChange={handleChange}
                            showThumbs={false}
                            showStatus={false}
                            autoPlay={false}
                            infiniteLoop={true}
                            swipeable={true}>
                            {content.map(({ qualificationName, qualificationImage }, index) => (
                                <div key={index} >
                                    <h3 style={{ backgroundColor: "inherit" }} > {qualificationName} </h3>
                                    <img src={qualificationImage.url} alt={qualificationImage.assetDescription} className="qualificationsCarouselImage" />
                                </div>
                            ))}
                        </Carousel>
                    </Container>
                </Col>
            </Row>
        </div>
    );
};

export default Qualifications;