import React from 'react';
import styles from "./form.module.css"
import axios from 'axios';

export default function AdminForm({}) {
    const submitHandler = (e) => {
        e.preventDefault()

        let fNum = e.target.querySelector("#flightbox").value
        let model = e.target.querySelector("#modelbox").value
        let capacity = e.target.querySelector("#capacitybox").value
        let alCode = e.target.querySelector("#airlinebox").value

        let data = {
            fNum,
            model,
            capacity,
            alCode
        }
        
        axios.post('http://localhost:5000/add_flight', data, {
            headers: {
                "Content-Type": 'application/json'
            }, 
        }).then(
            (resp) => alert("Success !!")
        ).catch(
            (err) => alert("Failure !!")
        )
    }

	return (
        <div>
            <form onSubmit={submitHandler} style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center"}}>Add Flight</h1>
            </div>
            <div className="form-group" style={{paddingBottom:"10px", fontSize: "18px", 
            fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="flightbox">Flight Number</label>
                <input required type="text" className="form-control" id="flightbox" placeholder="Airline Code with 3-4 digit code" />
            </div>
            <div className="form-group" style={{paddingBottom:"10px", fontSize: "18px", 
            fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="modelbox">Aircraft Model</label>
                <input required type="text" className="form-control" id="modelbox" placeholder="Type of Aircraft" />
            </div>
            <div className="form-group" style={{paddingBottom:"10px", fontSize: "18px", 
            fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="capacitybox">Capacity</label>
                <input required type="number" className="form-control" id="capacitybox" placeholder="Maximum Passengers" />
            </div>
            <div className="form-group" style={{paddingBottom:"10px", fontSize: "18px", 
            fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="airlinebox">Airline</label>
                <input required type="text" className="form-control" id="airlinebox" placeholder="Dispatching Airline" />
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
	)
}
