import React from 'react';

export default class Palette extends React.Component {
    renderPaletteRow(name) {
        return <PaletteRow name={name} value={this.props.theme[name]} onColorChange={this.props.onThemeChange} />
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
    handleTextChange(e) {
        this.props.onColorChange(this.props.name, e.target.value)
    }

    render() {
        return(
            <tr>
                <td>{this.props.name}</td>
                <td style={{ backgroundColor: this.props.value }}></td>
                <td>
                    <input
                        type="text"
                        onChange={this.handleTextChange.bind(this)}
                        value={this.props.value}
                        />
                </td>
            </tr>
        )
    }
}