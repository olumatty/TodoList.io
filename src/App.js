import Board from "./COMPONENTS/Board";
import Input from "./COMPONENTS/Input";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);

  return (
    <div className="px-12">
      <div className="flex flex-col items-center justify py-8 gap-4">
        <h1 className="text-xl font-semibold"> My ToDo Board</h1>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
        <div className="flex flex-col gap-4 sm:grid  sm:grid-cols-3 px-4 sm:px-8 md:px-10 lg:px-12">
          {taskList.map((task, index) => 
            <Board
              key={index}
              index={index}
              task={task}
              taskList = {taskList}
              setTaskList ={setTaskList}
             />
          )}
        </div>
      
    </div>
  );
}

export default App;
