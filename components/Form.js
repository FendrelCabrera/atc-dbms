import React from 'react';
import styles from "./form.module.css"

export default function Form({title}) {
	return (
        <div>
            <form style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center", paddingBottom:"75px"}}>{title}</h1>
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"20px"}}>
                <label for="emailbox">E-mail address</label>
                <input type="email" class="form-control" id="emailbox" aria-describedby="emailHelp" placeholder="Enter e-mail" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group" className={styles['formbodysmall']} style={{paddingBottom:"20px"}}>
                <label for="passwordbox">Password</label>
                <input type="password" class="form-control" id="passwordbox" placeholder="Enter Password" />
            </div>
            <button type="submit" class="btn btn-warning">Submit</button>
            <p className={styles['formbodytext']} style={{paddingTop:"20px"}}>Don't have an account? <a href="/signup">Sign up</a></p>
            </form>
        </div>
	)
}
