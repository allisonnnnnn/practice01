import React from "react"
import {connect} from "react-redux"


class ComA extends React.Component {
    // 没有事件处理函数，来定义事件处理函数handleClick
   handleClick = () => {
       console.log("ComA",this.props)
    //    调用this.props.addClick，从而调用addClick里的dispatch
    this.props.addClick()
    //    发送action去reducer

   }

    render() { 
        // button 绑定一个点击事件onClick，事件处理函数叫handleClick
        return <button onClick={this.handleClick}>+</button>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addClick: () => {
            dispatch({
                type:"add_one"
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(ComA)