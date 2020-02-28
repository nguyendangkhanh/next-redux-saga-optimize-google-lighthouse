import siteConfig from '../config';
export default (
  state = {
    isConnected: true,
  },
  action,
) => {
  if (typeof window === 'undefined') {
    API.log('SERVER', action.type);
  } else {
    API.log('DISPATCHER', action.type);
  }
  switch (action.type) {
    case Actions.FETCH_METADATA_ASYNC:
      return state;
    case Actions.FETCH_METADATA_ASYNC_SUCCEED:
      switch (action.data.metadataType) {
        case 'categoryOptions':
          return {
            ...state,
            [action.data.metadataType]: action.data.list,
            // banners: JSON.parse(API.getValueByCategories(action.data.list, 'Meta-Banner', 'Images')),
            // supports: API.getSupportsFromCategoryOptions(action.data.list),
            // hotProducts: API.getHotProducts(action.data.list),
          };
        case 'categories':
          return {
            ...state,
            [action.data.metadataType]: action.data.list,
            // news: API.getNewsFromCategories(action.data.list),
          };
        case 'categoryCombos':
          return {
            ...state,
            [action.data.metadataType]: _.filter(action.data.list, function(ite) {
              if (_.findIndex(siteConfig.urlWebsiteDefine.categoriesCombos, { name: ite['code'] }) !== -1) {
                return true;
              }
            }),
          };
        default:
          return {
            ...state,
            [action.data.metadataType]: action.data.list,
          };
      }
    // return {
    //   ...state,
    //   [action.data.metadataType]: action.data.list,
    // };
    case Actions.TOGGLE_LOADER:
      return {
        ...state,
        [action.data.component]: action.data.showLoader,
      };
    case Actions.IS_MOBILE_LOADER:
      return { ...state, isMobile: true };
    case Actions.IS_MOBILE_LOADER_SUCCEED:
      return { ...state, isMobile: action.data.isMobile };
    case Actions.LOGIN:
      return { ...state, userLoading: true };
    case Actions.LOGIN_LOADED:
      return { ...state, userLoading: false, user: action.data };
    case Actions.LOGIN_ERROR:
      return { ...state, userLoading: false, userError: action.data };

    case Actions.GET_WIDGETS:
      return { ...state, widgetsLoading: true };
    case Actions.GET_WIDGETS_LOADED:
      return { ...state, widgetsLoading: false, widgets: action.data };
    case Actions.GET_WIDGETS_ERROR:
      return { ...state, userLoading: false, widgetsError: action.data };

    case Actions.STARTUP_LOADED:
      return { ...state, ...action.data };
    case Actions.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
