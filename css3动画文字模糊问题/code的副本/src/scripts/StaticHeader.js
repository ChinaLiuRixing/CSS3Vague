import React, {Component} from "react";

class StaticHeader extends Component{
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
            <div className="static-header">
                {/* top */}
                <div className="top">
                    <div className="quit">
                        <img src="./public/quit.png"/>
                    </div>
                    <div className="search">
                        <div className="left">
                            <img src="./public/position.png" alt=""/>
                            厦门
                        </div>
                        <div className="right">
                            <input type="text" placeholder="景点/商圈/客栈名"/>
                        </div>
                    </div>
                </div>
                {/* bottom */}
                <div className="bottom">
                    <span className="start text1">入住</span>
                    <span className="text2">02-26</span>
                    <span className="text2">今天</span>
                    <div className="line"></div>
                    <span className="text1">离店</span>
                    <span className="text2">02-27</span>
                    <span className="text2">明天</span>
                    <img src="./public/right.png" />
                </div>
            </div>
        )
    }
}
export default StaticHeader;