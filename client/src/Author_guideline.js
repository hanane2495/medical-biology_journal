import React from 'react';
import styled from 'styled-components';
import {Container, Form, Card, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Styles = styled.div`
    
`;

function Author_guideline() {
    return (
      <React.Fragment>
        <Styles>
          <Row>
            <Col className='sidebar'>
              
              <h4>Remarque generales</h4>
              <a href='#step2'>
              <h4>Instructions</h4>
              </a>
              <h4>Copyrights</h4>
              <button style={{
                             background:'rgba(63,63,179,1)', 
                             color:'white', 
                             textAlign:'center',
                             fontWeight:'bolder',
                             borderRadius:'5px',
                             border:'none',
                             width:'170px',
                             height:'50px',
                             }}>
                       Submit article
                    </button>
            </Col>
            <Col xs lg='10' className='guideline-content'>
              <h1>Submission Guidelines</h1>
              <section id='step1'>
                <Row>
                <Col>
                <h4>Le Bulletin des médecins suisses (BMS) publie des articles abordant:</h4>
                <p>
                  les sujets de politique professionnelle médicale;
                  de politique de santé et de santé publique;
                  des thèmes de nature économique, juridique, éthique, culturelle et autres en rapport avec l’exercice de la profession médicale et le secteur de la santé.
                  La rédaction examine les articles qui lui sont envoyés en tenant compte de leur qualité, originalité et actualité. Elle se réserve dans tous les cas le droit de décider en dernier ressort de l’approbation ou du refus des manuscrits.

                  Quels genres d’articles ne sont pas du ressort du BMS?

                  Les articles qui mettent en exergue les aspects cliniques et thérapeutiques;
                  les textes relatifs à la formation continue;
                  les directives et guides de pratique médicaux.
                  Les articles de ce type sont en principe publiés dans le Swiss Medical Forum (SMF).
                  </p>
                </Col>
                <Col>
                <h4>Le Bulletin des médecins suisses (BMS) publie des articles abordant:</h4>
                <p>
                  les sujets de politique professionnelle médicale;
                  de politique de santé et de santé publique;
                  des thèmes de nature économique, juridique, éthique, culturelle et autres en rapport avec l’exercice de la profession médicale et le secteur de la santé.
                  La rédaction examine les articles qui lui sont envoyés en tenant compte de leur qualité, originalité et actualité. Elle se réserve dans tous les cas le droit de décider en dernier ressort de l’approbation ou du refus des manuscrits.

                  Quels genres d’articles ne sont pas du ressort du BMS?

                  Les articles qui mettent en exergue les aspects cliniques et thérapeutiques;
                  les textes relatifs à la formation continue;
                  les directives et guides de pratique médicaux.
                  Les articles de ce type sont en principe publiés dans le Swiss Medical Forum (SMF).
                  </p>
                </Col>
                </Row>
              </section>
              <section id='step2'>
              <Row>
                <Col>
                <h4>Le Bulletin des médecins suisses (BMS) publie des articles abordant:</h4>
                <p>
                  les sujets de politique professionnelle médicale;
                  de politique de santé et de santé publique;
                  des thèmes de nature économique, juridique, éthique, culturelle et autres en rapport avec l’exercice de la profession médicale et le secteur de la santé.
                  La rédaction examine les articles qui lui sont envoyés en tenant compte de leur qualité, originalité et actualité. Elle se réserve dans tous les cas le droit de décider en dernier ressort de l’approbation ou du refus des manuscrits.

                  Quels genres d’articles ne sont pas du ressort du BMS?

                  Les articles qui mettent en exergue les aspects cliniques et thérapeutiques;
                  les textes relatifs à la formation continue;
                  les directives et guides de pratique médicaux.
                  Les articles de ce type sont en principe publiés dans le Swiss Medical Forum (SMF).
                  </p>
                </Col>
                <Col>
                <h4>Le Bulletin des médecins suisses (BMS) publie des articles abordant:</h4>
                <p>
                  les sujets de politique professionnelle médicale;
                  de politique de santé et de santé publique;
                  des thèmes de nature économique, juridique, éthique, culturelle et autres en rapport avec l’exercice de la profession médicale et le secteur de la santé.
                  La rédaction examine les articles qui lui sont envoyés en tenant compte de leur qualité, originalité et actualité. Elle se réserve dans tous les cas le droit de décider en dernier ressort de l’approbation ou du refus des manuscrits.

                  Quels genres d’articles ne sont pas du ressort du BMS?

                  Les articles qui mettent en exergue les aspects cliniques et thérapeutiques;
                  les textes relatifs à la formation continue;
                  les directives et guides de pratique médicaux.
                  Les articles de ce type sont en principe publiés dans le Swiss Medical Forum (SMF).
                  </p>
                </Col>
                </Row>
                
              </section>
              <section id='step3'>
                <h1></h1>
                <p></p>
              </section>
              
            </Col>
          </Row>
        </Styles>
      </React.Fragment>
    );
  }
  
  export default Author_guideline;