import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import quisuisje from "../../assets/image/quiSuisJe.jpg"
function Apropos() {
    return(
        <div className='container' id='aPropos'>
            <Row>
                <Col>
                    <h2 className='my-color-blue h2'>Qui suis-je ?</h2>
                    <p>Passioné par le numérique depuis plus de 5ans, j'ai acquis la plupart de mas connaissance en autodidacte.</p>
                    <p> Titulaire d'un titre RNCP de niveau 5 depuis quelques mois, j'ai décidé de me lancer en tant que développeur web freelance</p>
                    <p> j'interviens sur l'intégration, le développement, l'optimisation et la maintenance de sites internet.</p>
                    <p>Je suis actuellement basé dans l'Est de la  France mais je travaille pour des entreprises dans la france entière blblblabla a changer !:!!</p>
                </Col>
                <Col>
                   <img src={quisuisje} className='img-fluid' alt='moi'/>
                </Col>
            </Row>
        </div>
    )
}
export default Apropos