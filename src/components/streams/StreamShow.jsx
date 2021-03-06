import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamShow extends Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	render() {
		if (!this.props.stream) return <h2>Loading....</h2>;
		return <div>{this.props.stream.title}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
