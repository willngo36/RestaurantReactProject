// import React, { Component } from "react";
// import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

// class Menu extends Component {

//     render() {
//         const menu = this.props.dishes.map(dish => {
//           return (
//             <div key={dish.id} className="col-12 col-md-5 m-1">
//               <Card onClick={this.props.onDishSelect.bind(null, dish.id)}>
//                 <CardImg width="100%" src={dish.image} alt={dish.name} />
//                 <CardImgOverlay>
//                   <CardTitle>{dish.name}</CardTitle>
//                 </CardImgOverlay>
//               </Card>
//             </div>
//           );
//         });
    
//         return (
//           <div className="container">
//             <div className="row">{menu}</div>
//           </div>
//         );
//       }
//     }
    
//     export default Menu;





import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);


        // the state stores properties related to this component that we can make use of


        console.log('Menu Component constructor is invoked for lifecycle purposes');
    }



    

    render() {

        const menu = this.props.dishes.map((dish) => {
            // this return a view and stored in the menu variable
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card  onClick={() => this.props.onClick(dish.id)}>
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
                
            </div>
        );
    }
}

export default Menu;
