import React, { useState } from 'react'

const Product = (props) => {
  const [current, setCurrent] = useState(0)

  const Devider = (arr, n = 4) => {
    let data = [];
    if (arr.length <= n) {
      data.push(arr)
      return data
    }
    let len = parseInt(arr.length / n);
    let iter = 0;
    for (let row = 0; row < len; row++) {
      let temp = []
      for (let col = 0; col < n; col++) {
        temp.push(arr[iter])
        iter++;
      }
      data.push(temp)
    }
    iter--;
    let temp = []
    len = parseInt(arr.length % n);
    for (let col = 0; col < len; col++) {
      temp.push(arr[iter])
      iter++
    }
    data.push(temp)
    return data;
  }


  let books = Devider(props.data.notes,12);

  const navigator = () => {
    const rows = [];
    for (let i = 0; i < books.length; i++) {
      if (current === i)
        rows.push(<div onClick={() => setCurrent(i)} className="pages p1 lightdiv brd2 row flexAIC flexJCC boxActive"><h3>{i + 1}</h3> </div>);
      else
        rows.push(<div onClick={() => setCurrent(i)} className="pages p1 darkdiv brd2 row flexAIC flexJCC"><h3>{i + 1}</h3> </div>);
    }
    return rows;
  }
console.log(books)
  return (
    <>
    <div className="navBody row  wrap" >
      {

        books[current].map(x => {
          return <div className="col w21 lightdiv brd2 p1 m1 flexAIC newsbox">
            <img className="image" style={{ height:"195px",width:"96%" }} alt=""  src={(x.images[0] == undefined || x.images[0] == "" || x.images[0] == "string") ? "maxresdefault.jpg" : (Array.isArray(x.images) ? x.images[0] : x.images)} />
            <div className="col flexSB  details " style={{ width: "96%", minHeight: "150px",marginTop:"10px"}}>
              <h3 className='lightdiv' style={{marginTop:"10px"}}>{x.title}</h3>
              <h5 className='m1' style={{marginLeft:"0px"}}>Author: {props.data.users.map(y=>{
                if(y.id===x.userIndex)
                return y.name
              })}</h5>
              <p className="m1" style={{ color: "grey",marginLeft:"0px",minHeight:"80px"}}>{(x.description.length>50)?x.description.slice(50):x.description}...</p>
              {/* <h2 className="m2" style={{ color:"black",marginLeft:"0px"}}>{x.price} READ</h2> */}
             

            </div>
          </div>
        })

      }
      
    </div>
    <div className="row w100 flexJCC">
    <div className="row mw70  brd2 p1 m2 flexAIC   wrap">

        <div onClick={() => setCurrent(prev => (prev !== 0) ? prev - 1 : prev)} className="pages p1 lightdiv brd2 row flexAIC flexJCC boxActive"><h3><i className="fa fa-angle-double-left" aria-hidden="true"></i></h3> </div>
        {navigator()}
        <div onClick={() => setCurrent(prev => (prev !== books.length - 1) ? prev + 1 : prev)} className="pages p1 lightdiv brd2 row flexAIC flexJCC boxActive"><h3><i className="fa fa-angle-double-right" aria-hidden="true"></i></h3> </div>


      </div>
      </div>
    </>
  )
}

export default Product;