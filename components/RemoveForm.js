import React from 'react';
import styles from "./form.module.css"
import axios from 'axios';

export default function RemoveForm({mode, title, boxtitle, place, description}) {

    const submitHandler = (e) => {
        e.preventDefault()

        let d = e.target.querySelector("#removebox").value

        if(!e.target.querySelector("#confirm:checked")) {
            console.log("Not Checked");
            return;
        }

        let url, data;

        if(mode == 1) {
            url = 'http://localhost:5000/update_runway'
            data = { runId: d }
        } else if(mode == 2) {
            url = 'http://localhost:5000/remove_flight'
            data = { fNum: d }
        } else {
            url = 'http://localhost:5000/remove_route'
            data = { rid: d }
        }

        axios.post(url, data, {
            headers: {
                "Content-Type": 'application/json'
            }, 
        }).then(
            (resp) => alert("Success !!")
        ).catch(
            (error) => alert("Failure !!")
        )
    }


	return (
        <div>
            <form onSubmit={submitHandler} style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center", paddingBottom:"90px"}}>{title}</h1>
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"20px"}}>
                <label for="removebox">{boxtitle}</label>
                <input required type="text" class="form-control" id="removebox" aria-describedby="removeHelp" placeholder={place} />
                <small id="removeHelp" class="form-text text-muted">{description}</small>
            </div>
            <div class="form-check" style={{paddingBottom:"20px"}}>
                <input className="form-check-input" type="checkbox" name="confirm" id="confirm" value="1" />
                <label class="form-check-label" className={styles['formbodysmall']} for="othergen">
                    Confirm
                </label>
            </div>
            <button type="submit" class="btn btn-warning">Submit</button>
            </form>
        </div>
	)
}
