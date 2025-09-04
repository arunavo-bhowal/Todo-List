import React from 'react'
import { nanoid } from 'nanoid';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
export const Create = (props) => {
    const todos = props.todos;
    const setTodos = props.setTodos;
    
    const { register, handleSubmit, reset, formState:{errors} } = useForm();
    
    const SubmitHandler = (data) => {
        data.isCompleted = false;
        data.id = nanoid();

        const copyTodos = [...todos]
        copyTodos.push(data);
        setTodos(copyTodos);
        toast.success("Todo Added Successfully!")
        reset();
      };
      

  return (
    <div className="bg-white shadow-xl rounded-2xl w-1/2 h-full p-8 flex flex-col items-center border border-[#91ADC8]/30">
        <h1 className="text-3xl font-extrabold text-[#647FBC] mb-8 tracking-tight text-shadow-xs">
          Set <span className='text-[#AED6CF]'>Reminders</span> For Tasks
        </h1>

        <form onSubmit={handleSubmit(SubmitHandler)} className="flex flex-col gap-5 w-full">
            <input 
                {...register("title",{required:"This field is required"})}
                type="text" 
                placeholder="Enter Task" 
                className="w-full px-4 py-3 border border-[#91ADC8] rounded-xl focus:ring-2 focus:ring-[#647FBC] focus:border-[#647FBC] outline-none transition text-gray-800 placeholder-gray-400"
            />
            
            {/*errors && errors.title && errors.title.message && <small className='font-thin text-red-400'>{errors.title.message}</small>*/}
            <small className='font-light text-red-500'>{errors?.title?.message}</small>
            
            <button 
              className="w-full py-3 bg-[#647FBC] text-white rounded-xl font-semibold hover:bg-[#91ADC8] active:scale-[0.98] transition">
              Add Task
            </button>
        </form>
    </div>
  )
}
