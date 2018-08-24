import React from 'react';
import Counter from '../components/Counter';

const CounterPage = (props) => {
  return (
    <div>
      <p>Counter</p>
      
      <Counter />
    </div>
  )
}

Counter.propTypes = {

}

export default CounterPage;
