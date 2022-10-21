import React, { useEffect, useRef } from 'react'

const Upload = (props) => {

console.log("update",props)
    const submitted=(e)=>{
e.preventDefault()
        let obj=e.target
        // console.log("obj",obj.description.value.length)
        let data={...props.data}
        if(obj.description.value==""||obj.title.value=="")
        return alert("Fill the all Details")
       if(props.data.update==="-1")
       {
        data.notes.push({
            categories:"Notes"
            ,images:"https://api.lorem.space/image/watch?w=640&h=480&r=4291"
            ,userIndex:obj.userIndex.value
            ,description:obj.description.value
            ,title:obj.title.value
            ,rating:2})
       }
       else{
        data.notes[data.update]={
            categories:"Notes"
            ,images:"https://api.lorem.space/image/watch?w=640&h=480&r=4291"
            ,userIndex:obj.userIndex.value
            ,description:obj.description.value
            ,title:obj.title.value
            ,rating:2}
            data.update="-1"
       }
        props.dataNotes({...data})
        e.target.reset();
alert("Succesfully Done..!")
    }
  return (
<>
<div className="navBody row  wrap flexSB " >
    <form onSubmit={submitted} className="lightdiv col flexSB p1 brd5 m1 w50">
        <span className='p1'><i class="fa fa-header" aria-hidden="true"></i> Title</span>
        <input   defaultValue={props.def.title} style={{fontFamily:"monospace",fontSize:"1.2rem",fontWeight:"900"}} type="text" className="input p1" name="title" placeholder='Title'/>
        <span className='p1'><i class="fa fa-pencil" aria-hidden="true"></i> Notes Content</span>
      <textarea defaultValue={props.def.description}  style={{fontFamily:"monospace",fontSize:"1.1rem"}} name="description" id="" cols="30" rows="10"  placeholder="Write your own notes" className="m1 textbox p3" ></textarea>
  <span className="p1"><i class="fa fa-graduation-cap" aria-hidden="true"></i> Author</span>
  <div className="row w100">
  <select name="userIndex" className='w50' id="" defaultValue={props.def.userIndex} >
   {
    props.data.users.map((x,i)=>{
return <option value={x.id}>{x.name}</option>
    })
   }
  </select>
  {/* <input type="password" className="pin w50" placeholder='userPin' /> */}
  </div>
  <button type="submit" className={(props.data.update==="-1")?"btn btn-info":"btn btn-warning"}>{(props.data.update==="-1")?"Upload":"Update"}</button>
    </form>
    <div className="darkdiv col flexSB p1 brd5 m1 w40">
        <span className="p1">Rough Sheet</span>
        <textarea name="" className="p3" id="" cols="30" rows="28" ></textarea>
    </div>
</div>
</>
  )
}

export default Upload