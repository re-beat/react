import React, { Component } from 'react';
import { Media } from 'reactstrap';

import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const DishDetail = (props)=>{
  if(props.dish != null)
  return (
    <div className="container">
    <div className="row">
        <Breadcrumb>

            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
        </div>                
    </div>
    <div className="row">
            <RenderDish dish={props.dish} />
            <RenderComments comments={props.comments} />
    </div>
    </div>
);

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
            --{index.author}
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