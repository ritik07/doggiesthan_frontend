import { getFeaturedBanner } from '../../elements/api/featuredbanner';
import { getHeaderBanner } from '../../elements/api/headerbanner';
import { getSubMaster, getProduct, getMaster, getParent } from '../../elements/api/product'
import { getBlog } from '../../elements/api/blog'
import { getBrand } from '../../elements/api/brand'
import * as ActionTypes from './actionTypes'
import { getCart } from '../../elements/api/cart';

export const updateFeatureBannerAction = (hardRefresh) => {
	return async (dispatch, getState) => {
		if (getState().allData.featureBanner.length <= 0 || hardRefresh) {
			let data = []
			try {
				let resp = await getFeaturedBanner();
				if (resp.status === "1") {
					data = resp.data;
				}
			} catch (err) {
				console.log(err)
			}
			dispatch({
				type: ActionTypes.updateFeatureBanner,
				payload: data
			});
		};
	}
};

export const updateMainBannerAction = (hardRefresh) => {
	return async (dispatch, getState) => {
		if (getState().allData.headerBanner.length <= 0 || hardRefresh) {
			let data = []
			try {
				let resp = await getHeaderBanner();
				if (resp.status === "1") {
					data = resp.data;
				}
			} catch (err) {
				console.log(err)
			}
			dispatch({
				type: ActionTypes.updateMainBanner,
				payload: data
			});
		};
	}
};

export const updateSubCategoryAction = (hardRefresh) => {
	return async (dispatch, getState) => {
		if (getState().allData.subCategory.length <= 0 || hardRefresh) {
			let data = []
			try {
				let resp = await getSubMaster();
				if (resp.status === "1") {
					data = resp.data;
				}
			} catch (err) {
				console.log(err)
			}
			dispatch({
				type: ActionTypes.updateSubCategory,
				payload: data
			});
		};
	}
};

export const updateProductsAction = (hardRefresh) => {
	return async (dispatch, getState) => {
		if (getState().allData.products.length <= 0 || hardRefresh) {
			let data = []
			try {
				let resp = await getProduct();
				if (resp.status === "1") {
					data = resp.data;
				}
			} catch (err) {
				console.log(err)
			}
			dispatch({
				type: ActionTypes.updateProducts,
				payload: data
			});
		};
	}
};

export const updateMasterAction = (hardRefresh) => {
	return async (dispatch, getState) => {
		if (getState().allData.category.length <= 0 || hardRefresh) {
			let data = []
			try {
				let resp = await getMaster();
				if (resp.status === "1") {
					data = resp.data;
				}
			} catch (err) {
				console.log(err)
			}
			dispatch({
				type: ActionTypes.updateMaster,
				payload: data
			});
		};
	}
};

export const updateParentAction = (hardRefresh) => {
	return async (dispatch, getState) => {
		if (getState().allData.parent.length <= 0 || hardRefresh) {
			let data = []
			try {
				let resp = await getParent();
				if (resp.status === "1") {
					data = resp.data;
				}
			} catch (err) {
				console.log(err)
			}
			dispatch({
				type: ActionTypes.updateParent,
				payload: data
			});
		};
	}
};


export const updateBlogDataAction = (hardRefresh) => {
	return async (dispatch, getState) => {
		if (getState().allData.blogData.length <= 0 || hardRefresh) {
			let data = []
			try {
				let resp = await getBlog();
				if (resp.status === "1") {
					data = resp.data;
				}
			} catch (err) {
				console.log(err)
			}
			dispatch({
				type: ActionTypes.updateBlogData,
				payload: data
			});
		};
	}
};

export const updateBrandAction = (hardRefresh) => {
	return async (dispatch, getState) => {
		if (getState().allData.brand.length <= 0 || hardRefresh) {
			let data = []
			try {
				let resp = await getBrand();
				if (resp.status === "1") {
					data = resp.data;
				}
			} catch (err) {
				console.log(err)
			}
			dispatch({
				type: ActionTypes.updateBrand,
				payload: data
			});
		};
	}
};

export const updateCompleteDataAction = (hardRefresh) => {
	return async (dispatch, getState) => {
		if (getState().allData.completeData.length <= 0 || hardRefresh) {
			let data = [];
			let mainCategory = []
			let category = []
			let subCategory = []
			let product = []
			try {
				mainCategory = await getParent();
				category = await getMaster();
				subCategory = await getSubMaster();
				product = await getProduct();

				if (mainCategory.status === "1" && category.status === "1" && subCategory.status === "1" && product.status === "1") {
					mainCategory = mainCategory.data;
					category = category.data;
					subCategory = subCategory.data;
					product = product.data;

					data = mainCategory.map(mainCategoryData => {
						return {
							...mainCategoryData, children: [
								...category.filter(data => data.parentId === mainCategoryData.id)
									.map(categoryData => {
										return {
											...categoryData,
											children: [
												...subCategory.filter(data => data.parentId === categoryData.id)
													.map(subCategoryData => {
														return {
															...subCategoryData,
															children: [
																...product.filter(data => data.subMasterId === subCategoryData.id)
															]
														}
													})
											]
										}
									})
							]
						}
					})

					// console.log(data);
				}
			} catch (err) {
				console.log(err)
			}
			dispatch({
				type: ActionTypes.updateCompleteData,
				payload: { data, category, subCategory, mainCategory, product }
			});
		};
	};
}

export const updateUserCartAction = (ip, hardRefresh) => {
	return async (dispatch, getState) => {
		let data = [];
		if (getState().allData.userCart.length <= 0 || hardRefresh) {
			try {
				let cartData = await getCart();
				if (cartData.status === "1") {
					data = cartData.data.filter(data => data.parentId === ip);
				}
			} catch (err) {
				console.log(err)
			}
			dispatch({
				type: ActionTypes.updateUserCart,
				payload: data
			});
		};
	}
};