import React, { Component } from 'react';
import {Collapse, NavItem, Jumbotron,
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

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
        <CommentForm />
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
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class CommentForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      rating:0,
      name:'',
      comment:'',
      isModalOpen:false,
      touched:{
        rating:false,
        name:false,
        comment:false
      }
    }
    this.toggleModal = this.toggleModal.bind(this)

  }
  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }
  
  handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    // event.preventDefault();
  }
  render(){
    return(
      <React.Fragment>
        <Button outline onClick={this.toggleModal}><span className="fa fa-edit fa-lg"></span> Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Submit Comment
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Control.select model=".rating" name="rating"
                                            className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>   
              </FormGroup>
              <FormGroup>
                <Label htmlFor="name">Your name</Label>
                <Control.text model=".name" id="name" name="name"
                    placeholder="Your name"
                    className="form-control"
                    validators={{
                     required, minLength: minLength(3), maxLength: maxLength(15)
                    }}
                />  
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: 'Required',
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="comment">Comment</Label>
                <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="12"
                                        className="form-control" />
              </FormGroup>
              <FormGroup>
                <Button type="submit" color="primary">Submit</Button>
              </FormGroup>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }
}
export default DishDetail;