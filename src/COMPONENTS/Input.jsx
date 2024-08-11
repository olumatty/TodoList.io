import { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const addList = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };
  return (
    <>
      <div>
        <form className="flex flex-row items-center gap-3">
          <input
            className="border rounded-lg py-1.5 px-2.5   text-lg"
            type="text"
            value={input}
            placeholder="Add a task"
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            className="bg-violet-400 text-white py-2 px-3.5 rounded-lg
                    font-semibold hover:opacity-70"
            onClick={addList}
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Input;
