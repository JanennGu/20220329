import React, { Component } from "react";
import Button from "./input-button";
import Text from "./input-text";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: "",
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(e) {
    if (e.target.value !== undefined) {
      let instring = e.target.value;
      let prvcontent = this.state.string;
      let content = "";
      if (
        instring === "+" ||
        instring === "-" ||
        instring === "*" ||
        instring === "/"
      ) {
        content = prvcontent + " " + instring + " ";
      } else if (instring === "附加") {
        content = "";
      } else if (instring === "C") {
        content = "";
      } else if (instring === "Back") {
        if (prvcontent) {
          let newcontent = String(prvcontent);
          if (
            newcontent[newcontent.length - 1] === " " &&
            newcontent[newcontent.length - 3] === " "
          ) {
            prvcontent = newcontent.slice(0, newcontent.length - 3);
          } else {
            prvcontent = newcontent.slice(0, newcontent.length - 1);
          }
        }
        content = prvcontent;
      } else if (instring === "=") {
        if (prvcontent) {
          if (prvcontent.indexOf(" ") !== -1) {
            let arr = prvcontent.split(" ");
            let ans = [];
            let i = 0;
            while (i < arr.length) {
              if (arr[i] === "") {
                i++;
              } else if (arr[i] === "+") {
                ans.push(arr[i + 1]);
                i += 2;
              } else if (arr[i] === "-") {
                ans.push(-arr[i + 1]);
                i += 2;
              } else if (arr[i] === "*") {
                let a;
                let b = ans.pop();
                if (arr[i + 1] === "-") {
                  a = -arr[i + 2];
                  i += 3;
                } else {
                  a = arr[i + 1];
                  i += 2;
                }
                ans.push(b * a);
              } else if (arr[i] === "/") {
                let a;
                let b = ans.pop();
                if (arr[i + 1] === "0") {
                  content = "ERROR!";
                  return;
                } else if (arr[i + 1] === "-") {
                  a = -arr[i + 2];
                  i += 3;
                } else {
                  a = arr[i + 1];
                  i += 2;
                }
                ans.push(b / a);
              } else {
                ans.push(arr[i]);
                i++;
              }
            }
            let fin_ans = parseFloat(ans[0]);
            for (i = 1; i < ans.length; i++) {
              fin_ans += parseFloat(ans[i]);
            }
            content = fin_ans;
          } else {
            content = prvcontent;
          }
        } else {
          content = "";
        }
      } else {
        if (prvcontent && parseInt(prvcontent) !== 0) {
          content = prvcontent + instring;
        } else {
          content = instring;
        }
      }
      this.setState({
        string: content,
      });
    }
  }

  render() {
    return (
      <div id="main">
        <div id="input_text">
          <Text value={this.state.string} />
        </div>
        <div id="input_button" onClick={this.handleButton}>
          <Button value={1} />
          <Button value={2} />
          <Button value={3} />
          <Button value={"Back"} />
          <Button value={"C"} />
          <Button value={4} />
          <Button value={5} />
          <Button value={6} />
          <Button value={"+"} />
          <Button value={"-"} />
          <Button value={7} />
          <Button value={8} />
          <Button value={9} />
          <Button value={"*"} />
          <Button value={"/"} />
          <Button value={"附加"} />
          <Button value={0} />
          <Button value={"."} />
          <Button value={"="} className={"equal_size"} />
        </div>
      </div>
    );
  }
}

export default App;