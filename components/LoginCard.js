'use client'
import {React, useState} from 'react';
import styles from './card.module.css'
import Form from './Form'
import SignUpForm from './SignUpForm'

export default function LoginCard({login}) {
    // had div card border-dark width at 25rem 
	return (
        <div>
            <div class="card text-white bg-warning mb-3" style={{width: "420px", height: "525px", background: "#FFE424 radial-gradient(at center bottom, #FFE424, #FFA201)"}}>
            <div class="card mb-3" style={{width: "400px", height: "505px", background: "#FFF297 radial-gradient(at left top, #FFF297, #FFEE4B)"}}>
                <div className={styles['container']} style={{width: "398px", height: "374px"}}>
                {login == "Ye" ? (
                    <Form title="Login"/>
                ) : (
                    <SignUpForm />
                )}
                </div>
            </div>
            </div>
        </div>
	)
}
