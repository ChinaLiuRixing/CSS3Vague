import React, {Component} from "react";

class Componentlrx extends Component{
    constructor(props){
        super(props);
        this.state={
            // 在这里放数据
            // hover:false
        };
        // 在这里定义方法
        // this.delete=this.delete.bind(this);
    }
    // 方法
    // changHandle(){
    //     let index = this.props.index;
    //     this.props.changeStateHandle(index)
    // }
   
    render(){
        return ( 
            <div className="listitem">
                <div className="top">
                    <img src="./public/item.png" className="hotel"/>
                    <img src="./public/lv.jpg" className="head"/>
                </div>
                <div className="bottom">
                    <div className="title">厦门鼓浪屿浅夏旅馆</div>
                    <div className="desc">
                        <span className="score">4.8分</span>
                        <span className="text">1428条评论</span>
                        <span className="text">距海底世界331米</span>
                    </div>
                    <div className="priceContainer">
                        <span className="price">￥444</span>
                        <span className="text">起</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Componentlrx;