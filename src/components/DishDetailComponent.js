import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
  class DishDetail extends Component{
      constructor(props){
          super(props)
          this.state = {
              selectedDish:props
          }
      }
      
      render() {
          console.log(this.props);
        if (this.props.comments != null && this.props.comments!=null){
            const comment = this.props.comments.comments.map((index)=>{
              return(
                <div>
                  <CardText>
                    --{index.author}, {index.date}
                  </CardText>
                  <CardText>
                    {index.comment}
                  </CardText>
                </div>
              )
            })
            return(
              <Card>
                <CardTitle>
                  Comments
                </CardTitle>
                <CardBody>
                  {comment}
                </CardBody>
              </Card>
            );
        }else{
            return(
                <div></div>
            );
        }
    }
  
}


export default DishDetail   ;