import { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

/*const initialsong=[
    {
    id:1,
    title:"Be the one",
    artist:"Dua Lipa",
    played:false
    },
    {
      id:2,
      title:"Alejandro",
      artist:"Lady Gaga",
      played:false
      },
]*/

export default function Itemlist() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    const updatedItem = [...items, item];
    setItems(updatedItem);
  }
  function toggleChecked(track) {
    const toggleCheckedList = items.map(function (item) {
      if (item.id === track.id) {
        item.picked = !item.picked;
        return item;
      } else {
        return item;
      }
    });
    setItems(toggleCheckedList);
  }

  return (
    <>
      <ul>
        {items.map((item) => (
          <ToDoList key={item.id} item={item} newItem={toggleChecked} />
        ))}
        <ToDoForm addItem={addItem} />
      </ul>
    </>
  );
}
