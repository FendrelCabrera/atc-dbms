import React from 'react';
import styles from "./form.module.css"
import axios from 'axios';

export default function RunwayForm({title}) {
    const submitHandler = (e) => {
        e.preventDefault();

        let length = e.target.querySelector("#lengthbox").value
        let runStatus = e.target.querySelector("#statusbox").value

        
        axios.post('http://localhost:5000/add_runway', { runStatus, length }, {
            headers: {
                "Content-Type": 'application/json'
            }, 
        }).then(
            (resp) => alert("Success !!")
        ).catch(
            (error) => alert("Failed !!")
        )
    }


	return (
        <div>
            <form onSubmit={submitHandler} style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center", paddingBottom:"75px"}}>{title}</h1>
            </div>
            <div className="form-group" style={{paddingBottom:"20px", fontSize: "18px",
                fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="lengthbox">Length</label>
                <input type="number" required className="form-control" id="lengthbox" placeholder="Length of Runway" />
            </div>
            <div className="form-group" style={{paddingBottom:"20px", fontSize: "18px",
            fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="statusbox">Status</label>
                <input type="text" className="form-control" id="statusbox" placeholder="Working status of Runway" />
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
	)
}

