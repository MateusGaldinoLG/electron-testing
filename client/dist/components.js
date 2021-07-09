class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "All the content is transpiled by Babel and than served statically, it is of course not fun at all :') "), /*#__PURE__*/React.createElement("p", null, "Anyway, here is a button with reactive counting: "), /*#__PURE__*/React.createElement("button", {
      className: "btn btn-primary",
      onClick: this.handleIncrement
    }, this.state.count));
  }

}