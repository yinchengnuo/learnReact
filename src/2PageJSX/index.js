import React, { useState } from 'react';
import './index.scss';
import { Button } from 'antd';
  
export default () => {
    let [num, setNum] = useState(0)
    return <div className="PageJSX">
        <Button onClick={() => setNum(num + 1)}>count: { num }</Button>
    </div>
};