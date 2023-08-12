import { Container } from "react-bootstrap";
import logo from '../../assets/logo.png';
import moment from "moment/moment";
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container className="text-center mt-5">
            <img src={logo} alt="" />
            <p className="my-3">Journalism Without Fear or Favour</p>
            <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            <div className="bg-body-tertiary p-2 d-flex align-items-center">
                <div className="bg-danger text-white px-5 py-2">Latest</div>
                <Marquee speed={60} className="fw-bolder text-dark-emphasis">
                    I can be a React component, multiple React components, or just some text&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    I can be a React component, multiple React components, or just some text&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    I can be a React component, multiple React components, or just some text&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;