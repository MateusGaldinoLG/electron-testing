const domContainer = document.querySelector('#root');

const e = React.createElement;

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: "hello world"}
    }

    render(){
        return(
            <div className="card">
                <h1>Welcome to the electron app</h1>
                <p>This home page is build with Reactjs and ReactDOM as a library</p>
                <Description />
            </div>
        )
    }
}

ReactDOM.render(e(Home), domContainer);