import React from 'react';
import './ProfilCard.sass';
import jeremy from "../../images/image-jeremy.png"// Import outside src are not supported idk why

class ProfilCard extends React.Component{
  renderProfil(){
    return(
      <div className="profil p-3">
      <img src={jeremy} class="img-fluid col-4 mb-3" alt="Jeremy's picture"/>
      <p>Report for</p>
      <h1 class="fs-3 mb-4">Jeremy Robson</h1>
    </div>
    );
  }

  renderFrequency(){
    return(
      <div className="frequency ps-3 pe-3 pb-1 pt-1">
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    );
  }

  render(){
    return(
      <div className="profilCard">
        {this.renderProfil()}
        {this.renderFrequency()}
      </div>
    );
  }
}

export default ProfilCard;