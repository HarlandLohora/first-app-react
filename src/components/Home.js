import React,{Component} from "react";

class Home extends Component{
	render(){
		return (
			<div>
				<p>Soy {this.props.text}</p>
			</div>
		);
	}
}

export default Home;