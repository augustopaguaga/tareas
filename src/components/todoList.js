import { useState } from "react";
import Todo from "./todo";

export default function TodoList() {
  const [title, setTitle] = useState("");
  const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const nuevo = {
      id: Math.ceil(Math.random() * 2000),
      title: title,
      completed: false,
    };

    setItems([nuevo, ...items]);
    setTitle("");
  }

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }
  function handleUpdate(itemId, title) {
    const lista = [...items];
    const edit = lista.find((item) => item.id === itemId);
    edit.title = title;
    setItems(lista);
  }
  function handleDelete(itemId) {
    const list = [...items];
    const newList = list.filter((item) => item.id !== itemId);
    setItems(newList);
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm">
        <input className="todoInput" value={title} onChange={handleChange} />
        <input
          type="submit"
          value="Crear Tarea"
          className="buttonCreate"
          onClick={handleSubmit}
        ></input>
      </form>
      <div className="containerTodo">
        {items.map((item) => (
          <Todo
            key={item.id}
            item={item}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
