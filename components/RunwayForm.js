import React from 'react';
import styles from "./form.module.css"

export default function RunwayForm({title}) {
	return (
        <div>
            <form style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center", paddingBottom:"75px"}}>{title}</h1>
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"20px"}}>
                <label for="lengthbox">Length</label>
                <input type="text" class="form-control" id="lengthbox" placeholder="Length of Runway" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"20px"}}>
                <label for="statusbox">Status</label>
                <input type="text" class="form-control" id="statusbox" placeholder="Working status of Runway" />
            </div>
            <button type="submit" class="btn btn-warning">Submit</button>
            </form>
        </div>
	)
}
