import todo from "../icons/to-do-list.png";
import "../styles.css";

export default function Songs(props) {
  const item = props.item;

  function deleteList(e) {
    const remove = e.target;
    if (remove.tagName === "SPAN" && remove.textContent === "remove") {
      e.currentTarget.remove();
    }
  }

  function toggleCheck() {
    props.newItem(item);
  }
  return (
    <>
      <li className="item" onClick={deleteList}>
        <div className="item-details">
          <img src={todo} alt="" />
          <div>
            <p>
              <span>
                {item.picked ? <del>{item.title}</del> : item.title}
                <input
                  type="checkbox"
                  onChange={toggleCheck}
                  checked={item.played}
                />
              </span>
            </p>
          </div>
        </div>
        <button className="button_remove">
          <span>remove</span>
        </button>
      </li>
    </>
  );
}
