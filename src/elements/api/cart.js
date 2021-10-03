import { toast } from "react-toastify";
import { modifyFetch } from "../../lib/apiHelper";

let URL = "http://arihantchemical.in/petapi/cart";

export const setCart = async (query) => {
	let formData = new FormData();
	for (var key in query) {
		formData.append(key, query[key]);
	}

	const response = await modifyFetch(`${URL}/cart.php`, {
		method: 'POST',
		body: formData
	});
	const body = await response.json();
	if (response.status !== 200) { toast.error(body.message || "some error occured, please try sometime later"); }
	return body;
};

export const getCart = async () => {
	const response = await modifyFetch(`${URL}/cart.php`);
	const body = await response.json()
	if (response.status !== 200) { toast.error(body.message || "some error occured, please try sometime later"); }
	return body;
}

