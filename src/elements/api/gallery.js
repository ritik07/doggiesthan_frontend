import { toast } from "react-toastify";
import { modifyFetch } from "../../lib/apiHelper";

let URL = "http://arihantchemical.in/petapi/gallery";

export const setGallery = async (query, files) => {
    let formData = new FormData();
    for ( var key in query ) {
        formData.append(key, query[key]);
    }
	for (var index = 0; index < files.length; index++) {
		formData.append("files[]", files[index]);
	}
	const response = await modifyFetch(`${URL}/gallery.php`, {
		method: 'POST',
		body: formData
	});
	const body = await response.json();
	if (response.status !== 200) { toast.error(body.message || "some error occured, please try sometime later"); }
	return body;
};

export const getGallery = async () => {
	const response = await modifyFetch(`${URL}/gallery.php`);
	const body = await response.json()
	if (response.status !== 200) { toast.error(body.message || "some error occured, please try sometime later"); }
	return body;
}

