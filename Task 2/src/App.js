import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import Header from './components/header';
import InfoWeather from './components/info-weather';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount(){
    this.getDataWeather();
  }

  async getDataWeather(){
    const {data} = await axios.request({
      method: 'get',
      url: 'https://api.openweathermap.org/data/2.5/weather?appid=39f5d9d1b122aeccc03396a0537bb7ed&id=2172797'
    });

    this.setState({data});
    // real time degree
    setTimeout(() => {
      this.getDataWeather();
    }, 5000);
  }

  render() {
    const {data} = this.state;
    return (
      <div className="App">
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <InfoWeather data={data} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
