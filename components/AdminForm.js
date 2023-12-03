import React from 'react';
import styles from "./form.module.css"

export default function AdminForm({}) {
	return (
        <div>
            <form style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center"}}>Add Flight</h1>
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"10px"}}>
                <label for="flightbox">Flight Number</label>
                <input type="text" class="form-control" id="flightbox" placeholder="Airline Code with 3-4 digit code" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"10px"}}>
                <label for="modelbox">Aircraft Model</label>
                <input type="text" class="form-control" id="modelbox" placeholder="Type of Aircraft" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"10px"}}>
                <label for="capacitybox">Capacity</label>
                <input type="text" class="form-control" id="capacitybox" placeholder="Maximum Passengers" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"10px"}}>
                <label for="airlinebox">Airline</label>
                <input type="text" class="form-control" id="airlinebox" placeholder="Dispatching Airline" />
            </div>
            <button type="submit" class="btn btn-warning">Submit</button>
            </form>
        </div>
	)
}
