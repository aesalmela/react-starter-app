import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import { useStore } from '../stores/store';
import HomePage from '../../features/home/Home';
import Capture from '../../features/capture/Capture';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import BatchForm from '../../features/batches/BatchForm';

function App() {
  // const location = useLocation();
  // const { batchStore } = useStore();

  return (
    <>          
      <NavBar /> 
      <Container style={{ marginTop: "7em" }}>    
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/capture" component={Capture} />
          <Route exact path="/batch" component={BatchForm} />
        </Switch>
      </Container>
     
    </>
  );
}

export default App;
