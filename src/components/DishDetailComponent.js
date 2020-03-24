import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        const clickDish = this.props.selectedDish;

        const comments = this.props.selectedDish.comments.map((comment) =>{
            return (
                <li key={comment.id}>  
                    <p>{comment.comment}</p>
                    <p>--{comment.author}, {comment.date}</p>
                </li>
            );

        });

        return (
            <div className="container">
                <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={clickDish.image} alt={clickDish.name}/>
                    <CardBody>
                        <CardTitle>{clickDish.name}</CardTitle>
                        <CardText>{clickDish.description}</CardText>
                    </CardBody>
                </Card>
            </div>

            <div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
                {comments}
            </div>
            </div>
            </div>

        );
    }
}

export default DishDetail;