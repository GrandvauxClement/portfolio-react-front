import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navbar";
import BannerHeader from "./BannerHeader";
import Body from "./body/Body";
import Footer from "./Footer";

function App() {
  return (
      <div>
        <header>
          <Navigation />
          <BannerHeader />

        </header>
        <Body />
        <Footer />

      </div>
  );
}

export default App;
