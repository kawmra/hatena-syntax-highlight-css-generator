import React from 'react';

export default class Palette extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            theme: props.theme
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            theme: nextProps.theme
        })
    }

    handleColorChange(name, color) {
        const newTheme = this.state.theme
        newTheme[name] = color
        this.setState({
            theme: newTheme
        })
        this.props.onThemeChange(newTheme)
    }

    renderPaletteRow(name) {
        return <PaletteRow name={name} value={this.state.theme[name]} onColorChange={this.handleColorChange.bind(this)} />
    }

    render() {
        return(
            <table className='pure-table' style={{fontSize: "16px"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderPaletteRow("background") }
                    { this.renderPaletteRow("color") }
                    { this.renderPaletteRow("synComment") }
                    { this.renderPaletteRow("synConstant") }
                    { this.renderPaletteRow("synIdentifier") }
                    { this.renderPaletteRow("synPreProc") }
                    { this.renderPaletteRow("synSpecial") }
                    { this.renderPaletteRow("synStatement") }
                    { this.renderPaletteRow("synType") }
                </tbody>
            </table>
        )
    }
}

class PaletteRow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            colorText: props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            colorText: nextProps.value
        })
    }

    handleTextChange(e) {
        this.setState({
            colorText: e.target.value
        })
        this.props.onColorChange(this.props.name, e.target.value)
    }

    render() {
        return(
            <tr>
                <td>{this.props.name}</td>
                <td style={{ backgroundColor: this.state.colorText }}></td>
                <td>
                    <input
                        type="text"
                        onChange={this.handleTextChange.bind(this)}
                        value={this.state.colorText}
                        />
                </td>
            </tr>
        )
    }
}