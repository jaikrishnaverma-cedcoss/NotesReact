
import React, { useRef, useState } from 'react'
import Product from './Product'
import { Routes,Route, Link,useNavigate} from 'react-router-dom'
import User from './User'
import Upload from './Upload'
import Panel from './Panel'

const Index = () => {
  let search=useRef();

  let [state,setState]=useState({dataloaded:false,data:{},mode:"Headlines",categories:{}})
  const [database,setDatabase]=useState({users:[{
   avatar: "https://api.lorem.space/image/face?w=640&h=480&r=5393"
  ,email: "jai@mail.com"
  ,id: "x2"
  ,name: "jai"
  ,password: "8787"
  ,role: "admin"},{
    avatar: "https://api.lorem.space/image/face?w=640&h=480&r=5393"
   ,email: "walker@mail.com"
   ,id: "x1"
   ,name: "Walker"
   ,password: "changeme"
   ,role: "customer"}]
  ,notes:[{
    categories:"Study"
    ,images:"https://api.lorem.space/image/watch?w=640&h=480&r=4291"
    ,userIndex:"x1"
    ,description:"dhndgfjs dsgvfkjs dfsgsdjfgs ghrtiyhucfx gssgfvfgb bhogflihfgh bd ghfdrsguhdfg dgdfhgd dfs jhsf dsfjhsd gf sdfgsdjf sf dsfds"
    ,title:"Title"
    ,rating:2}
  ]
,update:"-1"
,searchdata:[]
})

let def={title:"",description:"",userIndex:""}
  const dataNotes=(notes)=>
  {
    setDatabase({...notes})
  }


if(database.update!=="-1")
{
def={title:database.notes[database.update].title,description:database.notes[database.update].description,userIndex:database.notes[database.update].userIndex}
}

const searchBox=(e)=>{
let inpu=e.target.value;
let data=database.notes.filter(y=>(y.title==inpu||y.description.includes(inpu)))
database.searchdata=[...data]
setDatabase({...database})
}
console.log("index",database)
  return (
   <>
   <nav className="nav">
    <div className="row flexAIC darkdiv navup"><i class="fa fa-superpowers" aria-hidden="true"></i>&nbsp;<h2>Notes</h2></div>
    <div className="darkdiv navlink flexAIC now">
      <Link to="/"><span>Notes</span></Link>
      <Link to="/Users"><span>Users</span></Link>
      <Link to="/Admin"><span>Admin Panel</span></Link>
      <Link to="/Upload"><span>Upload</span></Link>
      <span className={`${(database.searchdata.length>0&&database.searchdata.length!==database.notes.length)?"":"searchSpan"} row flexAIC`}><input onChange={searchBox} type="text" />&nbsp;<i class="fa fa-search" aria-hidden="true"></i></span>
      <select className='btn-trans bar' id="">
      <option>About</option>
      <option>Our Network</option>
      <option>News Room</option>
      <option>Worlwide Foundation</option>
      </select>
    </div>
    <div className="p3 btn-info row" style={{borderRadius:"none"}}>E-Notes &nbsp;<i class="fa fa-bars" aria-hidden="true"></i></div> 
    </nav>


   <Routes>
    <Route path="/" index element={ <Product data={(database.searchdata.length>0)?{...database,notes:[...database.searchdata]}:database}/>} />
    <Route path="/Upload" element={ <Upload data={database} dataNotes={dataNotes} def={def}/>} />
    <Route path="/Users" element={ <User data={database.users} dataNotes={dataNotes}/>} />
    <Route path="/Admin" element={ <Panel data={database} dataNotes={dataNotes}/>} />
    <Route path="/Page" element={ <User data={database} dataNotes={dataNotes}/>} />
   </Routes>
   </>
  )
}

export default Index