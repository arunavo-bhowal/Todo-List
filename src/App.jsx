import { useState } from "react";
import { Create } from "./components/Create";
import { Read } from "./components/Read";

const App = () => { 
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-r from-[#91ADC8] via-[#AED6CF] to-[#FAFDD6] p-6">
      <div className="flex gap-8 w-full max-w-6xl h-[90%]">
        <Create todos={todos} setTodos={setTodos}/>
        <Read todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
