export const  history = [
    {
        time: '2020-04.18 08:00',
        feedback: '这是我的建议这是我的建议这是我的建议这 是我的建议`~`这是我的建议这是我的建议这是我的建议这 是我的建议`~`这是我的建议这是我的建议这是我的建议这 是我的建议`~`这是我的建议这是我的建议这是我的建议这 是我的建议`~`这是我的建议这是我的建议这是我的建议这 是我的建议`~`',
        img: [
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg'
        ],
        // voice: 'https://www.w3school.com.cn/i/horse.ogg',
        voice: '',
        reply: '',
        replyTime: '2020-04.18 08:00'
    },
    {
        time: '2020-04.18 08:00',
        feedback: '这是我的建议这是我的建议这是我的建议这 是我的建议`~`',
        img: [
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg'
        ],
        voice: '',
        reply: '您好，您的建议我们已经收到，感谢您 的反馈。1',
        replyTime: '2020-04.18 08:00'
    },
    {
        time: '2020-04.18 08:00',
        feedback: '这是我的建议这是我的建议这是我的建议这 是我的建议`~`',
        img: [
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=139954460,3451817723&fm=26&gp=0.jpg'
        ],
        voice: '',
        reply: '您好，您的建议我们已经收到，感谢您 的反馈。2',
        replyTime: '2020-04.18 08:00'
    },
]

    // handlerRecord() { // 点击录音按钮
    //     if (this.state.recording) {
    //         clearInterval(this.timer)
    //         this.setState({
    //             recordLocalId: '1213123'
    //         })
    //         wx.stopRecord({
    //             success: ({ localId }) => {
    //                 this.setState({
    //                     recordLocalId: localId
    //                 })
    //             }
    //         })
    //         this.setState({ recording: !this.state.recording })
    //     } else {
    //         wx.startRecord()
    //         if (this.state.recordLong === 0) {
    //             this.timer = setInterval(() => {
    //                 this.setState({
    //                     recordLong: this.state.recordLong + 1
    //                 })
    //                 if (this.state.recordLong >= 10) {
    //                     this.handlerRecord()
    //                 }
    //             }, 987)
    //             this.setState({ recording: !this.state.recording })
    //         }
    //     }
    // }

    // delRecord() { // 删除录音
    //     this.setState({
    //         recordLong: 0,
    //         playing: false,
    //         recordLocalId: ''
    //     })
    // }

    // handlerPlay() { // 播放/暂停 录音
    //     if (this.state.playing) {
    //         wx.pauseVoice({ localId: this.state.recordLocalId })
    //     } else {
    //         wx.playVoice({ localId: this.state.recordLocalId })
    //         wx.onVoicePlayEnd({
    //             success: () => {
    //                 this.setState({
    //                     playing: false
    //                 })
    //             }
    //         })
    //     }
    //     this.setState({
    //         playing: !this.state.playing
    //     })
    // }

            // if (this.state.recordLocalId) {
        //     await new Promise(resolve => {
        //         wx.uploadVoice({
        //             localId: this.state.recordLocalId,
        //             success: ({ serverId }) => {
        //                 voice = serverId
        //                 resolve()
        //             }
        //         })
        //     })
        //     await new Promise(resolve => {
        //         wx.translateVoice({
        //             localId: this.state.recordLocalId,
        //             success: ({ translateResult }) => {
        //                 voiceText = translateResult
        //                 resolve()
        //             }
        //         })
        //     })
        // }

        {/* {
            this.state.recordLocalId && <Button type="danger" className="record" size="small" onClick={() => this.delRecord()}>删除</Button>
        }
        {
            this.state.recordLocalId && <Button type="ghost" className="record" size="small" onClick={() => this.handlerPlay()}>{
                this.state.playing ? '暂停' : '播放'
            }</Button>
        } */}

                                    {/* <div className="item" onClick={ () => this.handlerRecord() }>
                                        { 
                                            this.state.recording ? <LoadingOutlined /> : <CloudUploadOutlined />
                                        }
                                        <span className="text right">{
                                            this.state.recording ?
                                            '录音中 ' + this.state.recordLong + ' 秒 (点击停止)' :
                                            this.state.recordLocalId.length === 0 ?
                                            '点击录音' :
                                            '已录音' + this.state.recordLong + ' 秒'
                                        }</span>
                                    </div> */}