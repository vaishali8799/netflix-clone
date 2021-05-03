import './App.css';
import Row from './components/Row'
import requests from './utils/requests'
function App() {
  return (
    <div className="App">
     <Row title='Trending'fetchUrl={requests.fetchAllWeekTrending}></Row>
    </div>
  );
}

export default App;
