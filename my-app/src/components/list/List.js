import React,{Component} from 'react';
import {ListWrap,Title,Lunbo,Actire} from './ListStyle';
import { Carousel } from 'antd';
import{connect} from 'react-redux'
import Head from './../head/Head'
class Foot extends Component{

    render(){
        return(
            <div>
                <Head/>
                <ListWrap>
                   <Title>
                       <h2>青竹良品原创生活类电商品牌</h2>
                   </Title>
                    <Lunbo>
                        <Carousel autoplay>
                            <div>
                                <h3><img src="//asset.ibanquan.com/s/30611/727/index_slide_2?v=1568268246_1572510848" alt=""/></h3>
                            </div>
                            <div>
                                <h3><img src="//asset.ibanquan.com/s/30611/727/index_slide_1?v=1568268246_1572510848" alt=""/></h3>
                            </div>
                            <div>
                                <h3><img src="//asset.ibanquan.com/s/30611/727/index_slide_3?v=1568268246_1572510848" alt=""/></h3>
                            </div>
                            <div>
                                <h3><img src="//asset.ibanquan.com/s/30611/727/index_slide_4?v=1568268246_1572510848" alt=""/></h3>
                            </div>
                        </Carousel>,
                    </Lunbo>
                    <Actire>
                        <p>青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的
                            商品，全线采用 天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活</p>
                    </Actire>
                </ListWrap>

            </div>

        )
    }
}
const mapState = (state) => ({

});
export default connect (mapState,null)(Foot)