import './App.css';
import "../node_modules/bootstrap/scss/bootstrap.scss"
import React from "react";
import ProfilCard from './components/ProfilCard/ProfilCard.js';
import CategoryCard from './components/CategoryCard/CategoryCard.js';
import icon1 from "./images/icon-work.svg"
import icon2 from "./images/icon-play.svg"
import icon3 from "./images/icon-study.svg"
import icon4 from "./images/icon-exercise.svg"
import icon5 from "./images/icon-social.svg"
import icon6 from "./images/icon-self-care.svg"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPage: "Daily"
    }
  }

  onChangePageParent = (type) => {
    this.setState({
      currentPage: type
    });
  }
  
  render(){
    let data = require("./data/data.json");
    let style = require("./data/cardStyle.json");
    let icons = [icon1,icon2,icon3, icon4, icon5, icon6];
    return(
      <div className="App">
        <div className="row container">
          {/* Profil Card */}
          <div class="col-12 col-md-12 col-lg-3">
            <ProfilCard
                onChangePage = {this.onChangePageParent}
            />
          </div>
          {/* CCategory card */}
          <div className="col-12 col-md-12 col-lg-9">
            {data.map((element, index) =>
                <CategoryCard
                    type = {this.state.currentPage}
                    key = {index}
                    title = {element.title}
                    currentDaily = {element.timeframes.daily.current}
                    previousDaily = {element.timeframes.daily.previous}
                    currentWeekly = {element.timeframes.weekly.current}
                    previousWeekly = {element.timeframes.weekly.previous}
                    currentMonthly = {element.timeframes.monthly.current}
                    previousMonthly = {element.timeframes.monthly.previous}
                    style = {style[index]}
                    icon = {icons[index]}           
                />
              )}
          </div>
        </div>
      </div>
    );}
}

export default App;