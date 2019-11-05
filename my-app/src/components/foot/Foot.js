import React,{Component} from 'react';
import {FootWrap,Logo,FootLeft,FootCenter,FootRight,List} from './FootStyle';
class Foot extends Component{
    state={
        list:[
            {one:'关于我们',two:'支付方式',three:'相关服务'},
            {one:'关于我们',two:'支付方式',three:'相关服务'},
            {one:'关于我们',two:'支付方式',three:'相关服务'},
            {one:'关于我们',two:'支付方式',three:'相关服务'},
            {one:'关于我们',two:'支付方式',three:'相关服务'},

        ]
    };
render(){
    return(
        <div>
            <FootWrap>
                <FootLeft>
                    <Logo>
                        <img src="" alt=""/>

                    </Logo>
                    <p>
                        使用了粉碎高品质的天草陶石后提炼而成的土，制作了泛着淡青色的白瓷。用餐时可以记住食品名称、体会新鲜口味
                        ···可对颜色和口味、气味、口感逐个品味，从中感受用餐的乐趣，同时还可自然而然地了解日本饮食文化
                    </p>
                </FootLeft>
                <FootCenter>
                    <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=""/>
                    <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848"alt=""/>
                </FootCenter>
                <FootRight >
                    {
                        this.state.list.map((item,index)=>{
                            return(
                        <List key={index}>
                                <span>{item.one}</span>
                                <span>{item.two}</span>
                            <span>{item.three}</span>
                        </List>
                            )
                        })
                    }

                </FootRight>
        </FootWrap>

        </div>

    )
}
}
export default (Foot)


