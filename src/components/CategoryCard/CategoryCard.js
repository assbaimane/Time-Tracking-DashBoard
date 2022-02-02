import React from 'react';
import './CategoryCard.sass';

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
        {this.props.type ==="Daily" &&
          <h3>{this.props.currentDaily} hrs</h3>
        }
        {this.props.type ==="Weekly" &&
          <h3>{this.props.currentWeekly} hrs</h3>
        }
        {this.props.type ==="Monthly" &&
          <h3>{this.props.currentMonthly} hrs</h3>
        }
      </div>
    );
  }

  renderTotal(){
    return(
      <div className='total'>
        {this.props.type ==="Daily" &&
          <p>Last Week - {this.props.previousDaily}hrs</p>
        }
        {this.props.type ==="Weekly" &&
          <p>Last Week - {this.props.previousWeekly}hrs</p>
        }
        {this.props.type ==="Monthly" &&
          <p>Last Week - {this.props.previousMonthly}hrs</p>
        }
      </div>
    );
  }

  render(){
    return(


      <div className='col-3 m-3 categoryCard' style={{backgroundColor: this.props.style.background}}>
          <div className="banner">
            <img src={this.props.icon} className='img-fluid' alt="category icon" />
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
