import styles from './boarding.module.css'

export default function Boarding({boarding}) {
	return (
		<div class='col-md-6' className={styles['board']} style={{ borderBottom: "var(--border)", width: "50%"}}>
			<div className={styles['heading-part']}>
				<h1 className={styles['heading']}>IX352 22:20 A SHARJAH</h1>
				<h1 className={styles['heading']}>IX343 22:30 D ..DUBAI</h1>
				<h1 className={styles['heading']}>IX337 23:20 D .MUSCAT</h1>
				<h1 className={styles['heading']}>6E147 23:35 D ..DUBAI</h1>
				<h1 className={styles['heading']}>SG53. 23:50 D ..DUBAI</h1>
				<h1 className={styles['heading']}>QR536 02:10 A ...DOHA</h1>
				<h1 className={styles['heading']}>G9454 02:55 A SHARJAH</h1>
			</div>
		</div>
	)
}
