import React from 'react';

function Table(props) {
    if (props.arr.length === 0)
        return <></>;
    else
        return (
            <>
                <div className=" row flexJCC p1 w100">
                    <div className="w100">
                        <table className='w100' >
                           <thead className='w100 '>
                           <tr className='  bRd5 w100 brd5'>
                                <td colSpan="4" className='bRd5'>    <h1>Notes</h1></td>
                            </tr>
                            <tr className=''>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                           </thead>
                           <tbody className='w100'>
                            {
                                props.arr.notes.map((prd,i) => {
                                    return <tr><td>{i+1}</td>
                                    <td>{prd.title}</td>
                                    <td>{props.arr.users.map(y=>{
                if(y.id===prd.userIndex)
                return y.name
              })}</td> <td><button className="btn btn-success" onClick={()=>props.editor(i)}>Edit</button></td>
                                    <td><button className="btn btn-danger" onClick={()=>props.remove(i,true)}>Remove</button></td>
                                    </tr>
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
}

export default Table;