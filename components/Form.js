import React from 'react';
import styles from "./form.module.css"

export default function Form({title}) {
    

	return (
        <div>
            <head>
                <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' />
            </head>
            <form style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center", paddingBottom:"75px"}}>{title}</h1>
            </div>
            <div class="form-group" style={{paddingBottom:"20px"}}>
                <label for="emailbox">Email address</label>
                <input type="email" class="form-control" id="emailbox" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group" style={{paddingBottom:"20px"}}>
                <label for="passwordbox">Password</label>
                <input type="password" class="form-control" id="passwordbox" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
        </div>
	)
}
