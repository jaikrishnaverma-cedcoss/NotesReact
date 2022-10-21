import React from 'react'
import { useNavigate } from 'react-router-dom';
import NotesPanel from './NotesPanel';
import Table from './Table';

const Panel = (props) => {

  let navigate = useNavigate();
    let data={...props.data}
    const submitted=(e)=>{
e.preventDefault()
        let obj=e.target
        if(obj.pass.value!=="8787")
        return alert("Incorrect Admin Pin...!")
        if((obj.name.value=="")||(obj.email.value=="")||(obj.password.value==""))
            return  alert("Fill all Details First.")
        data.users.push({
            avatar: "https://api.lorem.space/image/face?w=640&h=480&r=5393"
            ,email: obj.email.value
            ,id: obj.name.value+Math.floor(Math.random() * 9)
            ,name: obj.name.value
            ,password: obj.password.value
            ,role: obj.role.value})
    
        props.dataNotes({...data})
alert("Succesfully Done..!")

e.target.reset();
    }

    const remove=(index,bool)=>{
        (bool)?data.notes.splice(index,1):data.users.splice(index,1)
        props.dataNotes({...data})
        alert("success")
      }
 const editor=(index)=>{
    data.update=index
    props.dataNotes({...data})
    navigate('/Upload')
 }
  return (
   
<div className="navBody row  wrap flexSB " >
    <form onSubmit={submitted} className="lightdiv col  p1 brd5 m1 w50">
        <h2 className='p1'>ADD USER</h2>
        <span className='p1'><i class="fa fa-address-card" aria-hidden="true"></i> Name</span>
        <input style={{fontFamily:"monospace",fontSize:"1.2rem",fontWeight:"900"}} type="name" className="input p1" name="name" placeholder='Name'/>
        <span className='p1'><i class="fa fa-envelope" aria-hidden="true"></i> Email</span>
      <input type="email" name="email" id="" placeholder='abc@email.com'/>
      <span className="p1"><i class="fa fa-unlock-alt" aria-hidden="true"></i> Password</span>
      <input type="password" name="password" placeholed="****" id="" />
      <span className="p1"><i class="fa fa-code-fork" aria-hidden="true"></i> Role</span>
      <select name="role" id="">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <span className="btn-danger p1 brd2"><i class="fa fa-ravelry" aria-hidden="true"></i> ADMIN PIN</span>
      <input type="text" className='w50' name="pass" id="" placeholder='ENTER ADMIN PIN TO VERIFY' />

  <button type="submit" className="btn btn-info">Upload</button>
    </form>
    <div className="darkdiv col  p1 brd5 m1 w40">
        {/* <span className="p1">Rough Sheet</span> */}
      {
           
     <Table arr={props.data} remove={remove} editor={editor}/>
      }
    </div>
    <NotesPanel arr={props.data} remove={remove}/>

</div>
  )
}

export default Panel