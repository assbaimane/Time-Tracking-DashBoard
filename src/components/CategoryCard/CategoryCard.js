import React from 'react';
import './CategoryCard.sass';
import icon from "../../images/icon-work.svg"

class CategoryCard extends React.Component{
  renderTitle(){
    return(
      <div className='title'>
        <h6>{this.props.title}</h6>
        <i class="fas fa-ellipsis-h"></i>
      </div>
    );
  }

  renderBody(){
    return(
      <div className='body'>
        <h3>{this.props.currentDaily} hrs</h3>
      </div>
    );
  }

  renderTotal(){
    return(
      <div className='total'>
        <p>Last Week - {this.props.previousDaily}hrs</p>
      </div>
    );
  }

  render(){
    return(
      <div className='col-4 categoryCard'>
        <div className="banner">
          <img src={icon} className='img-fluid' alt="category icon" />
        </div>
        <div className='content p-3 pb-1'>
          {this.renderTitle()}
          {this.renderBody()}
          {this.renderTotal()}
        </div>
      </div>
    );
  }
}

export default CategoryCard;
