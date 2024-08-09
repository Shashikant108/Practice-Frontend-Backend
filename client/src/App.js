// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import {Link } from "react-router-dom";
// import View from './component/View'

function App() {
  // const {id} = useParams(); // Fetching id from URL params
  const [user, setUser] = useState({ 
    iname: '',
    price: '',
    photo: ''
  });

  const [get, setGet] = useState([]); 


  useEffect(() => {
    axios.get("http://localhost:7100/api/get")
      .then((res) => {
        setGet(res.data); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Function to update user state with input values
  const setData = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Function to submit form data to server
  const handleSubmit = async () => {
    const { iname, price, photo } = user;
    try {
      const response = await axios.post("http://localhost:7100/api/create", {
        iname,
        price,
        photo
      });
      console.log(response)
      window.location='/details'
      
      // Clear user input after successful submission (if desired)
      setUser({
        iname: '',
        price: '',
        photo: ''
      });
      
      // Refresh data from server after submission (if needed)
      axios.get("http://localhost:7100/api/get")
        .then((response) => {
          setGet(response.data);
        });
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
 console.log(get)
  // Function to delete an item


  return (
    <div className="App">
      <form className='form'>
        <div>Enter Name and Price</div>
        <br></br>
        <div>
          <label>Product Name</label>
          <br></br>
          <input type='text' name='iname' value={user.iname} onChange={setData}></input>
        </div>

        <div className='mt-3'>
          <label>Product Price</label>
          <br></br>
          <input type='text' name='price' value={user.price} onChange={setData}></input>
        </div>

        <div className='mt-3'>
          <label>Product photo</label>
          <br></br>
          <input type='text' name='photo' value={user.photo} onChange={setData}></input>
        </div>

        <button type='button' onClick={handleSubmit} className='mt-3 bg-info'>Submit</button>
      </form>
      {/* <Link to='/details'>Details Page</Link> */}

     <div><Link to='/details' className="btn btn-primary mt-4">Details Page</Link></div>

      
    </div>
  );
}

export default App;
