'use client'
import {React, useState} from 'react';
import styles from './usercard.module.css'
import UserForm from './UserForm'

export default function UserCard() {
    // had div card border-dark width at 25rem 
	return (
        <div>
            <div class="card border-dark mb-3" style={{width: "700px", height: "545px", paddingLeft: "20px", paddingRight: "20px"}}>
                <div className={styles['container']}>
                    <UserForm />
                </div>
            </div>
        </div>
	)
}
