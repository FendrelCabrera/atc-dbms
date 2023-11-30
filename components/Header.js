import styles from './header.module.css'

export default function Header({heading}) {
	return (
		<div className={styles['container']}>
			<div className={styles['heading-part']}>
				<h1 className={styles['heading']}>{heading}</h1>
			</div>
		</div>
	)
}
