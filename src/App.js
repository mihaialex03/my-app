import "./App.css";
import { Navigation } from "./components/Navigation";
import UserItem from "./components/UserItem";
import UserItemClass from "./components/UserItemClass";
import { getCurrentWeatherEndpoint } from "./components/endpoint";
import { getForecastEndpoint } from "./components/endpoint";

function App() {
  console.log(getCurrentWeatherEndpoint("Arad"));
  return (
    <div className="App">
      <Navigation
        imgSrc="https://www.itschool.ro/_next/static/media/OG-1200x615.40de1169.png
"
        imgWidth="100"
      />
      <Navigation
        imgSrc="https://www.starbt.ro/img/parteneri/1687868692LOGO_IT_SCHOOL_2022_-_colored-01.png"
        imgWidth="150"
      />
      {/*ca sa afisez UserUtem, trebuie sa initializez componenta creata*/}
      <UserItem name="Octavian Darius" email="octavian.darius@gmail.com" />
      <UserItem name="Eduard" email="eduard@gmail.com" />
      <hr/>
      <p>Exemplu componenta de React Class</p>
      <UserItemClass name="Alex" email="alex@gmail.com"/>
    </div>
  );
}

export default App;
