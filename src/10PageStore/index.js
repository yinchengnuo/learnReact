import React from 'react';
import './index.scss';

const toSheShi = hua => ((hua - 32) * 5 / 9).toFixed(2)
  
const toHuaShi = she =>  ((she * 9 / 5) + 32).toFixed(2)

class SheShi extends React.Component {
    render() {
        return (<div>
            <span>摄氏度</span>
            <input type="number" value={ this.props.value } onChange={ ({ target: { value } }) => this.props.onChange(value) } />
        </div>)
    }
}

class HuaShi extends React.Component {
    render() {
        return (<div>
            <span>华氏度</span>
            <input type="number" value={ this.props.value } onChange={ ({ target: { value } }) => this.props.onChange(value) } />
        </div>)
    }
}

export default class PageStore extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            she: 0,
            hua: toHuaShi(0),
        }
    }
    render() {
        return <div className="PageStore">
            <SheShi value={ this.state.she } onChange={ value => this.setState({ she: value, hua: toHuaShi(value) }) } />
            <br/>
            <HuaShi value={ this.state.hua } onChange={ value => this.setState({ hua: value, she: toSheShi(value) }) } />
        </div>
    }
}