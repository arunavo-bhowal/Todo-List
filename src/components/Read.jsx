import React, { Fragment } from 'react';
import { toast } from 'react-toastify';

export const Read = (props) => {
    const todos = props.todos;
    const setTodos = props.setTodos;

    const DeleteHandler = (id) => {
      const filterdtodo = todos.filter(todo => todo.id !== id);
      setTodos(filterdtodo);
      toast.error("Todo Deleted!")
    };

    const rendertodos = todos.map((todo) => {
        return <li 
          key={todo.id} 
          className="flex justify-between items-center bg-[#FAFDD6] px-4 py-3 rounded-xl mb-3 shadow-sm hover:bg-[#AED6CF]/50 transition"
        >
          <span className="text-gray-800 font-medium">{todo.title}</span> 
          <button 
            onClick={() => DeleteHandler(todo.id)} 
            className="text-[#647FBC] cursor-pointer font-semibold hover:text-red-600 transition"
          >
            Delete
          </button>
        </li>
    })

  return (
    <Fragment>
        <div className="bg-white shadow-xl rounded-2xl w-1/2 h-full p-8 flex flex-col border border-[#91ADC8]/30">
          <h1 className="text-3xl font-extrabold text-[#647FBC] mb-8 text-center tracking-tight text-shadow-xs">
            <span className='text-[#91ADC8]'>Pending</span> Todos
          </h1>
          <ol className="list-decimal list-inside overflow-y-auto pr-2">{rendertodos}</ol>
        </div>
    </Fragment>
  )
}
