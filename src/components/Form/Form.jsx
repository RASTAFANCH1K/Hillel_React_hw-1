import React, { Component } from 'react';
import FormCss from './Form.module.css';
import CarItems from './CarItems/CarItems'
import { Car } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';
import logo from '../../logo.svg';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amountOfcars: [], 
      filteredCars: []
    };
  }

  carModelRef = React.createRef();
  carColorRef = React.createRef();

  addNewCar = event => {
    event.preventDefault();

    const carModelRefVal = this.carModelRef.current.value;
    const carColorRefVal = this.carModelRef.current.value;

    if (!carModelRefVal || !carColorRefVal) return 0;
    
    const car = new Car({
      id: uuidv4(),
      model: this.carModelRef.current.value,
      color: this.carColorRef.current.value,
    });

    this.setState({ amountOfcars: [...this.state.amountOfcars, car] });
  };

  removeFirstCar = event => {
    event.preventDefault();
    this.setState({ amountOfcars: this.state.amountOfcars.slice(1) });
  };

  filterCarsByColor = event => {
    event.preventDefault();
    this.setState({ filteredCars: event.target.value });
  };

  render() {
    const { amountOfcars, filteredCars } = this.state;

    return (
      <form>
        <div className={FormCss.logoWrapper}>
          <img className={FormCss.logo} src={logo} alt="logo" />
        </div>

        <h3 className={FormCss.title}>Car list</h3>

        <div className={FormCss.groups}>
          <input className={FormCss.control} ref={this.carModelRef} type="text" name="model" placeholder="Model" />
        </div>

        <div className={FormCss.groups}>
          <input className={FormCss.control} ref={this.carColorRef} type="text" name="color" placeholder="Color" />
        </div>

        <button className={FormCss.btn} onClick={this.addNewCar}>Add the new car</button>
        <button className={FormCss.btn} onClick={this.removeFirstCar}>Remove the first car</button>
        
        <div className={FormCss.groups}>
          <input className={FormCss.control} type="text" name="filter" placeholder="Filter cars by color" onChange={this.filterCarsByColor} />
        </div>

        <CarItems amountOfcars={amountOfcars} filteredCars={filteredCars} />
      </form>
    )
  }
}

export default Form;
