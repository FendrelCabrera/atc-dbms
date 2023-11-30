import React from 'react';
import styles from "./form.module.css"

export default function AdminForm({}) {
	return (
        <div>
            <head>
                <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' />
            </head>
            <form style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center"}}>Add Flight</h1>
            </div>
            <div class="form-group" style={{paddingBottom:"10px"}}>
                <label for="flightbox">Flight Number</label>
                <input type="text" class="form-control" id="flightbox" placeholder="Airline Code with 3-4 digit code" />
            </div>
            <div class="form-group" style={{paddingBottom:"10px"}}>
                <label for="modelbox">Aircraft Model</label>
                <input type="text" class="form-control" id="modelbox" placeholder="Type of Aircraft" />
            </div>
            <div class="form-group" style={{paddingBottom:"10px"}}>
                <label for="capacitybox">Capacity</label>
                <input type="text" class="form-control" id="capacitybox" placeholder="Maximum Passengers" />
            </div>
            <div class="form-group" style={{paddingBottom:"10px"}}>
                <label for="airlinebox">Airline</label>
                <input type="text" class="form-control" id="airlinebox" placeholder="Dispatching Airline" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
        </div>
	)
}
