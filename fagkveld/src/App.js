import React, { Component } from 'react';
import MainContainer from './MainContainer';
import TopInfoBox from './TopInfoBox';
import data from './bidrag.js';

class App extends Component {
  render() {
    const comparator = (e1, e2) => {
      const h1 = parseInt(e1.klokkeslett.substring(0,2), 10);
      const h2 = parseInt(e2.klokkeslett.substring(0,2), 10);
      const m1 = parseInt(e1.klokkeslett.substring(3,5), 10);
      const m2 = parseInt(e2.klokkeslett.substring(3,5), 10);

      if (h1 !== h2) return h1 - h2
      else return m1 - m2
    }

    data.foredrag.sort(comparator)
    data.workshops.sort(comparator)

    return (
      <div className="app">
        <TopInfoBox text={data.topText} />
        <MainContainer data={data} />
      </div>
    );
  }
}

export default App;
