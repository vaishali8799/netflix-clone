import './App.css';
import Row from './components/Row'
import Nav from './components/Nav'
import requests from './utils/requests'
function App() {
  return (
    <div className="App">
      <Nav/>
     <Row title='Trending'fetchUrl={requests.fetchAllWeekTrending}></Row>
    </div>
  );
}

export default App;
