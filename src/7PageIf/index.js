import React from 'react';
import './index.scss';
import { Switch  } from 'antd'

export default class PageIf extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    clickHandler(e, i) {
        console.log(e)
        alert(i)
    }
    render() {
        return <div className="PageIf">
            <Switch onChange={ show => this.setState({ show }) }></Switch>
            {
                this.state.show ? '开启' : '关闭'
            }
        </div>
    }
}