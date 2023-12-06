'use client'
import { useEffect, useState } from 'react'
import styles from './boarding.module.css'
import axios from 'axios'

export default function Boarding({boarding}) {
	const [ shd, setSHD ] = useState({})

	useEffect(() => {
		axios.get('http://localhost:5000/all_routes').then(
			(resp) => {
				console.log(resp.data)
				setSHD(resp.data)
			}
		).catch(
			(err) => console.log(err)
		)
	}, [])


	return (
		<div className='col-md-6' style={{ backgroundColor: "rgba(30,30,20,0.8)",
		 borderBottom: "var(--border)", width: "50%", borderRadius: "20px"}}>
			<div className={styles['heading-part']}>
				{/* <h1 className={styles['heading']}>IX352 22:20 A SHARJAH</h1>
				<h1 className={styles['heading']}>IX343 22:30 D ..DUBAI</h1>
				<h1 className={styles['heading']}>IX337 23:20 D .MUSCAT</h1>
				<h1 className={styles['heading']}>6E147 23:35 D ..DUBAI</h1>
				<h1 className={styles['heading']}>SG53. 23:50 D ..DUBAI</h1>
				<h1 className={styles['heading']}>QR536 02:10 A ...DOHA</h1>
				<h1 className={styles['heading']}>G9454 02:55 A SHARJAH</h1> */}
				{
					Object.entries(shd).map((item) => 
						<h1 key={item[0]} className={styles['heading']} style={{whiteSpace: "pre"}}>{item[1].join(' ')}</h1>
					)
				}
			</div>
		</div>
	)
}
