import logo from './logo.svg';
import './App.css';
import template from './template';
import axios from 'axios';
import Row from './row'
import react,{ useState } from 'react'
import request from './requests';

function App() {
  
  return (
    <div className="App">
    <Row row_title="Trending" fetch_url={request.trending}></Row>
    <Row row_title="Originals" fetch_url={request.netflixoriginals}></Row>
    <Row row_title="Top Rated" fetch_url={request.toprated}></Row>  
    <Row row_title="Action" fetch_url={request.acitonmovies}></Row>
    <Row row_title="comedymovies" fetch_url={request.comedymovies}></Row>
    <Row row_title='horror' fetch_url={request.horrormovies}/>
    
    
    </div>
  );
}

export default App;
