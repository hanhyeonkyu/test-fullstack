import React from 'react'
import './App.scss'
import Navigation from './utils/Navigation'

class App extends React.Component {
  public constructor(props: React.Props<any>) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
