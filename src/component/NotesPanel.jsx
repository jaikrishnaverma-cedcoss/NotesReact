import React from 'react';

function NotesPanel(props) {
    if (props.arr.length === 0)
        return <><h1>Empty</h1></>;
    else
        return (
            <>
                <div className="main row flexJCC p1">
                    <div className="w100">
                        <table className='w100 lightdiv' >
                           <thead>
                           <tr className='main darkdiv bRd5'>
                                <td colSpan="7" className='bRd5'>  <h1>Users</h1></td>
                             </tr>
                            <tr className=''>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Password</th>
                                <th>Remove</th>
                            </tr>
                           </thead>
                            {
                                props.arr.users.map((prd,i) => {
                                    return <tr><td>{prd.id}</td>
                                    <td>{prd.name}</td>
                                    <td>{prd.email}</td>
                                    <td>{prd.role}</td>
                                    <td>{prd.password}</td>
                                   
                                    <td><button className="btn btn-danger" onClick={()=>props.remove(i,false)}>Remove</button></td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>
                </div>
            </>
        );
}

export default NotesPanel;