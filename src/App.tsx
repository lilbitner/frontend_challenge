import { routes } from './constants/demo-constants';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';
import DemoPresentationPage from './components/pages/demo-presentation-page'
import DemoListPage from './components/pages/demo-list-page';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.demoList} component={DemoListPage}/>
        <Route path={routes.demoPresentation} component={DemoPresentationPage}/>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
