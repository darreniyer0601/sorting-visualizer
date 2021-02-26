import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar';
import ArrayContainer from './components/arrayContainer';
import Footer from './components/footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      algorithm: null,
      array: [],
    }
  }

  componentDidMount() {
    this.generateArray();
  }

  bubbleSort() {
    const array = this.state.array.splice(0);

    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }

      this.setState({ array: array });

      for (var k = 0; k < 1000000; k++) {
        for (var l = 0; l < 10000; l++) {
          // Do nothing. Delay loop
        }
      }
    }

    this.setState({ array: array });
  }

  selectionSort() {
    const array = this.state.array.splice(0);

    for (var i = 0; i < array.length; i++) {
      var pos = i;
      var max = array[i];
      for (var j = i + 1; j < array.length; j++) {
        if (array[j] < max) {
          max = array[j];
          pos = j;
        }
      }
      var temp = array[i];
      array[i] = array[pos];
      array[pos] = temp;
    }

    this.setState({ array: array });
  }

  insertionSort() {
    const array = this.state.array.splice(0);

    for (var i = 1; i < array.length; i++) {
      var t = array[i];
      var j = i;

      while (j > 0 && array[j - 1] > t) {
        array[j] = array[j - 1];
        j--;
      }

      array[j] = t;
    }

    this.setState({ array: array });
  }

  handleSort() {
    switch (this.state.algorithm) {
      case 'bubble': this.bubbleSort();
        break;
      case 'selection': this.selectionSort();
        break;
      case 'insertion': this.insertionSort();
        break;
      case 'merge': return;
    }
  }

  generateArray() {
    const brr = [];
    for (var i = 0; i < 150; i++) {
      const next = Math.random() * 500 + 20;
      brr.push(Math.floor(next));
    }

    this.setState({ array: brr });
  }

  selectAlgorithm(type) {
    this.setState({ algorithm: type });
  }

  render() {
    return (
      <div className="App">
        <Navbar onSelect={(type) => this.selectAlgorithm(type)} />
        <ArrayContainer arr={this.state.array} />
        <Footer onGenerate={() => this.generateArray()} onSort={() => this.handleSort()} />
      </div>
    );
  }
}

export default App;
