import React from 'react';
import styles from "./form.module.css"
import axios from 'axios';

export default function RouteForm({}) {
    const submitHandler = (e) => {
        e.preventDefault()

        let rtype = e.target.querySelector("#routebox").value
        let dtime = e.target.querySelector("#datetimebox").value
        let fNum = e.target.querySelector("#routeflightbox").value
        let runId = e.target.querySelector("#routerunwaybox").value
        let locId = e.target.querySelector("#routelocationbox").value

        let data = {
            rtype,
            dtime,
            fNum,
            runId,
            locId
        }

        axios.post('http://localhost:5000/add_route', data, {
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
                <h1 className={styles['formtext']} style={{textAlign:"center"}}>Add Route</h1>
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"5px"}}>
                <label for="routebox">Route Type</label>
                <input type="number" required min={0} max={1} class="form-control" id="routebox" placeholder="Arrival or Departure" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"10px"}}>
                <label for="datetimebox">Date-Time</label>
                <input required type="text" class="form-control" id="datetimebox" placeholder="Scheduled Date and Time of Taxi" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"5px"}}>
                <label for="routeflightbox">Flight</label>
                <input required type="text" class="form-control" id="routeflightbox" placeholder="Flight using Route" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"10px"}}>
                <label for="routerunwaybox">Runway</label>
                <input required type="text" class="form-control" id="routerunwaybox" placeholder="Assigned Runway" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"10px"}}>
                <label for="routelocationbox">Destination</label>
                <input required className="form-control" id="routelocationbox" placeholder="Route Location" />
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
	)
}
