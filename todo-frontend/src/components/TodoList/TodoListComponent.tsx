import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import ListComponent from "../List/ListComponent";

const TodoListComponent = () => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([] as any);

  const itemEvent = (event: any) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setNewItem((prevValue: any) => {
      return [...prevValue, item];
    });
    setItem("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add item"
            onChange={itemEvent}
          />
          <Button onClick={listOfItems}>
            <AddBoxIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((val: any, index: any) => {
              return <ListComponent key={index} text={val} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default TodoListComponent;
