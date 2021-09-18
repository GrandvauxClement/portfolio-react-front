import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import withDataLoading from './withDataLoading'
import Navigation from "./Navbar";
import Project from "./body/Project";
import BannerHeader from "./BannerHeader";
import Body from "./body/Body";

function App() {
    const DataLoading = withDataLoading(Project);
    const [appState, setAppState] = useState( {
        loading: false,
        project: null
    });

    useEffect( () => {
        setAppState( {loading: true});
        const apiUrl = `https://127.0.0.1:8000/api/projets`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((project) => {
                setAppState( {loading: false, project: project['hydra:member']});
            });
    }, [setAppState]);
  return (
      <div>
        <header>
          <Navigation />
          <BannerHeader />
            {console.log(appState.project)}
        </header>
          <Body project={appState.project} />
      </div>
  );
}

export default App;
