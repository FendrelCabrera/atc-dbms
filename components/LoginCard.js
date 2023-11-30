'use client'
import {React, useState} from 'react';
import styles from './card.module.css'
import Form from './Form'
import SignUpForm from './SignUpForm'

export default function LoginCard({login}) {
    // had div card border-dark width at 25rem 
	return (
        <div>
            <head>
                <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' />
            </head>
            <div class="card border-dark mb-3" style={{width: "400px", height: "505px"}}>
                <div className={styles['container']} style={{width: "398px", height: "374px"}}>
                {login == "Ye" ? (
                    <Form title="Login"/>
                ) : (
                    <SignUpForm />
                )}
                </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
            </div>
        </div>
	)
}
