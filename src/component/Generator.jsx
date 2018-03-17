import React from 'react';

export default class Generator extends React.Component {

    constructor(props) {
        super(props)
        this.state = { count: 0, text: "" }
    }

    onChangeHandler(e) {
        this.setState({
            text: e.target.value
        })
    }

    onClickHandler(e) {
        this.setState({
            text: convert(this.state.text)
        })
    }

    render() {
        return(
            <div>
                <textarea cols="80" rows="20" onChange={this.onChangeHandler.bind(this)} value={this.state.text}></textarea>
                <button onClick={this.onClickHandler.bind(this)}>Convert</button>
            </div>
        )
    }
}

function convert(str) {
    str = str.replace(/\{/g, "{'{'}")
    str = str.replace(/<pre.*?>/g, '<Code_theme={this.props.theme}>')
    str = str.replace(/<\/pre>/g, '</Code>')
    str = str.replace(/<span class="(.+?)">(.+?)<\/span>/g, '<CodeParts_type="$1">$2</CodeParts>')
    str = str.replace(/( +)/g, "{'$1'}")
    str = str.replace(/\n/g, "{`\n`}")
    str = str.replace(/Code_theme/g, 'Code theme')
    str = str.replace(/CodeParts_type/g, 'CodeParts type')
    return str
}