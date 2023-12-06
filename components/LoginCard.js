'use client'
import {React, useState, useContext} from 'react';
import styles from './card.module.css'
import Form from './Form'
import SignUpForm from './SignUpForm'
import { Auth } from '@/app/page';
import { userLogin, adminLogin } from '@/app/components/loginHelper';

export default function LoginCard() {
    const { setUser } = useContext(Auth)
    const [login, setLogin] = useState(1);

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
    // had div card border-dark width at 25rem 
	return (
        <div>
            <div className="card text-white bg-warning mb-3" style={{width: "420px", height: "525px", background: "#FFE424 radial-gradient(at center bottom, #FFE424, #FFA201)"}}>
            <div className="card mb-3" style={{width: "400px", height: "505px", background: "#FFF297 radial-gradient(at left top, #FFF297, #FFEE4B)"}}>
                <div className={styles['container']} style={{width: "398px", height: "374px"}}>
                { login ? (
                    <div>
                        <form onSubmit={loginHandler} style={{padding: "10px", height: "375px"}}>
                            <div>
                                <h1 className={styles['formtext']} style={{textAlign:"center", paddingBottom:"75px"}}>Login</h1>
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
                            <p className={styles['formbodytext']} style={{paddingTop:"20px"}}>Don't have an account? <button onClick={() => setLogin(0)}>Sign up</button></p>
                        </form>
                    </div>
                ) : (
                    <SignUpForm />
                )}
                </div>
            </div>
            </div>
        </div>
	)
}
