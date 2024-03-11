import { useEffect } from "react";

const useNav = (title) => {
	useEffect(() => {
		document.title = title;
	}, [title]);
};
export default useNav;
