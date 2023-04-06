import { useState } from "react";

function HandleEdit({ title, write, update }) {
  return (
    <div>
      <input type="text" onChange={write} value={title} />
      <button onClick={update}>Update</button>
    </div>
  );
}

export default function Todo({ item, handleUpdate, handleDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(item.title);

  function write(e) {
    setTitle(e.target.value);
  }

  function update() {
    const itemId = item.id;
    handleUpdate(itemId, title);
    setIsEdit(false);
  }
  function delet() {
    const itemId = item.id;
    handleDelete(itemId);
  }

  return (
    <div>
      {isEdit ? (
        <HandleEdit title={title} write={write} update={update} />
      ) : (
        <div>
          <span>{item.title}</span>
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <button onClick={delet}>Delete</button>
        </div>
      )}
    </div>
  );
}
