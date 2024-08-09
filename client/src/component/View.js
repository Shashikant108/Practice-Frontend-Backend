// 
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './view.css'

function View() {
  const { id } = useParams();
  const [Det, setDet] = useState({});

  useEffect(() => {
    details();
  });

  const details = () => {
    axios.get(`http://localhost:7100/api/single/${id}`)
      .then((response) => {
        setDet(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error( error);
      });
  };

  return (
    <div className='view'>
      <div className="card" style={{ width: '18rem' }}>
        <img src={Det.photo} className="card-img-top" alt="Not Found" />
        <div className="card-body">
          <h5 className="card-title"><h4>Product :</h4>{Det.iname}</h5>
          <p className="card-text">
            <h4>Price</h4>
            <p>{Det.price}</p>
          </p>
          <Link to="/details" className="btn btn-primary">Go Back</Link>
        </div>
      </div>
    </div>
  );
}

export default View;
