// Import required libraries
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
  };

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
    console.log("Increment Clicked!", this.state.count);
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
    console.log("Decrement Clicked!", this.state.count);
  };

  render() {
    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        {/* Conditional rendering */}
        <div>{this.state.tags.length === 0 && "Create a new tag"}</div>
        <div>{this.renderTags()}</div>
      </div>
    );
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
