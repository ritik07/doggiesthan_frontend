import { toast } from "react-toastify";
import { modifyFetch } from "../../lib/apiHelper";

let URL = "http://arihantchemical.in/petapi/products";

export const setBrand = async (query, files) => {
    let formData = new FormData();
    for ( var key in query ) {
        formData.append(key, query[key]);
    }
	for (var index = 0; index < files.length; index++) {
		formData.append("files[]", files[index]);
	}
	const response = await modifyFetch(`${URL}/brand.php`, {
		method: 'POST',
		body: formData
	});
	const body = await response.json();
	if (response.status !== 200) { toast.error(body.message || "some error occured, please try sometime later"); }
	return body;
};

export const getBrand = async () => {
	const response = await modifyFetch(`${URL}/brand.php`);
	const body = await response.json()
	if (response.status !== 200) { toast.error(body.message || "some error occured, please try sometime later"); }
	return body;
}

