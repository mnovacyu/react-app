// Props vs State
// Props: input passed to a component. similar to function args, immutable
// State: data managed by a component, similar to local variables, mutable

import { useState } from "react";

// { items: [], heading: string }
// Interface can define the shape or interface of an object. Used to pass data to components
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p> No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
