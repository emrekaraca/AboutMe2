import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<ul className={styles.footerLink}>
				<a
					href='https://twitter.com/dasom_won'
					target='_blank'
					rel='noopener noreferrer'
				>
					<li className={styles.twitter}></li>
				</a>
                <a
					href='https://github.com/wondasom'
					target='_blank'
					rel='noopener noreferrer'
				>
				<li className={styles.github}></li></a>
                <a
					href='https://www.linkedin.com/in/dasom-won-8a1594190/'
					target='_blank'
					rel='noopener noreferrer'
				>
				<li className={styles.linkedin}></li></a>
				{/* <li className={styles.behance}></li> */}
			</ul>
		</div>
	);
};

export default Footer;
