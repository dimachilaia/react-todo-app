import crossImg from "../images/icon-cross.svg";

const AddedTodo = ({ item, color, deleteTodo, todo, setTodos }) => {

  const clickHandler = (id) => {
    setTodos(
      todo.map((todoitem) => {
        if (todoitem.id === id) {
          todoitem.status = !todoitem.status;
        }
        return todoitem;
      })
    );
  };

  return (
    <div className={color === "light" ? "checker" : "checker1"}>
      <span
        className={`checkbox ${!item.status && "checkbox-checked"}`}
        onClick={() => clickHandler(item.id)}></span>
      <div
        className={`${
          !item.status ? "item-name-checked" : "item-name-unchecked"
        }`}>
        {item.name}
        <img
          src={crossImg}
          alt='crossImg'
          onClick={() => deleteTodo(item.id)}
        />
      </div>
    </div>
  );
};

export default AddedTodo;