import Layout from "../../components/Layout";
import st from "./index.module.scss";

const User = ({ user }) => (
	<Layout keywords={user.name} title={`User: ${user.name}`}>
		<h1 className={st.user_name}>{user.name}</h1>
		<ul className={st.user_list_info}>
			<li><b>Email: </b>{user.email}</li>
			<li><b>Phone: </b>{user.phone}</li>
			<li><b>Website: </b>{user.website}</li>
		</ul>
	</Layout>
)

export default User;
export async function getServerSideProps({ params }) {
	const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
	const user = await resp.json();;
	return {
		props: { user }, // will be passed to the page component as props
	}
}