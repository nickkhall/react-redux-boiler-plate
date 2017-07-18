import React, { Component } from "react"
import { connect } from 'react-redux'

// Components

// Actions
// import { addTodo, deleteTodo, editTodo, changeTodo, markCompleted } from '../actions'

class Hello extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<main>
				<h1>Hello world</h1>
			</main>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		state
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addTodo: (todo, id) => {dispatch(addTodo(todo, id))},
// 	}
// }
//
// export default connect(
// 	mapStateToProps,
//   mapDispatchToProps
// )(Todo)
export default connect(
	mapStateToProps
)(Hello)
