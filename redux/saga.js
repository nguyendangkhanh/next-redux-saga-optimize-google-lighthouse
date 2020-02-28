import { put, call, all, takeEvery, takeLatest } from 'redux-saga/effects';
import siteConfig from '../config';

import './actions';

const generateMetadataList = (result, metadataType) => {
  switch (metadataType) {
    case 'categoryOptions':
      return result[metadataType];
    case 'categories':
      return result[metadataType];
    case 'categoryCombos':
      return result[metadataType];
    default:
      break;
  }
};

export function* startup(action = {}) {
  const { token, ...rest } = action.data;
  const isOnline = typeof navigator === 'undefined' ? true : navigator.onLine;
  yield put({ type: Actions.STARTUP_LOADED, data: { ready: true, isOnline, ...rest } });
}
export function* deviceUser(action = {}) {
  const { isMobile, ...rest } = action.data;
  yield put({ type: Actions.IS_MOBILE_LOADER_SUCCEED, data: { isMobile, ...rest } });
}
export function* fetchMetaData(metadataType) {
  let query;
  let components;
  let data;
  switch (metadataType) {
    case 'categoryOptions':
      query = {
        templates: {
          resource: 'categoryOptions.json',
          params: {
            paging: 'false',
            fields:
              'id,name,code,shortName,displayName,categories[id,name,code],attributeValues[value,attribute[id,name]]',
            filter: 'name:ne:default',
          },
        },
      };
      components = ['getDataDhis2'];
      data = require("./offlineData/categoryOptions.json");
      break;
    case 'categories':
      query = {
        templates: {
          resource: 'categories.json',
          params: {
            paging: 'false',
            fields:
              'id,name,code,categoryOptions,categoryCombos[id,name],attributeValues[value,attribute[id,name]],items[name,shortName,id,code,attributeValues[value,attribute[id,name]]',
            filter: 'name:ne:default',
          },
        },
      };
      components = ['getDataDhis2'];
      data = require("./offlineData/categories.json");

      break;
    case 'categoryCombos':
      query = {
        templates: {
          resource: 'categoryCombos.json',
          params: {
            paging: 'false',
            fields: 'id,name,code,categories[id,name,code,attributeValues[value,attribute[id,name]],categoryOptions]',
            filter: 'name:ne:default',
          },
        },
      };
      components = ['getDataDhis2'];
      data = require("./offlineData/categoryCombos.json");
      break;
    default:
      break;
  }
  //const result = yield call(runQuery, query);
  const result = data;
  yield put(
    AppActions.fetchMetadataAsyncSucceed({
      metadataType,
      list: generateMetadataList(result, metadataType),
    }),
  );
}
export function* fetchMetadataFromApi() {
  yield put(AppActions.toggleLoader({ component: 'getDataDhis2', showLoader: true }));
  yield all([fetchMetaData('categoryOptions'), fetchMetaData('categories'), fetchMetaData('categoryCombos')]);

  yield put(AppActions.toggleLoader({ component: 'getDataDhis2', showLoader: false }));
}
function* rootSaga() {
  yield all([
    takeLatest(Actions.STARTUP, startup),
    takeLatest(Actions.IS_MOBILE_LOADER, deviceUser),
    takeLatest(Actions.FETCH_METADATA_ASYNC, fetchMetadataFromApi),
  ]);
}

export default rootSaga;
