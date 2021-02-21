import React from 'react';
import { Tabs, Tab, ListGroup } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function ProjectsModal(props) {
    const { descrp, links, pdfs, medias } = props;

    function insertHTML(html) {
        return { __html: html };
    }

    return (
        <Tabs defaultActiveKey='description'>
            <Tab eventKey='description' title='Description' >
                <p className='my-3' dangerouslySetInnerHTML={insertHTML(descrp.html)}></p>
            </Tab>
            {!medias.length ? '' : (
                <Tab eventKey='media' title='Media'>
                    <Carousel
                        showThumbs={true}
                        showStatus={false}
                        autoPlay={true}
                        stopOnHover={true}
                        infiniteLoop={true}
                        swipeable={true}>
                        {medias.map(({
                            assetName,
                            assetDescription,
                            url
                        }, index) => (
                            <div key={index} >
                                <h3 className='mt-3' style={{ backgroundColor: "inherit" }} > {assetDescription} </h3>
                                <div className='projectFrameWrapper'>
                                    <img className='mediaFrame' src={url} alt={assetName} />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </Tab>
            )}
            {!pdfs.length ? '' : (
                pdfs.map(({
                    assetName,
                    assetDescription,
                    url
                }, index) => (
                    <Tab eventKey={assetName} title={assetName} key={index}>
                        <div key={index} >
                            <h3 className='my-3' style={{ backgroundColor: "inherit" }} > {assetDescription} </h3>
                            <div className='projectFrameWrapper'>
                                <iframe title='pdfFrame' className='pdfFrame' src={url} />
                            </div>
                        </div>
                    </Tab>
                )
                ))}
            {!links.length ? '' : (
                <Tab eventKey='links' title='Links'>
                    <ListGroup>
                        {links.map((link, index) => (
                            <ListGroup.Item key={index}>
                                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Tab>
            )}


        </Tabs>
    );
};
export default ProjectsModal;