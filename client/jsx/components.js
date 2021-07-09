

class Description extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0}
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1})
    }

    render(){
        return(
            <div>
                <p>All the content is transpiled by Babel and than served statically, it is of course not fun at all :') </p>
                <p>Anyway, here is a button with reactive counting: </p>
                <button 
                    className="btn btn-primary" 
                    onClick={this.handleIncrement}
                >
                    {this.state.count}
                </button>
            </div>
        )
    }
}