import React from 'react';
import List from './components/list/List'
import Login from './login/Login'
import Sin from './components/home/Sin'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import All from './All'

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/" exact component={All}/>
          <Route path="/list"  component={List}/>
            <Route path="/login"  component={Login}/>
            <Route path="/sin/:id" component={Sin}></Route>
        </Switch>

      </Router>

    </div>

  );
}

export default App;
