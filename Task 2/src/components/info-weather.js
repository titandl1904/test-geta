import React, { Component } from "react";
import {Row, Col} from 'react-bootstrap';

const calculateDegree = (degree) => {
  return ((parseInt(degree) - 32) * (5/9) + Math.random(1, 2)).toFixed(2);
}

class InfoWeather extends Component {

  render() {
    const {data} = this.props;
    const weatherDescription = Array.isArray(data.weather) && data.weather[0] ? data.weather[0].description : '';
    return (
      <div>
        <Row>
            <Col md={3} sm={6} xs={12}>Country</Col>
            <Col md={3} sm={6} xs={12}>{data.sys ? data.sys.country: ''}</Col>
            <Col md={3} sm={6} xs={12}>Temperature now</Col>
            <Col md={3} sm={6} xs={12}>{calculateDegree(data.main ? data.main.temp: 0)}<span className="show-degree"></span>C</Col>
        </Row>
        <Row>
            <Col md={3} sm={6} xs={12}>Temperature min today</Col>
            <Col md={3} sm={6} xs={12}>{calculateDegree(data.main ? data.main.temp_min: 0)}<span className="show-degree">0</span>C</Col>
            <Col md={3} sm={6} xs={12}>Temperature max today</Col>
            <Col md={3} sm={6} xs={12}>{calculateDegree(data.main ? data.main.temp_max: 0)}<span className="show-degree">0</span>C</Col>
        </Row>

        <Row>
            <Col md={3} sm={6} xs={12}>Weather Description</Col>
            <Col md={3} sm={6} xs={12}>{weatherDescription}</Col>
            <Col md={3} sm={6} xs={12}>Wind speed</Col>
            <Col md={3} sm={6} xs={12}>{data.wind ? data.wind.speed : ''}</Col>
        </Row>
      </div>
    );
  }
}

export default InfoWeather;
