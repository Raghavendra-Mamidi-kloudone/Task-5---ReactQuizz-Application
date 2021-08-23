import logo from './logo.svg';
import Basicform from './Component/Forms/BasicForm';
import './App.css';
import SelectTopic from './Component/Forms/SelectTopic';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import Html from './Component/Forms/Html';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        <Route path="/" component={Basicform} exact></Route>
        <Route path="/SelectTopic" component={SelectTopic}></Route>
        <Route path="/Html" component={Html}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
