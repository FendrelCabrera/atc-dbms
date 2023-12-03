import React from 'react';
import styles from "./form.module.css"

export default function RemoveForm({title, boxtitle, place, description}) {
	return (
        <div>
            <form style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center", paddingBottom:"90px"}}>{title}</h1>
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"20px"}}>
                <label for="removebox">{boxtitle}</label>
                <input type="text" class="form-control" id="removebox" aria-describedby="removeHelp" placeholder={place} />
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
