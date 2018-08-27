import { delay } from 'dva/saga';

export default {
  namespace: "counter01",
  state: {
    count02: 10
  },
  reducers: {
    add66(state, action) {
      return { count02: state.count02 + 1 };
    }
  },
  effects: {
    *newAdd(payload, { call, put,select }) {  // eslint-disable-line
      const counter010 =yield select(state => state.counter01)
      console.log(counter010);
      yield call(delay, 1000);
      yield put({ type: 'add66' },);
    },
  },
  subscriptions:{
    onClick({dispatch}){
      document.addEventListener('click',()=>{
        dispatch({type:'add66'});
      })
    },
    setuHistory({dispatch,history}){
      history.listen((location)=>{
        if(location.pathname==='/counter'){
          dispatch({type:'add66'})
          dispatch({type:'newAdd'})

        }
      })
    }
  }
};
