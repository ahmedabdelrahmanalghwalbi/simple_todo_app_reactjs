import React from "react";

const List = (props) => {
  const { items, deleteItems } = props;
  let length = items.length;
  const ListItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span className="name ">{item.name}</span>
          <span className="age">{item.age}</span>
          <span
            className="action icon"
            onClick={() => {
              deleteItems(item.id);
            }}
          >
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <div>There is no item to show</div>
  );

  return (
    <div className="listItems">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        <span className="action title">Action</span>
      </div>
      {ListItems}
    </div>
  );
};
export default List;
