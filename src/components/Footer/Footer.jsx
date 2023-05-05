import React from 'react';
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/footer.css'

const quickLinks=[
    {
    path:'/about',
    display:'About'

  },
  {
    path:'#',
    display:'Privacy Policy'

  },
  {
    path:'/cars',
    display:'Car Listing'

  },
  {
    path:'/blog',
    display:'Blog'

  },
  {
    path:'/contact',
    display:'Contact'

  }
]

const Footer = () => {
    const date = new Date();
  const year = date.getFullYear();
    
    return <footer className='footer'>
        <Container>
            <Row>
                <Col lg='4' md='4' sm='12'>
                <div className="logo footer__logo">
                        <h1><Link to='/home' className='d-flex align-items-canter gap-3'>
                        <i class="ri-car-line"></i>
                        <span>Rent Car <br/>Service</span>
                        </Link>
                        </h1>
                    </div>
                    <p className="footer__logo-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis provident earum consectetur magnam beatae. Esse consequuntur repellendus exercitationem incidunt, perferendis aspernatur iure sint quibusdam reiciendis dolorem facere suscipit totam sunt.
                    </p>
                </Col>
                <Col lg='2' md='4' sm='6'>
                    <div className="mb_4">
                        <h5 className="footer__link-title">Quick Links</h5>
                        <ListGroup>
                        {
                                quickLinks.map((item,index)=>(
                                    <ListGroupItem key={index} className='quick__link p-0 mt-3'>
                                        <Link to={item.path}>{
                                            item.display
                                        }</Link>

                                    </ListGroupItem>

                                ))
                                

                            }
                        </ListGroup>
                    </div>

                </Col>

                <Col lg='3' md='4' sm='6'>
                    <div className="mb-4">
                    <h5 className="footer__link-title mb-4">Head office</h5>
                    <p className="office__info">Arak City,Iran</p>
                    <p className="office__info">Phone:+0921-750-9248</p>
                    <p className="office__info">Email:lorem@gmail.com</p>
                    <p className="office__info">Office Time:8am - 9pm</p>

                    </div>
                
                </Col>

                <Col lg='3' md='4' sm='12' >
                <h5 className="footer__link-title">Newletter</h5>
                <p className="section__description">Subscribe our newletter</p>
                <div className="newsletter">
                    <input type="email" placeholder='Email'/>
                    <span><i class="ri-send-plane-line"></i></span>
                </div>

                    
                </Col>
                <Col lg='12'>
                    <div className="footer__botton">
                        <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">Copyright ,{year}
                        Developed by Mohammad Peyvasteh.All rights reserved
                        <i class="ri-copyright-line"></i>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>;
}
 
export default Footer;