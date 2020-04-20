import React, { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';
import { Input } from 'antd';
import { Button } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';

const { TextArea } = Input;

export default () => {
    const state = 'cl1'
    const id = 'wx5224793b7dc7f7b7'
    const wxURL = 'https://open.weixin.qq.com/connect/oauth2/authorize'
    // const [login] = useState(window.location.search.includes('code') && window.location.search.includes('state'))
    const [login] = useState(!(window.location.search.includes('code') && window.location.search.includes('state')))
    const [imgList, setImgList] = useState([
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg'
    ])
    const auth = () => window.location.href = `${wxURL}?appid=${id}&redirect_uri=http://api.woaidakele.cn/api/${state}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
    useEffect(() => {
        if (login) {
            axios.get(`http://api.woaidakele.cn/api/${state}/wechat`).then(({ data }) => {
                console.log(data)
                window.wx.config(data)
                window.wx.ready(function(){
                    window.wx.updateAppMessageShareData({
                        title: `意见反馈`,
                        desc: '传递健康，改变命运。',
                        link: data.url,
                        imgUrl: 'http://api.app.jiuweiyun.cn/public/uploads/logo.jpg'
                    })
                })
                window.wx.error(function(res){
                    alert('error')
                })
            })
        } else {
            auth()
        }
    }, [login])



    const Content = () => {
        return <div className="content">
            <header>
                <div className="top">
                    <div className="left">
                        <img src="http://api.woaidakele.cn/public/uploads/cl.jpg" alt="常来" />
                    </div>
                    <div className="right">
                        <div className="top">你好！</div>
                        <div className="bot">我是大卫博士品牌创始人：常来</div>
                    </div>
                </div>
                <div className="bot">如果你对我们的产品以及服务有什么意见或者建议，请在下方留言反馈给我们，帮助我们改进。</div>
            </header>
            <main>
                <div className="title">写反馈</div>
                <div className="input">
                    <TextArea placeholder="说点什么吧~" autoSize={true} maxLength={120} />
                    <div className="imgList">
                        {
                            imgList.map((url, index) => (<div className="imgItem" key={index}>
                                <CloseCircleFilled />
                                <img src={url} alt={url} />
                            </div>))
                        }
                    </div>
                </div>
                <div className="subbar">写反馈</div>
            </main>
        </div>
    }

    const IsLogin = props => props.login ? <Content /> : <div className="login">
        <Button onClick={() => auth()}>登陆</Button>
    </div>

    return <div className="PageFeedback">
        <IsLogin login={login} />
    </div>
};