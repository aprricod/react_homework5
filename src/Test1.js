import React, { Component } from "react";

export class Test1 extends Component {
  constructor(props) {
    console.clear();
    console.log("constructor");
    console.log(props);
    super(props);

    this.state = {
      s1: 0,
      //   s1: props.arg,
    };
  }

  buttonHandler = () => {
    console.log("button pressed");
    let val = this.state.s1;
    val++;
    this.setState({
      s1: val,
    });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("get Derived State From Props");
    return null;
    // return {
    //   s1: props.arg,
    // };
  }

  componentDidMount() {
    console.log("comp did mount");
  }

  componentDidUpdate() {
    console.log("comp did update");
  }

  render() {
    console.log("render1");
    return (
      <>
        {console.log("render2")}
        <button onClick={this.buttonHandler}>Push</button>
        <div>{this.state.s1}</div>
      </>
    );
  }
}
