import './App.css';
import "../node_modules/bootstrap/scss/bootstrap.scss"
import ProfilCard from './components/ProfilCard/ProfilCard.js';
import CategoryCard from './components/CategoryCard/CategoryCard.js';
// import icon1 from ""
// import icon2 from ""
// import icon3 from ""
// import icon4 from ""
// import icon5 from ""
// import icon6 from ""

function App() {
  const data = require("./data/data.json");
  const style = require("./data/cardStyle.json")
  return (
    <div className="App">
      <div className="row container">
        <div class="col-3">
          <ProfilCard/>
        </div>
        <div className="col-9">
          {data.map((element, index) =>
            <CategoryCard
                key = {index}
                title = {element.title}
                currentDaily = {element.timeframes.daily.current}
                previousDaily = {element.timeframes.daily.previous}
                // this.style.backgroundColor = "blue"
                // Comment modifier le styhle d'un element créer à partir d'une classe !!!!!!!!!!!!!!!!!!!!!!!!!
                // QUESTIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON
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
