import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import withDataLoading from './withDataLoading'
import Navbar from "./Navbar";
import Project from "./body/Project";

function App() {
    const DataLoading = withDataLoading(Project);
    const [appState, setAppState] = useState( {
        loading: false,
        project: null
    });

    useEffect( () => {
        setAppState( {loading: true});
        const apiUrl = `http://localhost:8000/api/projets`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((project) => {
                setAppState( {loading: false, project: project});
            });
    }, [setAppState]);
  return (
    <div>
      <Navbar />

    </div>
  );
}

export default App;
