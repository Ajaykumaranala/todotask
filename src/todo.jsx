import React,{useState} from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
function Todo(){
    const[todo,setTodo]=useState("")
    const [todos,setTodos]=useState([])
    const [editId,setEditId]=useState(0)
    const handleChange=(e)=>{
        setTodo(e.target.value)
       // console.log(todo);

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(editId){
            const editTodo=todos.find((i)=>i.id===editId)
            const updatedTodo=todos.map((t)=>t.id===editTodo.id ? (t={id:t.id,todo}):{i:t.id,todo:t.todo});
            setTodos(updatedTodo)
            setEditId(0)
            setTodo("")
            return;
        }
        if(todo!==""){
            setTodos([...todos, { id: `${todo}-${Date.now()}`, todo }]);
            
            console.log(todo);
            setTodo("")

        }
    };
    const deleteHandler=(id)=>{
        const delTodo=todos.filter((to)=> to.id!==id)
        setTodos([...delTodo])

    }
    const editHandler=(id)=>{
        const editTodo=todos.find((i)=> i.id===id)
        setTodo(editTodo.todo)
        setEditId(id)
    }


    return(
        <>
        <div className="main"> 
       <h1 style={{color:"#B4D4FF"}}>Todo List</h1>
        <div className="container bg-dark text-center">     
        <form onSubmit={handleSubmit}>
            <input className="form-control mt-3 " 
            type="text"
             placeholder="Enter Your To Do Activity" 
             onChange={handleChange}
             value={todo}
             style={{paddingLeft:'250px',paddingRight:'250px'}}
            
            />
            <button className="btn btn-primary mt-3" >Add  todo..! </button>
        </form>
        </div>
        <div>  
            { 
            todos.map((t)=>{
                return(
                <>
                  
                    <div className="container bg-light mt-2" style={{height:"auto"}}>
                    <p  className="todo" key={t.id}>{t.todo}</p>
                    <button  onClick={()=>deleteHandler(t.id)}className="btn btn-danger mx-2" style={{margin:"auto"}}>Delete <MdDelete /></button>
                    <button className="btn btn-primary" style={{margin:"auto"}}
                    onClick={()=>editHandler(t.id)}>Edit <CiEdit /></button>
                    </div>
                
                </>

                );
            })}
        </div>
        
       
     </div>
     </>

    )
}
export default Todo;