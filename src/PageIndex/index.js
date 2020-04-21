import React from 'react';
import './index.scss';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
  
export default () => {
    const router = useHistory()
    return <div className="PageIndex">
        <Button onClick={() => router.push('/hello-word')} type="primary">1. Hello Word</Button>
        <Button onClick={() => router.push('/jsx')} type="primary">2. JSX</Button>
        <Button onClick={() => router.push('/render')} type="primary">3. 元素渲染</Button>
        <Button onClick={() => router.push('/props')} type="primary">4. 组件 & Props</Button>
        <Button onClick={() => router.push('/state')} type="primary">5. State & 生命周期</Button>
    </div>
};