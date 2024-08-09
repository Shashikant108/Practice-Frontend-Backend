import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./landing.css";
import { Link } from 'react-router-dom';

function Landing() {
  const [get, setGet] = useState([]);
  // const{id}=useParams;

  const findata=()=>{
    axios.get('http://localhost:7100/api/get')
    .then((item) => {
      setGet(item.data);
    })
    .catch((error) => console.error('Error fetching data:', error));
  }


  useEffect(() => {
   findata();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:7100/api/delete/${id}`)
      .then(() => {
        // setGet(get.filter(item => item._id !== id));
        findata();
      })
      .catch((error) => console.error('Error deleting data:', error));
  };

  return (
    <div>
      <div className='result'>
        <div className='result2'>RESULT</div>
      </div>
      <div className='back'>
        <Link to="/" className="btn btn-primary">Go Back</Link>
      </div>
      
      <table className="table m-2">
        <thead>
          <tr>
            <th scope="col">S.N</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Picture</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {get.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.iname}</td>
              <td>{item.price}</td>
              <td><img src={item.photo} width="50" alt="Product"></img></td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item._id)}>Delete</button>
                <Link className='btn btn-warning btn-sm ms-2' to={`/view/${item._id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  );
}

export default Landing;
