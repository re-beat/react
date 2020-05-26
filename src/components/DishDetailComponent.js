import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const DishDetail = (props)=>{
  if(props.dish != null)
    return(
      <div className="container">
        <div className="row">
            <RenderDish dish={props.dish}></RenderDish>
            <RenderComments comments={props.dish.comments}></RenderComments>
        </div>
      </div>
    )
  else
   return(
     <div></div>
   )
}

function RenderComments({comments}){
  const comment = comments.map((index)=>{
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
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardTitle>Comments</CardTitle>
        <CardBody>{comment}</CardBody>
      </Card>
    </div>
  )
}
function RenderDish({dish}) {
  return(<div className="col-12 col-md-5 m-1">
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  </div>
  )
}
export default DishDetail;