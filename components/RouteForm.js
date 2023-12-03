import React from 'react';
import styles from "./form.module.css"

export default function RouteForm({}) {
	return (
        <div>
            <form style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center"}}>Add Route</h1>
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"5px"}}>
                <label for="routebox">Route Type</label>
                <input type="text" class="form-control" id="routebox" placeholder="Arrival or Departure" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"10px"}}>
                <label for="datetimebox">Date-Time</label>
                <input type="text" class="form-control" id="datetimebox" placeholder="Scheduled Date and Time of Taxi" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"5px"}}>
                <label for="routeflightbox">Flight</label>
                <input type="text" class="form-control" id="routeflightbox" placeholder="Flight using Route" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"10px"}}>
                <label for="routerunwaybox">Runway</label>
                <input type="text" class="form-control" id="routerunwaybox" placeholder="Assigned Runway" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"10px"}}>
                <label for="routelocationbox">Destination</label>
                <input type="text" class="form-control" id="routelocationbox" placeholder="Route Location" />
            </div>
            <button type="submit" class="btn btn-warning">Submit</button>
            </form>
        </div>
	)
}
