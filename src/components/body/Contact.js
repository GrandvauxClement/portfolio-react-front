import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactForm from "./FormContact";
function Contact() {
    return (
        <div className='container my-bg-blue'>
            <Row className="my-2">
                <Col className='my-3'>
                    <h2 className='text-white'>Envoyer moi un message</h2>
                    <ContactForm />
                </Col>
                <Col className='my-3'>
                    <h2 className='mb-2 text-white'>Me contacter</h2>
                    <div className='d-flex flex-column justify-content-around'>
                        <h5 className='my-3'>Une idée ? Un projet ? n'hésitez pas à demander un devis ! (GRATUIT).</h5>
                        <h5 className='my-3'>Si vous avez des questions, contacter-moi. Je vous répondrai dans les plus brefs délais.</h5>
                        <ul style={{listStyleType: 'none'}}>
                            <li className="h5"> <EmailIcon sx={{ color: 'white', marginRight: 2, fontSize: 42 }} />clement.grandvaux@hotmail.com</li>
                            <li className="h5"> <PhoneAndroidIcon sx={{ color: 'white', marginRight: 2, fontSize: 42 }} /> 06 29 16 89 43</li>
                            <li className="h5"> <LocationOnIcon sx={{ color: 'white', marginRight: 2, fontSize: 42 }} /> 39210 Le Vernois (Jura)</li>
                            <li className="h5"> <SettingsIcon sx={{ color: 'white', marginRight: 2, fontSize: 42 }} /> <strong>S.I.R.E.N :</strong>892 288 382</li>
                            {/*<li className="h5"> <img src={logoDiscord} alt="logo discord" /> Clement#6959</li>*/}
                        </ul>

                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Contact