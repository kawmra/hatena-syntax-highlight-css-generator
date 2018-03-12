import React from 'react';

export default class MyText extends React.Component {

    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onChangeHandler(e) {
        this.state.count++
        console.log(this.state.count)
    }

    render() {
        return <input type="text" onChange={this.onChangeHandler.bind(this)} />;
    }
}