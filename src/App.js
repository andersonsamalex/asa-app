import './App.css';
import './extra.css';
import Navi from './components/nav.js';
import Splash from './components/splash.js';
import About from './components/about.js';
import Qualifications from './components/qualifications.js';
import Projects from './components/projects.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';
import React, { useState, useEffect } from 'react';
import { request, gql } from 'graphql-request';
import { Modal } from 'react-bootstrap';
import ProjectsModal from './components/projectsModal.js';

function App() {
  const [content, setContent] = useState(null);
  const [showQModal, setShowQModal] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [showPModal, setShowPModal] = useState(false);
  const [pIndex, setPIndex] = useState(0);

  useEffect(() => {
    const endpoint = 'https://api-eu-central-1.graphcms.com/v2/ckl9be454tew701z843fpdcqt/master';
    const query = gql`
      query MyQuery {
        Profile: asset(where: {assetName: "Profile"}) {
          assetDescription
          url
        }
        About: general(where: {generalName: "About"}) {
          generalDescription {
            html
          }
          generalAsset {
            assetDescription
            url
          }
        }
        projects(orderBy: createdAt_DESC, stage: PUBLISHED) {
          projectName
          projectBriefDescription
          projectDescription {
            html
          }
          externalLinks
          pdfs {
            assetName
            assetDescription
            url
            fileType
          }
          projectImage {
            assetName
            assetDescription
            url
          }
          projectMedia {
            assetName
            assetDescription
            url
          }
        }
        qualifications {
          qualificationName
          qualificationImage {
            assetDescription
            url
          }
          qualificationAsset {
            url
          }
        }
        date1:projects(first: 1, orderBy: updatedAt_DESC) {
          updatedAt
        }
        date2:qualifications(first: 1, orderBy: updatedAt_DESC) {
          updatedAt
        }
        date3:generals(first: 1, orderBy: updatedAt_DESC) {
          updatedAt
        }
      }
    `;
    const fetchQuery = async () => {
      const { Profile, About, projects, qualifications, date1, date2, date3 } = await request(endpoint, query);
      setContent({profile: Profile, about: About, projects: projects, qualifications: qualifications, date1: date1, date2: date2, date3: date3});
    };
    fetchQuery();
  }, []);

  const handleQChange = (props) => {
    setQIndex(props);
  }
  const handleQShow = () => {
    setShowQModal(true);
  }
  const handleQClose = () => {
    setShowQModal(false);
  }
  const handlePShow = () => {
    setShowPModal(true);
  }
  const handlePClose = () => {
    setShowPModal(false);
  }

  return (
    <div className="App">
      {!content ? (
        <p>Loading...</p>
      ) : (
          <div>
            <header className="App-header">
              <Splash content={content.profile}/>
            </header>
            <Navi />
            <section className="About-Section">
              <About content={content.about}/>
            </section>
            <section className="Qualifications-Section">
              <Qualifications content={content.qualifications} onChange={handleQChange} onClick={handleQShow}/>
            </section>
            <section className="Projects">
              <Projects content={content.projects} onChange={setPIndex} onClick={handlePShow}/>
            </section>
            <section className="Contact">
              <Contact />
            </section>
            <Footer date1={content.date1[0].updatedAt} date2={content.date2[0].updatedAt} date3={content.date3[0].updatedAt}/>
            <Modal show={showQModal} onHide={handleQClose} dialogClassName="QModal Modal">
              <Modal.Header closeButton><h2 className='text-light'>{content.qualifications[qIndex].qualificationName}</h2></Modal.Header>
              <Modal.Body>
                
                <iframe title='QFrame' className='QFrame' src={content.qualifications[qIndex].qualificationAsset.url}/>
              </Modal.Body>
            </Modal>
            <Modal show={showPModal} onHide={handlePClose} dialogClassName="PModal Modal">
              <Modal.Header closeButton><h2 className='text-light'>{content.projects[pIndex].projectName}</h2></Modal.Header>
              <Modal.Body>
                <ProjectsModal descrp={content.projects[pIndex].projectDescription} links={content.projects[pIndex].externalLinks} pdfs={content.projects[pIndex].pdfs} medias={content.projects[pIndex].projectMedia}/>
              </Modal.Body>
            </Modal>
          </div>
          
        )}
    </div>
  );
}

export default App;
