


function ItemList({items}) {

  return (
    <ul className="item-list">
      {items.map((item) => {
        return (
          <Item
            key={item.label}
            item={item}
          />
        );
      })}
    </ul>
  )
}
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
        />{" "}
        {item.label}
      </label>

      <button >❌</button>
    </li>
  );
}

export default ItemList