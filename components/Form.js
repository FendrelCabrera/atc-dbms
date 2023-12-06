import React, { useContext } from 'react';
import styles from "./form.module.css"
import { adminLogin, userLogin } from '@/app/components/loginHelper';
import { Auth } from '@/app/page';

export default function Form({title}) {
    const { setUser } = useContext(Auth)

    const loginHandler = (e) => {
        e.preventDefault();

        let email = e.target.querySelector('#emailbox').value
        let pass = e.target.querySelector('#passwordbox').value

        if(email != 'admin') {
            userLogin(email, pass).then(
                (cid) => {
                    if(cid == -1)
                        alert("Bad Credentials");
                    else
                        setUser(cid)
                }
            )
        } else {
            adminLogin(pass).then(
                (test) => {
                    if(test)
                        setUser(-1);
                    else
                        alert("Bad Credentials");
                }
            )
        }
    }

	return (
        <div>
            <form onSubmit={loginHandler} style={{padding: "10px", height: "375px"}}>
            <div>
                <h1 className={styles['formtext']} style={{textAlign:"center", paddingBottom:"75px"}}>{title}</h1>
            </div>
            <div className="form-group" style={{paddingBottom:"20px", fontSize: "18px", 
            fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="emailbox">E-mail address</label>
                <input className="form-control" id="emailbox" aria-describedby="emailHelp" required placeholder="Enter e-mail" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group" style={{paddingBottom:"20px", fontSize: "18px", 
            fontFamily: "WalkwayUltraBold, sans-serif"}}>
                <label htmlFor="passwordbox">Password</label>
                <input type="password" required className="form-control" id="passwordbox" placeholder="Enter Password" />
            </div>
            <button type="submit" className="btn btn-warning">Submit</button>
            <p className={styles['formbodytext']} style={{paddingTop:"20px"}}>Don't have an account? <a href="/signup">Sign up</a></p>
            </form>
        </div>
	)
}
