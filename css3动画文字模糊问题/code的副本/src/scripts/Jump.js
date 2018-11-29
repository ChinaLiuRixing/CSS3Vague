import React, {Component} from "react";

class Jump extends Component{
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
            <div className="jump">
                <div className="top">
                    <div className="left">
                        <div className="item active"><div className="circle"></div>热门位置</div>
                        <div className="item"><div className="circle"></div>热门位置</div>
                        <div className="item "><div className="circle"></div>热门位置</div>
                        <div className="item "><div className="circle"></div>热门位置</div>
                        <div className="item "><div className="circle"></div>热门位置</div>
                        <div className="item "><div className="circle"></div>热门位置</div>
                        <div className="item "><div className="circle"></div>热门位置</div>
                    </div>
                    <div className="right">
                        <div className="item">不限制</div>
                        <div className="item active"><label><input type="checkbox"/>鼓浪屿风景区</label></div>
                        <div className="item active"><label><input type="checkbox"/>鼓浪屿风景区</label></div>
                        <div className="item active"><label><input type="checkbox"/>鼓浪屿风景区</label></div>
                        <div className="item"><label><input type="checkbox"/>鼓浪屿风景区</label></div>
                        <div className="item"><label><input type="checkbox"/>鼓浪屿风景区</label></div>
                        <div className="item"><label><input type="checkbox"/>鼓浪屿风景区</label></div>
                    </div>
                </div>
                <div className="btn">
                    <button type="button">确定</button>
                </div>
            </div>
        )
    }
}
export default Jump;