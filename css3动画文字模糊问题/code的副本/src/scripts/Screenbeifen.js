import React, {Component} from "react";

class Screen extends Component{
    constructor(props){
        super(props);
        this.state={
            // 在这里放数据
            // hover:false
        };
        // 在这里定义方法
        this.screen=this.screen.bind(this);
    }
    // 方法
    screen(){
        this.props.toggle(true)
    }
   
    render(){
        return ( 
                <div className="screen">
                    <div className="item">
                        入住类型
                        <img src="./public/bottom.png" alt=""/>
                    </div>
                    <div className="item" onClick={this.screen}>
                        景点商圈
                        <img src="./public/bottom.png" alt=""/>
                    </div>
                    <div className="item">
                        排序
                        <img src="./public/bottom.png" alt=""/>
                    </div>
                    <div className="item">
                        筛选
                        <img src="./public/bottom.png" alt=""/>
                    </div>
                </div>
        )
    }
}
export default Screen;