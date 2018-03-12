import React from 'react'
import { render } from 'react-dom'
import Generator from './Generator'
import Preview from './Preview'
import Palette from './Palette'
import ThemeCssBox from './ThemeCssBox'
import styles from './css/index.css'
import repository from './ThemeRepository'

const azuki = {
    background: '#353848',
    color: '#ffffff',
    synSpecial: '#c000c0',
    synType: '#b3ce5b',
    synPreProc: '#a199c8',
    synIdentifier: '#afd0ef',
    synStatement: '#ebc061',
    synConstant: '#dd9cb4',
    synComment: '#e8e6f3',
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            theme: props.theme
        }
    }

    handleThemeChange(theme) {
        repository.save(theme)
        this.setState({
            theme: theme
        })
    }

    render() {
        return(
            <div>
                {/* <Generator /> */}
                <section>
                    <h3>1. パレットの色を変更してプレビューを確認します</h3>
                    <div className={styles.container}>
                        <Preview theme={this.state.theme} />
                        <Palette defaultTheme={this.props.theme} onThemeChange={this.handleThemeChange.bind(this)} style={{flexGlow: 1}} />
                    </div>
                </section>
                <section>
                    <h3>2. 以下の CSS を [デザイン → カスタマイズ → デザインCSS] に追記します</h3>
                    <ThemeCssBox theme={this.state.theme} />
                </section>
            </div>
        )
    }
}

const savedTheme = repository.load()

render(<App theme={savedTheme || azuki} />, document.getElementById('app'))