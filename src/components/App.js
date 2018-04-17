import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from './Fish';
import samples from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fishes: {},
      order: {}
    };
    this.loadSamples = this.loadSamples.bind(this);
    this.addFish = this.addFish.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
  }

  addFish(fish) {
    const fishes = { ...this.state.fishes };
    const timeStamp = Date.now();
    fishes[`fishes-${timeStamp}`] = fish;
    this.setState({ fishes });
  }

  loadSamples(){
    this.setState({
        fishes: samples,
    })
  }

  addToOrder(key){
      const order = {...this.state.order};
      order[key] = order[key] + 1 || 1;
      this.setState({order: order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Captain Seafood Restraunt" fishes={this.state.fishes}/>
            <ul>
                {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)}
            </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}  />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    );
  }
}

export default App;
