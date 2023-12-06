import React, { useContext } from 'react';
import styles from "./form.module.css"
import { Auth } from '@/app/page';
import { newuser } from '@/app/components/loginHelper';

export default function SignUpForm({}) {
    const { setUser } = useContext(Auth);

    const submitHandler = (e) => {
        e.preventDefault()

        let name = e.target.querySelector("#namebox").value
        let age = e.target.querySelector('#agebox').value
        let gender = e.target.querySelector('input[name="gen"]:checked').value;
        let email = e.target.querySelector("#emailbox").value
        let pass = e.target.querySelector("#passwordbox").value

        if(pass != e.target.querySelector("#passwordbox2").value) {
            alert("Passwords don't match !!")
            return;
        }

        let data = {
            name,
            age,
            gender,
            email,
            pass
        }
        
        newuser(data).then(
            (cid) => {
                if(cid == -1)
                    alert("SignUp Failed !! Please try again later")
                else
                    setUser(cid)
            }
        )
    }


	return (
        <div>
            <form onSubmit={submitHandler} style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center"}}>Sign Up</h1>
            </div>
            <div className="form-group" style={{fontSize: "18px", fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="namebox">Name</label>
                <input type="text" className="form-control" id="namebox" required placeholder="Enter Name" />
            </div>
            <div className="form-group" style={{paddingBottom:"5px", fontSize: "18px", fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="agebox">Age</label>
                <input type="number" className="form-control" id="agebox" required min={1} placeholder="Enter Age" />
            </div>
            <label className={styles['formbodysmall']} style={{width: "100%"}}>Gender</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gen" id="malegen" value="M" defaultChecked/>
                <label className="form-check-label" styles={{fontSize:"12px", fontFamily: "WalkwayUltraBold, sans-serif"}} htmlFor="malegen">
                    Male
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gen" id="femalegen" value="F" />
                <label className="form-check-label" styles={{fontSize:"12px", fontFamily: "WalkwayUltraBold, sans-serif"}} htmlFor="femalegen">
                    Female
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gen" id="othergen" value="O" />
                <label className="form-check-label" styles={{fontSize:"12px", fontFamily: "WalkwayUltraBold, sans-serif"}} htmlFor="othergen">
                    Other
                </label>
            </div>
            <div className="form-group" style={{paddingBottom:"5px", fontSize: "18px", fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="emailbox">E-mail address</label>
                <input type="email" className="form-control" id="emailbox" aria-describedby="emailHelp" placeholder="Enter e-mail" required/>
            </div>
            <div className="form-group" style={{fontSize: "18px", fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="passwordbox">Password</label>
                <input type="password" className="form-control" id="passwordbox" placeholder="Enter Password" required/>
            </div>
            <div className="form-group" style={{paddingBottom:"10px", fontSize: "18px", fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="passwordbox"> Confirm Password</label>
                <input type="password" className="form-control" id="passwordbox2" placeholder="Confirm Password" required/>
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
            </form>
        </div>
	)
}
