import React,  { useState, useEffect } from 'react';
import axios from "axios";
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";

function Designation() {

    const [data, setData] = useState ({
        departmentid: "",
        designation: "",
        createdon: "",
        createdpurpose: "",
        designationtype: "", 
      })

      const handleInputs = (event) => {
        setData ({... data, [event.target.id]: event.target.value})
      }

      function Designations (event){
        event.preventDefault()
        axios.post ("http://localhost:5247/api/Designation/CreateDesignation", data)
        .then(response => console.log(response))
        .catch(err => console.log(err));
      }
 
  const [isMenuOpen, setMenuOpen]  = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [theme, setTheme] = useState("theme");

    const toggleTheme = () => {
        if (theme === "dark-theme"){
            setTheme('light-theme')
        }

        else {
            setTheme ("dark-theme")
        }
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const navigate = useNavigate();

    return (
        
        <>
   <div className='form-data' style={{ display: 'flex', }}>

 <div className='sidebar'>

<img src="/images/Frame 1.png" alt="Menu Toggle" id="menu" onClick={toggleMenu} />

<div className="imgic">
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>
<a href='#'> <img src="/images/Vector.png" onClick={toggleMenu} /> </a>

<div className='imgic2'>
<img src="/images/Vector.png" onClick={toggleMenu} />
<img src="/images/Vector.png" onClick={toggleMenu} />
</div>

</div>
<div>

<div id='sidemenu'  style={{
  width:  '220px',
  display: isMenuOpen ? 'none' : 'block',
}}
>
<h2>Homes</h2>
<img src="/images/Layer 1.png" />
<div className='sideline'>
<ul>
<li>
  <Link to="/" > <i className="fa fa-camera-retro" aria-hidden="true"></i> Department </Link> 
</li>
<li>
  <Link to="/Designation" > <i className="fa fa-camera-retro" aria-hidden="true"></i> Designation </Link> 
</li>
<li>
 <Link to="/Role" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Role</Link> 
</li>
<li>
 <Link to="/Project" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Project</Link> 
</li>
<li>
 <Link to="/Team" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Team</Link> 
</li>
<li>
 <Link to="/Employee Information" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Employee Information</Link> 
</li>
<li>
<Link to="/Medical" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Medical & Health</Link> 
</li>
<li>
<Link to="/Education" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Education History</Link> 
</li>
<li>
<Link to="Consent/" > <i className="fa fa-question-circle-o" aria-hidden="true"></i>Consent & Authorized</Link> 

</li>
</ul>
</div>
</div>
</div> 
</div>
                <div className='Acc-from'>
                    <div className='navbar11'>
                        <input type='checkbox' name='' id='chk1' />
                        <div className='search-box'>
                            <form action=''>
                            <i className="fa fa-search" aria-hidden="true"></i>
                                <input type='text'  name='search' id='srch' placeholder='Search' />
                                </form>
                        </div>
                        <ul>

                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                  
                        <div className='text'>     
                          <label className="switchh">
                          <input type="checkbox"  onClick={() => toggleTheme()} />
                      <span className="sliders"></span>
                                 </label>
                        </div>
                        <div className='text2'>
                           <p className='pra'> Welcome </p>
                           <p className='para'> Heydim (Admin) </p>
                        </div>

                        <div className='text3'>
                            <img src="/images/Ellipse 47.png" />
                        </div>
                        </ul>                   
                        <div className='menu'>
                            <label htmlFor="chk1">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            </label>
                        </div>
                 </div>

                 <form onSubmit={Designations}>
                    <h2> Designation Table  </h2>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                {/* <label htmlFor="input1">DesignationId PK</label>
                <input type="text" className="form-control" onChange={handleInput} id='designationid' 
                  required  /> */}
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">DepartmentId FK</label>
                <input type="text" className="form-control" onChange={handleInputs} id='departmentid'
                 required  />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">Designation</label>
                <input type="text" className="form-control" onChange={handleInputs} id='designation'
                  required  />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">CreatedOn</label>
                <input type="date" className="form-control" onChange={handleInputs} id='createdon'
                 required  />
            </div>
        </div>
    </div>
</div>

<div className="">
    <div className="row">
        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input1">CreatedPurpose</label>
                <input type="text" className="form-control" onChange={handleInputs} id='createdpurpose'
                  required  />
            </div>
        </div>

        <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">Designation Type</label>
                <input type="text" className="form-control" onChange={handleInputs} id='designationtype'
                 required  />
            </div>
        </div>

        {/* <div className="col-md-6">
            <div className="form-group">
                <label htmlFor="input2">EmployeeId</label>
                <input type="text" className="form-control" onChange={handleInput} id='employeeid'
                 required  />
            </div>
        </div> */}
    </div>
</div>
<button type='submit' className='Tbtn'>Save</button>
</form>
                       
                </div>
            </div>
        </>
    )
}
export default Designation;