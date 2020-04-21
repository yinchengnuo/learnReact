import React from 'react';
import './index.scss';
import axios from 'axios';
import { Spin, Input, Button } from 'antd';
import { 
    CloseCircleFilled,
    PictureOutlined,
    PlayCircleOutlined,
    // CloudUploadOutlined,
    // LoadingOutlined
} from '@ant-design/icons';
const { TextArea } = Input;

const wx = window.wx
const avatar = 'http://api.woaidakele.cn/public/uploads/cl.jpg'
// const host = 'http://api.woaidakele.cn/api'
const host = 'http://changlai.jiuweiyun.cn/api'
const state = 'cl1' // 久卫云科技
const id = 'wxd684a5cf4af0a810'
// const host = 'http://api.cl.jiuweiyun.cn/api'
// const state = 'cl1' // 大卫博士
// const id = 'wx60f7c1160c16cb78'
// const host = 'http://api.chagnlai.jiuweiyun.cn'
// const state = 'cl1' // 大卫博士DrDavid
// const id = 'wx5224793b7dc7f7b7'
const wxURL = 'https://open.weixin.qq.com/connect/oauth2/authorize'
const auth = () => window.location.href = `${wxURL}?appid=${id}&redirect_uri=${host}/${state}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`

export default class PageFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recordLong: 0,
            playing: false,
            recording: false,
            recordLocalId: '',
            // login: !(window.location.search.includes('code') && window.location.search.includes('state')),
            login: window.location.search.includes('code') && window.location.search.includes('state'),
            loading: false,
            value: '',
            imgList: [],
            history: [],
            newest: null
        }
        this.textarea = React.createRef()
    }
    async componentDidMount() {
        if (this.state.login) {
            this.textarea.current.focus()
            const { data: { data: { list: history } } } = await axios.get(`${host}/${state}/history`)
            this.setState({ history, newest: history.find(e => e.reply !== '') })
            axios.get(`${host}/${state}/wechat`).then(({ data }) => {
                console.log(data)
                wx.config(data)
                wx.ready(() => {
                    const config = {
                        title: `我是大卫博士品牌创始人：常来`,
                        desc: '如果你对我们的产品以及服务有什么意见或者建议，请在下方留言反馈给我们，帮助我们改进。',
                        link: `${host}/${state}`,
                        imgUrl: avatar
                    }
                    wx.updateAppMessageShareData(config)
                    wx.updateTimelineShareData(config)
                    wx.onMenuShareTimeline(config)
                    wx.onMenuShareAppMessage(config)
                    this.setState({ loading: false })
                })
                wx.error(() => {
                    alert('网络可能出了点问题，退出重新进入试试？')
                    this.setState({ loading: false })
                })
            })
        } else {
            auth()
        }
    }
    chooseImage() { // 点击选择图片
        this.setState({ loading: true })
        wx.chooseImage({
            success: ({ localIds }) =>  {
                this.setState({
                    imgList: [...this.state.imgList, ...localIds]
                })
            },
            complete: () => {
                this.setState({ loading: false })
            }
        })
    }
    delImg(index) { // 删除已选择图片
        this.state.imgList.splice(index, 1)
        this.setState({
            imgList: this.state.imgList
        })
    }    

    async submit() { // 点击提交反馈
        if (this.state.value.length === 0) {
            alert('反馈内容不能为空')
            return
        }
        this.setState({ loading: true })
        const value = this.state.value
        const imgList = []
        let voice = ''
        let voiceText = ''
        if (this.state.imgList.length) {
            for(let i = 0; i < this.state.imgList.length; i ++) {
                await new Promise(resolve => wx.uploadImage({
                    localId: this.state.imgList[i],
                    success: (res) => {
                        imgList.push(res.serverId)
                        resolve()
                    }
                }))
            }
        }
        axios.post(`${host}/${state}/submit`, { value, imgList, voice, voiceText }).then(async () => {
            const { data: { data: { list: history } } } = await axios.get(`${host}/${state}/history`)
            this.setState({ history, newest: history.find(e => e.reply !== '') })
            alert('提交成功，非常感谢您的反馈')
            this.textarea.current.setValue('')
            this.setState({
                value: [],
                imgList: [],
                loading: false
            })
        }).finally(() => this.setState({ loading: false }))
    }
    
    render() {
        return <div className="PageFeedback">
            {
                this.state.login ?
                <div className="content">
                    <Spin spinning={ this.state.loading } size="large">
                        <header>
                            <div className="top">
                                <div className="left">
                                    <img src={ avatar } alt="常来" />
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
                                <div className="textarea">
                                    <span>{ this.state.value.length }/500</span>
                                    <TextArea ref={this.textarea} placeholder="说点什么吧~" autoSize={true} maxLength={500} onChange={ ({ target: { value } }) => this.setState({ value }) } />
                                </div>
                                <div className="imgList">
                                    {
                                        this.state.imgList.map((url, index) => (<div className="imgItem" key={index}>
                                            <CloseCircleFilled onClick={() => this.delImg(index)} />
                                            <img src={url} alt={url} />
                                        </div>))
                                    }
                                </div>
                            </div>
                            <div className="submit">
                                <div className="choose">
                                    <div className="item" onClick={ () => this.chooseImage() }>
                                        <PictureOutlined />
                                        <span className="text">添加图片</span>
                                    </div>
                                </div>
                                <Button type="primary" onClick={() => this.submit()}>提交</Button>
                            </div>
                        </main>
                        {
                            this.state.newest && <section>
                                <div className="header">
                                    <div className="left">
                                    <img src={ avatar } alt="常来" />
                                        <span>{ this.state.newest.replyTime }</span>
                                    </div>
                                    <div className="right">最新回复</div>
                                </div>
                                <main>{ this.state.newest.reply }</main>
                            </section>
                        }
                        <footer>
                            <div className="title">反馈历史</div>
                            {
                                this.state.history.length ?
                                this.state.history.map((item, index) => (<div className="item" key={index}>
                                    <div className="text">{ item.feedback }</div>
                                    <div className="img">{
                                        item.img.length ?
                                        item.img.map((url, index) => (<img src={url} alt={url} key={index} />)) :
                                        ''
                                    }</div>
                                    <div className="footer">
                                        <div>
                                        {
                                            item.voice && <PlayCircleOutlined className="play" style={{ color: '#4BB5FF' }} onClick />
                                        }
                                        </div>
                                        <div className="info">
                                            <span className="time">{ item.time }</span>
                                            {
                                                item.reply.length ? <span className="reply">已回复</span> :  <span className="notReply">未回复</span>
                                            }
                                        </div>
                                    </div>
                                </div>)) :
                                <div className="noHis">暂无反馈历史</div>
                            }
                        </footer>
                    </Spin>
                </div> :
                <div className="login">
                    <Button type="primary" onClick={() => auth()}>登陆</Button>
                </div>
            }
        </div>
    }
}
