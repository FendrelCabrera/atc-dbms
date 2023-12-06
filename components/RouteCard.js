'use client'
import {React, useState} from 'react';
import styles from './card.module.css'
import RouteForm from './RouteForm'
import RemoveForm from './RemoveForm';

export default function Card({title, description, image, main, tab, othertab}) {
    const [showForm, setShowForm] = useState(0);

    const handleButtonClick = () => {
        if(showForm != 1){
            setShowForm(1);
        }
    };

    const handleOtherButtonClick = () => {
        if(showForm != 2){
            setShowForm(2);
        }
    };

    const handleMainButtonClick = () => {
        if(showForm != 0){
            setShowForm(0);
        }
    };

    // had div card border-dark width at 25rem 
	return (
        <div>
            <div class="card border-dark mb-3" style={{width: "400px", height: "505px"}}>
                <div className={styles['container']} style={{width: "398px", height: "374px"}}>
                {showForm == 2 ? (
                    <RemoveForm mode={3} title="Remove Route" boxtitle="Route Number" place="Enter Route" description="Confirm removal of established air route"/>
                ) : showForm == 1 ? (
                    <RouteForm />
                ) : (
                    <img src={image} class="card-img-top" alt="Boo"></img>
                )}
                </div>
        <div class="card-body">
        {showForm == 0 ? (
                    <div>
                                <h5 class="card-title" className={styles['cardbodytext']}>{title}</h5>
            <p class="card-text" className={styles['cardbodysmall']}>{description}</p>
                    </div>
                ) : null
        }
      </div>

        <div class="nav nav-tabs" id="nav-tab" role="tablist">

        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" onClick={handleMainButtonClick}>{main}</button>

        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={handleButtonClick}>{tab}</button>

        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={handleOtherButtonClick}>{othertab}</button>

    </div>
            </div>
    </div>
	)
}