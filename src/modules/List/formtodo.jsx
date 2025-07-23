const formTodo = ({todos, setTodos}) => {
    function handleSubmit(e){

        e.preventDefault()
        
        const data = {
          id: todos[todos.length - 1]?.id ? todos[todos.length - 1].id + 1 : 1,
          title: e.target.todo.value,
          isComplated: false
        } 
        e.target.reset()
        setTodos([... todos, data])
      }
      
    return(
        <div className="">
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-xl w-[380px] mx-auto flex justify-between items-center">
                <input maxLength={10} className="outline-none w-[78%] border-[1.5px] border-[#3AAF9F] shadow-md focus:shadow-[#3AAF9F] p-2 rounded-md" autoComplete="off" required type="text" placeholder="Enter your todo" name="todo" />
                <button className="w-[20%] py-2 rounded-md cursor-pointer bg-green-800 text-white " type="submit">Create</button>
            </form>
        </div>
    )
}

export default formTodo