import './App.css';
// import Row from './components/Row'
// import Nav from './components/Nav'
// import requests from './utils/requests'
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Home/>
     {/* <Row title='Trending'fetchUrl={requests.fetchAllWeekTrending}></Row> */}
    </div>
  );
}

export default App;
