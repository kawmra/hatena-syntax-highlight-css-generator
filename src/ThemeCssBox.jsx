import React from 'react';
import styles from './css/theme_css_box.css'

export default class ThemeCssBox extends React.Component {
    render() {
        return(
            <pre className={styles.box}>{generateCss(this.props.theme)}</pre>
        )
    }
}

const generateCss = (theme) => {
    return `\
.entry-content pre.code {
    background-color: ${theme.background};
    color: ${theme.color};
}
.synComment { color: ${theme.synComment}; }
.synConstant { color: ${theme.synConstant}; }
.synIdentifier { color: ${theme.synIdentifier}; }
.synPreProc { color: ${theme.synPreProc}; }
.synSpecial { color: ${theme.synSpecial}; }
.synStatement { color: ${theme.synStatement}; }
.synType { color: ${theme.synType}; }`
}