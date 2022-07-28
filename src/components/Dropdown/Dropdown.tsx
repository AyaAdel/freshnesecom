import { useState } from 'react';
import ArrowDown from 'assets/chevron-down.svg';

import './Dropdown.css';

type DropdownProps = {
  defaultSelected: string;
  list: string[];
  onSelect?: (selected: string) => void;
};

export default function Dropdown({
  defaultSelected,
  list,
  onSelect,
}: DropdownProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(defaultSelected);

  const toggleList = () => setIsVisible(!isVisible);

  const changeSelected = (selectedItem: string) => {
    setSelected(selectedItem);
    setIsVisible(false);
    onSelect && onSelect(selectedItem);
  };

  return (
    <div className="dropdown-list" data-testid="dropdown-list">
      <div className="dropdown-list__list__selected" onClick={toggleList}>
        <span data-testid="dropdown-list-selected">{selected}</span>
        <img src={ArrowDown} />
      </div>
      {isVisible && (
        <div className="dropdown-list__items">
          {list &&
            list.map((item: string, index: number) => (
              <span key={index} onClick={() => changeSelected(item)}>
                {item}
              </span>
            ))}
        </div>
      )}
    </div>
  );
}
