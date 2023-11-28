import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchData from "./redux/reducers/greetingSlice";

function Greeting() {
  const greetingMsg = useSelector((state) => state.greeting.greetings);
  console.log(greetingMsg);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <h1>Greeting</h1>
      <div>{greetingMsg}</div>
    </>
  );
}

export default Greeting;
