import './App.css';
import "../node_modules/bootstrap/scss/bootstrap.scss"
import ProfilCard from './components/ProfilCard/ProfilCard.js';
import CategoryCard from './components/CategoryCard/CategoryCard.js';
import icon1 from "./images/icon-work.svg"
import icon2 from "./images/icon-play.svg"
import icon3 from "./images/icon-study.svg"
import icon4 from "./images/icon-exercise.svg"
import icon5 from "./images/icon-social.svg"
import icon6 from "./images/icon-self-care.svg"

function App() {
  const data = require("./data/data.json");
  const style = require("./data/cardStyle.json")
  let icons = [icon1,icon2,icon3, icon4, icon5, icon6]
  return (
    <div className="App">
      <div className="row container">
        <div class="col-12 col-md-12 col-lg-3">
          <ProfilCard/>
        </div>
        <div className="col-12 col-md-12 col-lg-9">
          {data.map((element, index) =>
            <CategoryCard
                key = {index}
                title = {element.title}
                currentDaily = {element.timeframes.daily.current}
                previousDaily = {element.timeframes.daily.previous}
                // this.style.backgroundColor = "blue"
                // Comment modifier le style d'un element créer à partir d'une classe !!!!!!!!!!!!!!!!!!!!!!!!!
                // PS : sans devoir creer des classes dans le sass
                // QUESTIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON
                icon = {icons[index]}           
            />
          )}
          {/* <CategoryCard
            // style = {BackgroundColor}
            // style={{backgroundColor: bgColors.Yellow}}
            // style={{this.backgroundColor: "red"}}
            // style.backgroundColor = "red";
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
