const domContainer = document.querySelector('#root');
const e = React.createElement;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello world"
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "card"
    }, /*#__PURE__*/React.createElement("h1", null, "Welcome to the electron app"), /*#__PURE__*/React.createElement("p", null, "This home page is build with Reactjs and ReactDOM as a library"), /*#__PURE__*/React.createElement(Description, null));
  }

}

ReactDOM.render(e(Home), domContainer);