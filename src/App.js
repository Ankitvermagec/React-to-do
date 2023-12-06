import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
// var temp=[]
 var count=1
function App() {
  const [temp,setTodo]=useState([])  //hooks
  const [flag,setEditing]=useState(-1)
  const addtodo=()=>{
 var todotext=document.getElementById("todotext").value
 const todoobj={
  id:count,
  name:todotext,
  bool:true
 }
 count++;
 temp.push(todoobj)
 setTodo([...temp])
console.log(temp)

document.getElementById("todotext").value=""
}

const delete_=(obj)=>{
const tempupdate=temp.filter((element)=>{
if(element.id==obj.id)
{
  return false
}
else{
  return true
} 
}) 

setTodo([...tempupdate])
}

const check=(id)=>{
temp.map((element)=>{
if(element.id==id){
element.bool=!element.bool   //element.bool=false  //element.name=!element.name name will be remove
}
return element
})
setTodo([...temp])
console.log(temp)
}


const edit=(id)=>{
  console.log(id)
setEditing(id)
}

const savetodo=(obj)=>{
var newtext=document.getElementById("newtext").value

obj.name=newtext
setTodo([...temp])
setEditing(-1)
console.log(temp)
}


return ( 
  <div> 
   <h1>todo list</h1>
   <div><input type='text' placeholder='enter to do'  id='todotext'/>
   <button onClick={addtodo}>addtodo</button>
   </div>
            
   {temp.map((element)=>{   //for the multiple html tag have to use a <><>
    return <div>             
     <> {element.bool?<input type='checkbox' checked onClick={()=>check(element.id)}/>:
      <input type='checkbox'  onClick={()=>check(element.id)}/>
      }
      </>
    {
      element.id==flag  ?
      <>
      <input type='text' Value={element.name}  id="newtext"/>
      <button onClick={()=>delete_(element)}>delete</button>
      <button onClick={()=>savetodo(element)}>savetodo</button>
      </>
      :
      <>
            {element.name}
      <button onClick={()=>delete_(element)}>delete</button>
      <button onClick={()=>edit(element.id)}>edit</button>
      </>
    }
      



    </div>
   })}
   



   </div>
   
  )



}

export default App;
