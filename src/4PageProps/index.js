import React, { useState } from 'react';
import { Button } from 'antd';
import './index.scss';

const Prop1 = props => {
    return props.activeIndex === 0 ? <div>
        东北地区用张三指代狼，泛指人称代词，代表普通的某个人，多指男性。在某些方言或与语境里有特殊意义。
        南方地区用张三代指某个人，通常是举例的时候泛指某些人。张三和李四、王五、王大麻子通常联系在一起被使用。
    </div> : ''
}

const Prop2 = props => {
    return props.activeIndex === 1 ? <div>
        假设的名字，常与张三、王五一起指代不特定的某个人，揶揄或者概括常用；
        李实为中国之大姓，由古至今均如此，百家姓中李在当时排名第四，俗称李四。
        人们在日常交往中总要说事儿，说事儿就难免不了举例。
        依常规这例可都应是大家耳熟能详的，也因此就出现了张三、李四、王五、赵六之说。
    </div> : ''
}

const Prop3 = props => {
    return props.activeIndex === 2 ? <div>
        王五是一个很普通的中国名字。
        王五，一个很普通的中国名字，很多时候与张三、李四、赵六等一起指代不特定的某个人，揶揄或者概括常用。
        例：张三李四王五赵六（民俗）
    </div> : ''
}

export default () => {
    let [activeIndex, setActiveIndex] = useState(0)
    return <div className="PageProps">
        <div className="bar">
            <Button type={ activeIndex === 0 ? "primary" : "default" } onClick={() => setActiveIndex(0)}>张三</Button>
            <Button type={ activeIndex === 1 ? "primary" : "default" } onClick={() => setActiveIndex(1)}>李四</Button>
            <Button type={ activeIndex === 2 ? "primary" : "default" } onClick={() => setActiveIndex(2)}>王五</Button>
        </div>
        <div className="context">
            <Prop1 activeIndex={activeIndex} />
            <Prop2 activeIndex={activeIndex} />
            <Prop3 activeIndex={activeIndex} />
        </div>
    </div>
};