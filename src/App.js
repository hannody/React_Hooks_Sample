import React, { useState } from 'react';

function App(){
  let [c, setC] = useState(1);

  return(
      <div>
        <p>Counter: {c}</p>
        <button onClick={()=> setC(c+1)}>+</button>
      </div>
  );
}

export default App;
