import "./FormStyle.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>YOUR NAME</label>
            <input type="text" placeholder="ENTER YOUR NAME" name="text"/>
            <label>EMAIL</label>
            <input type="text" placeholder="ENTER YOUR NAME" name="text"/>
            <label>SUBJECT</label>
            <input type="text" placeholder="ENTER YOUR NAME" name="text"/>
            <label>MESSAGE</label>
           <textarea rows={6} placeholder="TYPE YOUR MESSAGE HERE"/>
           <button className="btn">SUBMIT</button>
        </form>

    </div>
  )
}

export default Form