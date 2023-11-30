import React from 'react';
import styles from "./form.module.css"

export default function SignUpForm({}) {
	return (
        <div>
            <head>
                <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' />
            </head>
            <form style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center"}}>Sign Up</h1>
            </div>
            <div class="form-group" style={{paddingBottom:"5px"}}>
                <label for="namebox">Name</label>
                <input type="text" class="form-control" id="namebox" placeholder="Enter Name" />
            </div>
            <div class="form-group" style={{paddingBottom:"5px"}}>
                <label for="agebox">Age</label>
                <input type="text" class="form-control" id="agebox" placeholder="Enter Age" />
            </div>
            <label style={{width: "100%"}}>Gender</label>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gen" id="malegen" value="option1" />
                <label class="form-check-label" for="malegen">
                    Male
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gen" id="femalegen" value="option2" />
                <label class="form-check-label" for="femalegen">
                    Female
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gen" id="othergen" value="option3" />
                <label class="form-check-label" for="othergen">
                    Other
                </label>
            </div>
            <div class="form-group" style={{paddingBottom:"5px"}}>
                <label for="emailbox">Email address</label>
                <input type="email" class="form-control" id="emailbox" aria-describedby="emailHelp" placeholder="Enter E-mail" />
            </div>
            <div class="form-group" style={{paddingBottom:"5px"}}>
                <label for="passwordbox">Password</label>
                <input type="password" class="form-control" id="passwordbox" placeholder=" Enter Password" />
            </div>
            <div class="form-group" style={{paddingBottom:"10px"}}>
                <label for="passwordbox"> Confirm Password</label>
                <input type="password" class="form-control" id="passwordbox" placeholder="Confirm Password" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
        </div>
	)
}
