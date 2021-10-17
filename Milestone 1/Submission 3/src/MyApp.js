import React from "react";
import Color from "./Color";
import "./index.css";

class MyApp extends React.Component {
  constructor() {
    super();
    this.state = {
      colorNum: 32,
      colors: [],
    };
    for (let i = 0; i < this.state.colorNum; i += 1) {
      this.state.colors.push({ hexCode: this.generateColor() });
    }
  }

  generateColor() {
    return "#" + Math.random().toString(16).substr(-6);
  }

  updateColor(index) {
    let colors = this.state.colors.slice();
    const currentColor = this.generateColor();
    colors[index].hexCode = currentColor;
    this.setState({
      colors: colors,
    });
  }
  changecolor() {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.changecolor}>Randomize</button>
        <div className="color-container">
          {this.state.colors.map((color, index) => (
            <Color
              key={`color-${index}`}
              index={index}
              update={this.updateColor.bind(this)}
              hexCode={color.hexCode}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default MyApp;
