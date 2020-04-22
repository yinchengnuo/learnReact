import React from 'react';
import './index.scss';

export default class PageState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: Date()
        }
    }
    componentDidMount() {
        this.timer = setInterval(() => this.setState((state, props) => {
            console.log(state)
            console.log(props)
            return {
                time: Date()
            }
        }, () => {
            console.log('setStateOVER')
        }), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return <div className="PageState">{ this.state.time }</div>
    }
}