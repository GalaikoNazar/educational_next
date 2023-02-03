import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import A from "../../components/A";
import st from "./index.module.scss";

const Users = ({ users }) => (
	<Layout title='Users'>
		<ul>
			{users.map((item) => (
				<li key={item.id} className={st.user}>
					<A href={`/users/${item.id}`} text={item.name} />
				</li>
			))}
		</ul>
	</Layout >
)

export default Users;

export async function getStaticProps(context) {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users');
	const users = await resp.json();
	return {
		props: { users }, // will be passed to the page component as props
	}
}