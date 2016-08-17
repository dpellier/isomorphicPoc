import React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import styles from "isomorphic-style!css?modules!sass!./Header.scss";

export default withStyles(() => {
	const headerUrl  = 'images/header.png';

	return (
		<div className={styles.header}>
			<img className={styles.header__img} src={headerUrl} />
		</div>
	);
}, styles);
