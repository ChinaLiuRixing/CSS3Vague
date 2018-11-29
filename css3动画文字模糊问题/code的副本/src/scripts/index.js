import React from 'react';
import ReactDOM from 'react-dom';
import StaticHeader from './StaticHeader';
import ListItem from './ListItem';
import Screen from './Screen';
import Jump from './Jump';

const ajax = require("./ajax").ajax;

  
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            toggletype:false
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        ajax({
            url: 'http://localhost:80/code/public/data.json',
            type: 'get',
            data: {},
            success(data) {
              console.log(data)
            //   这里转换成json
            //   把所有的data都写完回头再处理动画问题
            }
          });
      }
    toggle(type){
        alert(type)
        this.setState({
            toggletype:false
        })
    }
    render() {
        return (
            <div>
                <StaticHeader></StaticHeader>
                <Screen toggle={this.toggle}></Screen>
                <div className={this.toggletype?"jump togglefalse":"jump toggletrue"}>
                {/* <div className="jump"> */}
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
                <div className="content">
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </div>
                {/* 流程设计
                        1目标设置
                        2模块划分
                        3技术试验
                        4试验总结
                        5项目开发
                        6项目总结
                    1.目标设置
                        基本部分
                            完成静态页面还原
                            弹框toggle
                            从数据库取数据，数据填充到页面
                        高级部分
                            toggle动画
                            阴影收起
                            弹框显示时，背面不会滚动
                            筛选功能
                            多端适配
                    2.模块划分
                        横纵两方向
                            纵向：数据层、方法层、展示层、结构层
                            横向：
                                静态头部
                                筛选
                                items
                    3.技术试验
                        用bootstrap做多端适配
                        先用json文件做为数据源、以后再发展成mongodb或者mysql
                        设置margin-top会传递到父元素头上：display: inline-block;
                        垂直居中：flex
                        去除input text默认样式：border：none；outline: none;父元素给overflow：hidden
                        css3动画导致的问题:文字模糊 触发失败问题 
                    4.结构开发
                        引入reset.css

                */}
            </div>
        )
    }
}

const render = () => ReactDOM.render(
    <App/>, document.getElementById('app')
);

render();

// hot-reload
if (module.hot) {
    module.hot.accept();
}
