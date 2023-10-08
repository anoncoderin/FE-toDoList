import { useState } from "react";
import { nanoid } from "nanoid";

export default function ToDoForm(props) {
  const [title, setTitle] = useState("");

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      title: title,
      id: nanoid(),
      played: false
    };
    props.addItem(newItem);
    setTitle("");
  }

  return (
    <>
      <div className="edit">
        <h4>Make your Todo list</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              {" "}
              <input
                type="text"
                placeholder="add items here..."
                onChange={handleChangeTitle}
                value={title}
              ></input>
            </label>
          </div>
          <button className="button_add" type="submit">
            add
          </button>
        </form>
      </div>
    </>
  );
}
