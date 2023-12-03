import React from 'react';
import styles from "./form.module.css"

export default function SignUpForm({}) {
	return (
        <div>
            <form style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center"}}>Sign Up</h1>
            </div>
            <div class="form-group" className={styles['formbodysmall']}>
                <label for="namebox">Name</label>
                <input type="text" className="form-control" id="namebox" placeholder="Enter Name" />
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"5px"}}>
                <label for="agebox">Age</label>
                <input type="text" className="form-control" id="agebox" placeholder="Enter Age" />
            </div>
            <label className={styles['formbodysmall']} style={{width: "100%"}}>Gender</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gen" id="malegen" value="M" />
                <label class="form-check-label" className={styles['formbodysmall']} styles={{fontSize:"12px"}} for="malegen">
                    Male
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gen" id="femalegen" value="F" />
                <label class="form-check-label" className={styles['formbodysmall']} styles={{fontSize:"12px"}} for="femalegen">
                    Female
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gen" id="othergen" value="O" />
                <label class="form-check-label" className={styles['formbodysmall']} styles={{fontSize:"12px"}} for="othergen">
                    Other
                </label>
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"5px"}}>
                <label for="emailbox">E-mail address</label>
                <input type="email" className="form-control" id="emailbox" aria-describedby="emailHelp" placeholder="Enter e-mail" />
            </div>
            <div class="form-group" className={styles['formbodysmall']}>
                <label for="passwordbox">Password</label>
                <input type="password" className="form-control" id="passwordbox" placeholder="Enter Password" />
            </div>
            <div class="form-group" className={styles['formbodysmall']}style={{paddingBottom:"10px"}}>
                <label for="passwordbox"> Confirm Password</label>
                <input type="password" className="form-control" id="passwordbox" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
	)
}
