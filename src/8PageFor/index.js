import React from 'react';
import './index.scss';

export default class PageFor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                '吃饭',
                '睡觉',
                '打豆豆'
            ]
        }
    }
    clickHandler(e, i) {
        console.log(e)
        alert(i)
    }
    render() {
        return <div className="PageFor">
            <ul>
                {
                    this.state.list.map((e, i) => (<li key={ i }>
                        { e }
                    </li>))
                }
            </ul>
        </div>
    }
}