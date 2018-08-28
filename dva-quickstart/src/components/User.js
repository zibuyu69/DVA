import React from "react";
import { connect } from "dva";

const User = props => {
  console.log(props.loading);
  const {  error, user } = props.user;
  let isFetching=props.loading.effects['user/fetch'];

  let data;
  if (error) {
    data = error;
  } else if (isFetching) {
    data = "Loading..."
  } else {
    data = user && user.data[0].name
  }
  return (
    <div>
       <h1>{ data }</h1>
      <button onClick={()=>{props.dispatch({type:'user/fetch'})}} >异步开始</button>
      <button onClick={()=>{props.dispatch({type:'user/fetch/start'})}} >同步开始</button>

    </div>
  );
};

User.propTypes = {};
const mapStateToProps = state => {
  return {
    user: state.user,
    loading:state.loading
  };
};

export default connect(mapStateToProps)(User);
