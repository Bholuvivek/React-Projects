# Swap Two List

This React application allows you to swap items between two lists.

## Functionality

- There are two lists displayed on the screen.
- Each list consists of items, represented as checkboxes followed by their titles.
- You can toggle the checkboxes to mark items.
- When you click the "Swap" button, the checked items from List 1 will swap their titles with the corresponding items in List 2.

## Code

```jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [list1, setList1] = useState([
    { title: 'item 1', checked: false },
    { title: 'item 2', checked: false },
    { title: 'item 3', checked: false },
  ]);
  const [list2, setList2] = useState([
    { title: 'item A' },
    { title: 'item B' },
    { title: 'item C' },
  ]);
  
  const handleCheck = (index) => {
    const newList1 = [...list1];
    newList1[index].checked = !newList1[index].checked; // Toggle the checked property
    setList1(newList1);
  };
  
  const handleSwap = () => {
    const updatedList1 = [...list1];
    const updatedList2 = [...list2];
    
    updatedList1.forEach((item, index) => {
      if (item.checked) {
        const temp = updatedList1[index].title;
        updatedList1[index].title = updatedList2[index].title;
        updatedList2[index].title = temp;
      }
    });
    
    setList1(updatedList1);
    setList2(updatedList2);
  };

  return (
    <>
      <h2>Swap Two List</h2>
      <div>
        <div>
          <ul>
            {list1.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(index)}
                />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {list2.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
        <button onClick={handleSwap}>Swap</button>
      </div>
    </>
  );
}

export default App;
```