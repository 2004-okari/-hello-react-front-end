import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchMessage from "./redux/reducers/messageSlice";

function Greeting() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.message);
  console.log(message);
  const status = useSelector((state) => state.message.status);
  console.log(status);


  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  let content;

  if (status === 'loading') {
    content = 'Loading...';
  } else if (status === 'succeeded') {
    content = message.content;
  } else if (status === 'failed') {
    content = 'Error loading message.';
  }

  return (
  <>
  <div>{content}</div>
  <h1>Hello, World!</h1>
  </>)
}

export default Greeting;
