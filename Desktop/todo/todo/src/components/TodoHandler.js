import MobilteFooter from "./MobilteFooter"

const TodoHandler = ({color, clearCompleted, todo, filterHandler}) => {
    
  return (
    <div className={color === 'light' ? 'main-container' : 'main-container1'}>
       <h4 className="main-container-title">{todo.length > 0 ? todo.length +'Items left' : "Empty"}</h4>
       <div className="container">
         <h5 onClick={()=>filterHandler('all')}>All</h5>
         <h5 onClick={()=>filterHandler('completed')}>Completed</h5>
         <h5 onClick={()=>filterHandler('active')}>Active</h5>
       </div>
         <h4 className="main-container-foo" onClick={()=>clearCompleted()}>Clear Completed</h4>

    </div>
  )
}

export default TodoHandler