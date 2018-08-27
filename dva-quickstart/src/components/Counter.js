import React from 'react';
import {connect} from 'dva';
import {  Link } from 'dva/router'

const Counter = (props) => {
  return (
    <div>
      <h1>{props.count.count02}</h1>
      <button onClick={()=>{props.dispatch({type:'counter01/add66'})}}>+</button>
      <button onClick={()=>{props.dispatch({type:'counter01/newAdd',name:'wang'})}}>异步+</button>
      <Link to='/'>go home</Link>

    </div>
  )
}

Counter.propTypes = {

}
const mapStateToProps=(state)=>{
  return{
    count:state.counter01
  }
}

export default  connect(mapStateToProps)(Counter);
