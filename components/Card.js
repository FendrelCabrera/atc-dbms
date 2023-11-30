'use client'
import {React, useState} from 'react';
import styles from './card.module.css'
import Form from './Form'
import AdminForm from './AdminForm'

export default function Card({title, description, image, main, tab, othertab}) {
    const [showForm, setShowForm] = useState(0);

    const handleButtonClick = () => {
        if(showForm != 1){
            setShowForm(1);
        }else{
            setShowForm(0);
        }
    };

    const handleOtherButtonClick = () => {
        if(showForm != 2){
            setShowForm(2);
        }else{
            setShowForm(0);
        }
    };
    // had div card border-dark width at 25rem 
	return (
        <div>
            <head>
                <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css' />
            </head>
            <div class="card border-dark mb-3" style={{width: "400px", height: "505px"}}>
                <div className={styles['container']} style={{width: "398px", height: "374px"}}>
                {showForm == 2 ? (
                    <Form />
                ) : showForm == 1 ? (
                    <AdminForm />
                ) : (
                    <img src={image} class="card-img-top" alt="Boo"></img>
                )}
                </div>
        <div class="card-body">
            <h5 className={styles['cardtext']} class="card-title">{title}</h5>
            <p class="card-text">{description}</p>
        </div>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">

        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">{main}</button>

        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={handleButtonClick}>{tab}</button>

        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={handleOtherButtonClick}>{othertab}</button>

      </div>
    </div>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
            </div>
	)
}
