import React from 'react';
import './index.scss';
import { Button } from 'antd'

export default class PageEvent extends React.Component {
    clickHandler(e, i) {
        console.log(e)
        alert(i)
    }
    render() {
        return <div className="PageEvent">
            <Button type="primary" onClick={ e => this.clickHandler(e, Math.random()) }>事件处理</Button>
        </div>
    }
}