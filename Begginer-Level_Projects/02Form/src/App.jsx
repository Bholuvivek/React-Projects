import { useState } from 'react'
import './App.css'

function App() {
  const [list1, setList1] = useState([
    {title:'item 1'},
    {title:'item 2'},
    {title:'item 3'},
  ]);
  const [list2, setList2] = useState([
    {title:'item A'},
    {title:'item B'},
    {title:'item C'},
  ]);
  const handleCheck = (index)=>{
    const newList1 = [...list1]
    newList1[index].checked = !newList1[index].checked
    setList1(newList1)
  };
  const handleSwap = ()=> {
    const updatelist1 = [...list1];
    const updatelist2 = [...list2];
     updatelist1.forEach((item, idex) => {
      if(item.checked){
        const temp = updatelist1[idex].title
        updatelist1[idex].title = updatelist2[idex].title
        updatelist2[idex].title = temp
      }
     });
     setList1(updatelist1)
     setList2(updatelist2)
  }

  return (
    <>
    <h2>Swap Two List</h2>
    <div>
   
      <div>
      <ul>
        {list1.map((items,index)=>(
           <li key={index}>
          <input type="checkbox" checked={items.checked}
           onChange={ ()=> (handleCheck(index))} />
         {items.title}</li>
        ))}
      </ul>
      </div>
      <div>
      
        <ul>
    {
      list2.map((items, index)=>(
        <li key={index}>
        {items.title}</li>
      ))}  
      
    </ul>
      </div><button onClick={handleSwap}>Swap</button>
    </div>
    </>
  )
}

export default App
