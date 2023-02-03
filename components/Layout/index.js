import styles from "./Layout.module.scss";
import A from "../A";
import Head from "next/head";

const Layout = ({ children, keywords, title }) => (
	<>
		<Head>
			{keywords && <meta keywords={`Learn next.js,  ${keywords}`} />}
			{title && <title>{title}</title>}
		</Head>

		<header className={styles.header}>
			<A isForHeader href='/' text="Home" />
			<A isForHeader href='/about' text="About" />
			<A isForHeader href='/users' text="Users" />
		</header>


		<div className={styles.wrapper}>
			{children}
		</div>
	</>
)

export default Layout;