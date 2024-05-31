import { useEffect, useState } from "react";

const UseEffectExample = () => {

  const [count, setCount] = useState(0);


//UseEffect///In React the useEffect hook is used to mange side effects in functional components
//fetching data, manually update DOM, setting timers


//useEffect takes in a callback function and takes in two arguments
useEffect(() => {

//This is the effect function. Code will run after every render.

console.log('This count is');

//optional clean up function. Code here runs before the component is unmounted or before the effect runs again.
// return () => {
//     console.log('clean up funcion');
    
// }

}, [/*dependency array */]);

///what ever in in our [] is our dependency. It will make our useEffect fire every time this changes.
//If you privide an empty array[], the effect will only run once after the inital render

///You can have multiple useEffects



useEffect(() => {
    console.log('This will re-run everytime our dependency has chaged The count is ', count);
    
  

},[])


useEffect(() => {
  console.log('Subcribe inside our useEffect');
  

  return () => {
    console.log('unsubcribe from our clean up function',count);
    
  }
}, [count])




  ///handle increment
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //hanlde decrement
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1 className="text-center">UseEffect Example1</h1>
      <div className="row justify-content-center">
        <div className="col-6 d-flex flex-column align-items-center">
          <p>Count: {count}</p>

          <div>
            <button
              className="btn btn-outline-primary mx-3 m-2"
              onClick={handleIncrement}
            >
              Increment
            </button>
            <button
              className="btn btn-outline-secondary mx-3 m-2"
              onClick={handleDecrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffectExample;
