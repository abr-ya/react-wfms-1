import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  state = {
    cars: [
      {name: "Ford Focus", year: "2016"},
      //{name: "Mazda", year: "2017"},
      //{name: "Audi A8", year: "2013"}
    ],
    pageTitle: 'Hello, React!',
    showCars: false
  }

  changeTitleHandler = (newTitle) => {
    //console.log('!');
    this.setState({
      pageTitle: newTitle
    });
  }

  changeNameHandler = (name, index) => {
    //console.log(name, index);
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars] // клонируем массив
    cars[index] = car
    this.setState({
      cars // == cars: cars
    });
  }

  handleInput = (event) => {
    //console.log('!!', event.target.value);
    this.setState({
      pageTitle: event.target.value
    });
  }

  // стрелочная функция не создает свой контекст - использует контекст приложения
  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    });
    console.log(this.state.showCars)
  }

  // обычная функция - создаёт свой контекст - её надо bind-ить!
  deleteHandler(index) {
    //console.log(this)
    const cars = [...this.state.cars] // клонируем массив
    cars.splice(index, 1) // удаляем 1 элемент
    this.setState({
      cars // == cars: cars
    });    
  }

  UNSAFE_componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  render() {
    console.log('App Render');
    const styleOne = {
      'fontWeight': 700,
    }

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onChangeName={(event) => this.changeNameHandler(event.target.value, index)}
            onDelete={this.deleteHandler.bind(this, index)}
          />
        )
      })
    }
 
    return(
      <div style={styleOne}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle Cars</button>

        <div style={{
          width: 600,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          {cars}
        </div>

      </div>
    );
  }
}

export default App;
