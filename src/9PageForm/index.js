import React from 'react';
import './index.scss';

export default class PageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            textarea: ''
        }
    }
    clickHandler(e, i) {
        console.log(e)
        alert(i)
    }
    render() {
        return <div className="PageForm">
            <input type="text" name="input" id="input" onChange={ e => this.setState({ input: e.target.value }) } />
            <div>{ this.state.input }</div>
        </div>
    }
}