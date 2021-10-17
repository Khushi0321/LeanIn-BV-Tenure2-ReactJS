import React from "react";
import "./index.css";

class Color extends React.Component {
  render() {
    let style = {
      backgroundColor: this.props.hexCode,
    };

    return (
      <div>
        <div
          className="color"
          onClick={this.props.update.bind(this, this.props.index)}
          style={style}
        >
          <p>{this.props.hexCode}</p>
        </div>
      </div>
    );
  }
}

export default Color;
