import React, { useState, useEffect } from "react";
import AddedTodo from "./AddedTodo";
import TodoHandler from "./TodoHandler";
import MobilteFooter from "./MobilteFooter";

const NewTodo = ({ theme }) => {
  const [todo, setTodos] = useState([
    {
      id: '_' + Math.random().toString(36).substr(2, 9),
      name: "Learn React",
      status: true,
    },
    {
      id: '_' + Math.random().toString(36).substr(2, 9),
      name: "Learn Flutter",
      status: true,
    },
  ]);

  const [color, setColor] = useState("");
  const [todoInput, setTodoInput] = useState("");
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todo);
  const [showFilters, setShowFilters] = useState(false);

  const filterHandler = (status) => {
    if (status === "completed") {
      setShowFilters(true);
      setFilteredTodos(todo.filter((item) => item.status === false));
      setStatus("completed");
    } else if (status === "active") {
      setShowFilters(true);
      setFilteredTodos(todo.filter((item) => item.status === true));
      setStatus("active");
    } else {
      setShowFilters(false);
      setTodos(todo);
      setStatus("all");
    }
  };


  useEffect(() => {
    if (theme === "light") {
      setColor("light");
    } else {
      setColor("dark");
    }
  }, [theme]);

  const deleteTodo = (id) => {
    let newTodo = todo.filter((item) => item.id !== id);
    setTodos(newTodo);
    setFilteredTodos(newTodo);
  };

  const clearCompleted = (status) => {
    let newTodo = filteredTodos.filter(
      (todo) => filteredTodos.status !== status
    );
    setTodos(newTodo);
    setFilteredTodos(newTodo);
  };

  //add new items
  const handleSubmit = (e) => {
    e.preventDefault();
    if(todoInput){
    setTodos([
      ...todo,
      {
        id: '_' + Math.random().toString(36).substr(2, 9),
        name: todoInput,
        status: true,
      },
    ]);
  }
    setTodoInput("");
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <span className='circle'></span>
          <input
            type='text'
            placeholder='Create a new todo'
            className={color === "light" ? "input1" : "input2"}
            onChange={(e) => setTodoInput(e.target.value)}
            value={todoInput}
          />
        </div>
      </form>
      
      {/* ////Change filteredTodos with todo///// */}
      {/* თუ ფილტრებში ჯერ არ გადავსულვართ ანუ showFilters = false და დარენდერდება თუდუები todo
      
      მასივიდან.
      */}
      {!showFilters &&
        todo.map((item) => {
          return (
            <div key={item.id}>
              <AddedTodo
                item={item}
                color={color}
                deleteTodo={deleteTodo}
                todo={todo}
                setTodos={setTodos}
              />
            </div>
          );
        })}
   
      {showFilters &&
        filteredTodos.map((item) => {
          return (
            <div>
              <AddedTodo
                item={item}
                color={color}
                deleteTodo={deleteTodo}
                todo={todo}
                setTodos={setTodos}
                setShowFilters={setShowFilters}
                showFilters={showFilters}
              />
            </div>
          );
        })}
      <TodoHandler
        clearCompleted={clearCompleted}
        todo={todo}
        filteredTodos={filteredTodos}
        setShowFilters={setShowFilters}
        showFilters={showFilters}
        filterHandler={filterHandler}
        color={color}
      />
     <MobilteFooter filterHandler={filterHandler} color={color}/>

    </div>
  );
};

export default NewTodo;