import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import ContactForm from "./FormContact";
function Contact() {
    return (
        <div className='container my-bg-blue'>
            <Row>
                <Col className='mt-3'>
                    <h2 className='text-white'>Envoyer moi un message</h2>
                    <ContactForm />
                </Col>
                <Col className='mt-3'>
                    <h2 className='mb-2 text-white'>Me contacter</h2>
                    <p>Si vous avez des questions, n'hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais.</p>
                    <ul style={{listStyleType: 'none'}}>
                        <li> <EmailIcon fontSize="large" sx={{ color: 'white', marginRight: 2 }} />clement.grandvaux@hotmail.com</li>
                        <li> <PhoneAndroidIcon fontSize="large" sx={{ color: 'white', marginRight: 2 }} /> 06 29 16 89 43</li>
                        <li> <LocationOnIcon fontSize="large" sx={{ color: 'white', marginRight: 2 }} /> 39210 Le Vernois (Jura)</li>
                    </ul>
                    <div className='d-flex'>
                        <LinkedInIcon  sx={{ color: 'white', marginRight: 2, fontSize: 50 }}/>
                        <GitHubIcon  sx={{ color: 'white', marginRight: 2, fontSize: 50 }}/>
                        <InstagramIcon sx={{ color: 'white', marginRight: 2, fontSize: 50 }}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Contact