import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetail from './DishDetailComponent';
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish : null
        }
        // the state stores properties related to this component that we can make use of


        console.log('Menu Component constructor is invoked for lifecycle purposes');
    }

    componentDidMount(){
        console.log('Menu Component componentDidMount is invoked for lifecycle purposes');
    }

    onDishSelect(dish) {
        this.setState({selectedDish:dish});
    }

    renderDish(dish) {
        if (dish!= null) {
            return (

                <DishDetail selectedDish= {this.state.selectedDish}/>

                // <Card>
                //     <CardImg width="100%" src={dish.image} alt={dish.name}/>
                //     <CardBody>
                //         <CardTitle>{dish.name}</CardTitle>
                //         <CardText>{dish.description}</CardText>
                //     </CardBody>
                // </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            // this return a view and stored in the menu variable
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=> this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });


        console.log('Menu Component render is invoked for lifecycle purposes');


        

        // map function here means iterate every dish in the array

        // this return is going to render ui
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;
