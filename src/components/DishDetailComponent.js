import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    render() {
        if (this.props.dish) {
            const commentList = this.props.dish.comments.map((comment, i) => (
              <li key={i}>
                {comment.comment}
                <br />
                <br />
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit"
                }).format(new Date(Date.parse(comment.date)))}
                <br />
                <br />
              </li>
        ));
        return (
        <div className="container">
            <div className="row">

            
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg
                top
                src={this.props.dish.image}
                alt={this.props.dish.name}
                />
                <CardBody>
                <CardTitle>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
            <ul>{commentList}</ul>
            </div>
            </div>
        </div>
            );
        } else {
            return <div></div>;}
    }
}
export default DishDetail;




// wrong implementation of Dish Detail Component

// import React, {Component} from 'react';
// import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


// class DishDetail extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//         }
//     }

//     render() {


//         const dish = this.props.dish;
//         const cmts = dish.comments;
//         const cmtss = <div></div>;
//         if ( cmts != null) {
//             const cmtss = cmts.map((cmt)=>{
//                 return (
//                     <div className="container">
    
                    
//                     <li key={cmt.id}>  
//                         <p>{cmt.comment}</p>
//                         <p>--{cmt.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month:'short',day:'2-digit'}).format(new Date(Date.parse(cmt.date)))}</p>
//                     </li>
//                     </div>
//                 );
//             });
//         }
        

//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12 col-md-5 m-1">
//                         <Card>
//                             <CardImg width="100%" src={dish.image} alt={dish.name}/>
//                             <CardBody>
//                                 <CardTitle>{dish.name}</CardTitle>
//                                 <CardText>{dish.description}</CardText>
//                             </CardBody>
//                         </Card>
//                     </div>

//                     <div className="col-12 col-md-5 m-1">
//                         <h3>Comments</h3>
//                         {cmtss}
//                     </div>
//                 </div>
//             </div>

//         );
//     }
// }

// export default DishDetail;





// wrong implementation of Dish Detail Component

// import React, { Component } from 'react';
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// class DishDetail extends Component {
//   render() {
//     const commentList = this.props.dishSelect.comments.map(item => (
//         <li>
//           {item.comment}
//           <br/><br/>
//           -- {item.author},  {item.date}
//           <br/><br/>
//         </li>
//       )
//     );
//     return (
//       <div className="row">
//         <div className="col-12 col-md-5 m-1">
//           <Card>
//             <CardImg top src={this.props.dishSelect.image} alt={this.props.dishSelect.name} />
//             <CardBody>
//               <CardTitle>{this.props.dishSelect.name}</CardTitle>
//               <CardText>{this.props.dishSelect.description}</CardText>
//             </CardBody>
//           </Card>
//         </div>
//         <div className="col-12 col-md-5 m-1">
//           <ul>{commentList}</ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default DishDetail;