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
        <Button onClick={() => router.push('/event')} type="primary">6. 事件处理</Button>
        <Button onClick={() => router.push('/if')} type="primary">7. 条件渲染</Button>
        <Button onClick={() => router.push('/for')} type="primary">8. 列表 & Key</Button>
        <Button onClick={() => router.push('/form')} type="primary">9. 表单</Button>
        <Button onClick={() => router.push('/store')} type="primary">10. 状态提升</Button>
        <Button onClick={() => router.push('/redux')} type="primary">Redux</Button>
    </div>
};