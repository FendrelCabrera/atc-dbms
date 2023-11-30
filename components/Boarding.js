import styles from './boarding.module.css'

export default function Boarding({boarding}) {
	return (
		<div className={styles['container']}>
			<div className={styles['heading-part']}>
				<h1 className={styles['heading']}>{boarding}</h1>
				<h1 className={styles['heading']}>{boarding}</h1>
				<h1 className={styles['heading']}>{boarding}</h1>
				<h1 className={styles['heading']}>{boarding}</h1>
				<h1 className={styles['heading']}>{boarding}</h1>
				<h1 className={styles['heading']}>{boarding}</h1>
				<h1 className={styles['heading']}>{boarding}</h1>
			</div>
		</div>
	)
}
