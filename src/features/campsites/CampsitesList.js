import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";

const CampsitesList = () => {
    console.log('I am campsites', CAMPSITES)
    return (
        <Row className='ms-auto'>{CAMPSITES.map((campsite) => {
            return (
                <Col md='5' className='m-4' key={campsite.id}>
                    <CampsiteCard campsite={campsite} />
                </Col>
            );
        })}</Row>
    )
}

export default CampsitesList;