import React from 'react'
import { render } from 'react-dom'
import Generator from './Generator'
import Preview from './Preview'
import Palette from './Palette'
import ThemeCssBox from './ThemeCssBox'
import styles from './css/index.css'
import repository from './ThemeRepository'

const dracula = {
    background: "#282a36",
    color: "#ffffff",
    synSpecial: "#c000c0",
    synType: "#ff79c6",
    synPreProc: "#a199c8",
    synIdentifier: "#bd93f9",
    synStatement: "#50fa7b",
    synConstant: "#f1fa8c",
    synComment: "#6272a4"
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            theme: props.theme
        }
        this.saveTimer = 0
    }

    handleThemeChange(theme) {
        this.saveTheme(theme)
        this.setState({
            theme: theme
        })
    }

    handleImportClick(e) {
        const json = prompt("インポートする JSON を貼り付けてください")
        const parsed = JSON.parse(json)
        this.saveTheme(parsed)
        this.setState({
            theme: parsed
        })
    }

    handleExportClick(e) {
        const json = JSON.stringify(this.state.theme)
        alert(`エクスポートしました: \n\n${json}`)
    }

    saveTheme(theme) {
        clearTimeout(this.saveTimer)
        this.saveTimer = setTimeout(() => {
            this.saveThemeActual(theme)
        }, 1000)
    }

    saveThemeActual(theme) {
        repository.save(theme)
    }

    render() {
        return(
            <div>
                {/* <Generator /> */}
                <section>
                    <h2>色の設定</h2>
                    <p>パレットの色を変更してすると、リアルタイムでプレビューとデザイン CSS が変更されます。</p>
                    <p>パレットに入力した色は localStorage に保存されているため、ウィンドウを閉じてももう一度開くと復元されます。</p>
                    <div className={styles.container}>
                        <Preview theme={this.state.theme} />
                        <Palette theme={this.state.theme} onThemeChange={this.handleThemeChange.bind(this)} />
                    </div>
                    <p>
                        <button onClick={this.handleImportClick.bind(this)}>Import</button>
                        &nbsp;
                        <button onClick={this.handleExportClick.bind(this)}>Export</button>
                    </p>
                </section>
                <section>
                    <h2>デザインCSS</h2>
                    <p>以下の CSS を [デザイン → カスタマイズ → デザインCSS] に追記すると、はてなブログのシンタックスハイライトの色が変更されます。</p>
                    <ThemeCssBox theme={this.state.theme} />
                </section>
            </div>
        )
    }
}

const savedTheme = repository.load()

render(<App theme={savedTheme || dracula} />, document.getElementById('app'))