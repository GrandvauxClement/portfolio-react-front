import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navbar";
import BannerHeader from "./BannerHeader";
import Body from "./body/Body";

function App() {
  return (
      <div>
        <header>
          <Navigation />
          <BannerHeader />

        </header>
          <Body />

      </div>
  );
}

export default App;
