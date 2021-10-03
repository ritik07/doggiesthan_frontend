import * as ActionTypes from '../actions/actionTypes';

const initalState = {
  featureBanner: [],
  headerBanner: [],
  parent: [],
  category: [],
  subCategory: [],
  products: [],
  completeData: [],
  blogData: [],
  brand: [],
  userCart: []
};

export const allData = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.updateFeatureBanner:
      return { ...state, featureBanner: action.payload };
    case ActionTypes.updateMainBanner:
      return { ...state, headerBanner: action.payload };
    case ActionTypes.updateSubCategory:
      return { ...state, subCategory: action.payload };
    case ActionTypes.updateProducts:
      return { ...state, products: action.payload };
    case ActionTypes.updateMaster:
      return { ...state, category: action.payload };
    case ActionTypes.updateParent:
      return { ...state, parent: action.payload };
    case ActionTypes.updateCompleteData:
      return {
        ...state, completeData: action.payload.data, products: action.payload.product, category: action.payload.category,
        subCategory: action.payload.subCategory, parent: action.payload.mainCategory
      };
    case ActionTypes.updateBlogData:
      return { ...state, blogData: action.payload };
    case ActionTypes.updateBrand:
      return { ...state, brand: action.payload };
    case ActionTypes.updateUserCart:
      return { ...state, userCart: action.payload };
    default:
      return state;
  }
};
