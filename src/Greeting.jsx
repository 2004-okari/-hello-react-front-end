import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from './redux/reducers/greetingSlice';
const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.value.message);
  console.log("Greeting: ", greeting);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div>
      <p>Greetings from around the world!</p>
      <h3>{greeting}</h3>
    </div>
  );
};

export default Greeting;