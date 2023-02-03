import Link from "next/link";
import clsx from "clsx";
import st from "./A.module.scss";
import { useRouter } from "next/router";

const A = ({ href, text, isForHeader = false }) => {
	const { asPath } = useRouter();

	return (
		<Link className={clsx(st.link, {
			[st['for_header']]: isForHeader,
			[st['active']]: asPath === href
		})}
			href={href}
		>
			{text}
		</Link >
	)
}

export default A;