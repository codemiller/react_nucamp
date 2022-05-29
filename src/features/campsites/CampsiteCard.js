import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const CampsiteCard = (props) => {
    return (
        <Card>
            <CardImg
                width='100%'
                src={props.campsite.img}
                alt={props.campsite.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default CampsiteCard;