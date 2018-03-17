import React from 'react';
import styles from '../css/preview.css'

export default class Preview extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return kotlinPreview(this.props)
    }
}

export const Code = (props) => {
    const style = {
        backgroundColor: props.theme.background,
        color: props.theme.color
    }
    const children = React.Children.map(props.children, (child) => {
        if (child.type === CodeParts) {
            return React.cloneElement(child, { "theme": props.theme })
        } else {
            return child
        }
    })
    return (
        <pre style={style} className={styles.preview}>
            {children}
        </pre>
    )
}

export const CodeParts = (props) => {
    return (
        <span style={{color: props.theme[props.type]}}>{props.children}</span>
    )
}

const jsPreview = (props) => {
    return (
<Code theme={props.theme}><CodeParts type="synStatement">class</CodeParts>{' '}Person{' '}<CodeParts type="synIdentifier">{'{'}</CodeParts>{`
`}{'  '}constructor(firstName,{' '}lastName){' '}<CodeParts type="synIdentifier">{'{'}</CodeParts>{`
`}{'    '}<CodeParts type="synIdentifier">this</CodeParts>.firstName{' '}={' '}firstName;{`
`}{'    '}<CodeParts type="synIdentifier">this</CodeParts>.lastName{' '}={' '}lastName;{`
`}{'  '}<CodeParts type="synIdentifier">}</CodeParts>{`
`}{`
`}{'  '}greet(){' '}<CodeParts type="synIdentifier">{'{'}</CodeParts>{`
`}{'    '}console.log(<CodeParts type="synConstant">"Hello,{' '}I'm{' '}"</CodeParts>{' '}+{' '}<CodeParts type="synIdentifier">this</CodeParts>.firstName{' '}+{' '}<CodeParts type="synConstant">"!"</CodeParts>);{`
`}{'  '}<CodeParts type="synIdentifier">}</CodeParts>{`
`}<CodeParts type="synIdentifier">}</CodeParts>{`
`}{`
`}<CodeParts type="synStatement">const</CodeParts>{' '}person{' '}={' '}<CodeParts type="synStatement">new</CodeParts>{' '}Person(<CodeParts type="synConstant">'Ichiro'</CodeParts>,{' '}<CodeParts type="synConstant">'Suzuki'</CodeParts>);{`
`}person.greet();{' '}<CodeParts type="synComment">//{' '}prints{' '}"Hello,{' '}I'm{' '}Ichiro!"</CodeParts>{`
`}</Code>
    )
}

const kotlinPreview = (props) => {
    return (
<Code theme={props.theme}><CodeParts type="synType">class</CodeParts>{' '}Person({`
`}{'        '}<CodeParts type="synType">val</CodeParts>{' '}name:{' '}String,{`
`}{'        '}<CodeParts type="synType">val</CodeParts>{' '}age:{' '}<CodeParts type="synType">Int</CodeParts>,{`
`}{'        '}<CodeParts type="synType">val</CodeParts>{' '}hasPet:{' '}<CodeParts type="synType">Boolean</CodeParts>{`
`}){' '}{'{'}{`
`}{`
`}{'    '}<CodeParts type="synType">fun</CodeParts>{' '}greet(){' '}{'{'}{`
`}{'        '}println(<CodeParts type="synConstant">"Hello,{' '}I'm{' '}</CodeParts><CodeParts type="synIdentifier">$name</CodeParts><CodeParts type="synConstant">!"</CodeParts>){`
`}{'    '}}{`
`}}{`
`}{`
`}<CodeParts type="synType">fun</CodeParts>{' '}main(args:{' '}Array&lt;String&gt;){' '}{'{'}{`
`}{'    '}<CodeParts type="synType">val</CodeParts>{' '}person{' '}={' '}Person(<CodeParts type="synConstant">"Ichiro"</CodeParts>,{' '}<CodeParts type="synConstant">20</CodeParts>,{' '}hasPet{' '}={' '}<CodeParts type="synConstant">false</CodeParts>){`
`}{'    '}person.greet(){' '}<CodeParts type="synComment">//{' '}prints{' '}"Hello,{' '}I'm{' '}Ichiro!"</CodeParts>{`
`}{`
`}{'    '}<CodeParts type="synStatement">if</CodeParts>{' '}(person.age{' '}&gt;{' '}<CodeParts type="synConstant">20</CodeParts>){' '}{'{'}{`
`}{'        '}println(<CodeParts type="synConstant">"He{' '}is{' '}older{' '}than{' '}20"</CodeParts>){`
`}{'    '}}{`
`}}{`
`}</Code>
    )
}