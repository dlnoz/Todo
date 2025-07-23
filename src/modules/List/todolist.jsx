const listTodo = ({todos, setTodos}) => {

    function handleDelete(ind){
        todos.splice(ind, 1)
        setTodos([...todos])
      }
      function handleEdit(id){
       let findbj = todos.find(item => item.id == id)
       let newValue = prompt(findbj.title)
       newValue = newValue.trim().slice(0, 10);
       findbj.title = newValue
       setTodos([...todos])
      }
      
  return (
    <div>
      <ul className="flex justify-between p-20 items-center flex-wrap  w-full gap-[20px]">
        {todos.map((item, index) => (
          <li key={item.id} className="w-[300px]  p-3 rounded-md border-[#FCDCCF] border-[2px] flex justify-between ">
            <div className="flex items-center gap-1">
              <span className="text-[18px] font-medium">#{index +1}</span>
              <strong className="text-[18px] font-medium">{item.title}</strong>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() =>handleEdit(item.id)} className="bg-[#6AA2BB] cursor-pointer text-[15px] font-medium text-white py-2 px-4 rounded-md">Edit</button>
              <button onClick={() => handleDelete(index)} className="bg-[#87BDA4] cursor-pointer text-[15px] font-medium text-white py-2 px-4 rounded-md">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default listTodo 