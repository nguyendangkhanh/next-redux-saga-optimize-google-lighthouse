/* istanbul ignore next */
import cookie from 'cookie';
import cookies from 'js-cookie';

import Project from '../redux/project';
import _ from 'lodash';
import siteConfig from '../config';
import { isMobile } from 'react-device-detect';

const API = {
  getValueByAtrributes(attributeValues, key) {
    let t = _.find(attributeValues, {
      attribute: { name: key },
    });
    return t ? t['value'] : 'Hàng có sẵn';
  },
  getValueByCategories(categoryOptions, name, key) {
    return this.getValueByAtrributes(
      _.find(categoryOptions, {
        name: name,
      })['attributeValues'],
      key,
    );
  },
  getSupportsFromCategoryOptions(categoryOptions) {
    let supports = _.map(siteConfig.urlWebsiteDefine.guarantee, ite => {
      return ite['pattern'];
    });
    return _.filter(categoryOptions, function(o) {
      return _.includes(supports, `/${o['code']}`);
    });
  }, 
  getNewsFromCategories(categories) {
    let news = _.map(siteConfig.urlWebsiteDefine.categoriesNews, ite => {
      return ite['pattern'];
    });
    return _.filter(categories, function(o) {
      return _.includes(news, `/${o['code']}`);
    });
  },
  getHotProducts(categoryOptions) {
    const seft = this;
    return _.chain(categoryOptions)
      .filter(function(o) {
        return _.find(o.attributeValues, {
          value: 'true',
          attribute: {
            name: 'HotProduct',
            id: 'hzvIm6orvtx',
          },
        });
      })
      .sortBy(function(o) {
        let order = seft.getValueByAtrributes(o['attributeValues'], 'Sort');
        return order;
      })
      .map(ite => {
        return seft.converToDetails(ite);
      })
      .value();
  },
  converToDetails(ite) {
    let obj = {};
    const seft = this;

    _.forEach(ite['attributeValues'], l => {
      let key = l['attribute']['name'].toLowerCase();
      obj[key] = seft.getValueByAtrributes(ite['attributeValues'], l['attribute']['name']);
    });
    if (ite.hasOwnProperty('categories') && ite['categories'].length > 0) {
      obj['categories'] = {
        name: ite['categories'][0]['name'],
        code: ite['categories'][0]['code'],
        id: ite['categories'][0]['id'],
      };
    }
    obj['code'] = ite['code'];
    obj['id'] = ite['id'];
    obj['name'] = ite['name'];

    return obj;
  },
  getStoredToken(req) {
    if (req) {
      const parsedCookies = cookie.parse(req.headers.cookie || '');
      return parsedCookies && parsedCookies.token;
    }
    cookies.get('token');
  },
  getDeviceUser(req) {
    if (req) {
      return /mobile/i.test(req.headers['user-agent']) ? true : false;
    }
    return isMobile;
  },
  getStoredLocale(req) {
    if (req) {
      // Attempt to get locale saved cookie
      const parsedCookies = cookie.parse(req.headers.cookie || '');
      if (parsedCookies.locale) {
        return parsedCookies.locale;
      }
      // Attempt to retrieve local from Accept-Language headers
      if (req.headers && req.headers['accept-language']) {
        const parsedLocale = req.headers['accept-language'].split(',')[0];
        if (parsedLocale) {
          return parsedLocale;
        }
      }
    }
    return 'en';
  },
  setStoredLocale(v) {
    return cookies.set('locale', v);
  },
  ajaxHandler(type, e) {
    return { type, error: e.message };
  },
  logout() {
    cookies.remove('token');
    Router.replace('/');
  },
  loggedIn() {
    Router.replace('/markup');
  },
  getStoredToken(req) {
    if (req) {
      const parsedCookies = cookie.parse(req.headers.cookie || '');
      return parsedCookies && parsedCookies.token;
    }
    cookies.get('token');
  },
  getStoredLocale(req) {
    if (req) {
      // Attempt to get locale saved cookie
      const parsedCookies = cookie.parse(req.headers.cookie || '');
      if (parsedCookies.locale) {
        return parsedCookies.locale;
      }
      // Attempt to retrieve local from Accept-Language headers
      if (req.headers && req.headers['accept-language']) {
        const parsedLocale = req.headers['accept-language'].split(',')[0];
        if (parsedLocale) {
          return parsedLocale;
        }
      }
    }
    return 'vi';
  },
  setStoredLocale(v) {
    return cookies.set('locale', v);
  },
  setStoredToken(v) {
    return cookies.set('token', v);
  },
  trackEvent(data) {
    if (__DEV__) {
      // eslint-disable-next-line
      console.info('track', data);
    }

    if (Project.ga) {
      if (!data) {
        // eslint-disable-next-line
        console.error('GA: Passed null event data');
        return;
      }
      if ((!data || !data.category || !data.event) && __DEV__) {
        // eslint-disable-next-line
        console.error('Invalid event provided', data);
      }
      ga('send', {
        hitType: 'event',
        eventCategory: data.category,
        eventAction: data.event,
        eventLabel: data.label,
      });
    }

    if (Project.mixpanel) {
      if (!data) {
        // eslint-disable-next-line
        console.error('MIXPANEL: Passed null event data');
      }
      if (!data || !data.category || !data.event) {
        // eslint-disable-next-line
        console.error('MIXPANEL: Invalid event provided', data);
      }
      mixpanel.track(data.event, {
        category: data.category,
      });
    }
  },
  trackPage(title) {
    if (Project.ga) {
      ga('send', {
        hitType: 'pageview',
        title,
        location: document.location.href,
        page: document.location.pathname,
      });
    }

    if (Project.mixpanel) {
      mixpanel.track('Page View', {
        title,
        location: document.location.href,
        page: document.location.pathname,
      });
    }
  },
  alias(id) {
    if (Project.mixpanel) {
      mixpanel.alias(id);
    }
  },
  identify(id) {
    if (Project.mixpanel) {
      mixpanel.identify(id);
    }
  },
  register(email, firstName, lastName) {
    if (Project.mixpanel) {
      mixpanel.register({
        Email: email,
        'First Name': firstName,
        'Last Name': lastName,
      });
    }
  },
  reset() {
    if (Project.mixpanel) {
      mixpanel.reset();
    }
  },
  log(namespace, ...args) {
    if (Project.logs[namespace]) {
      console.log.apply(this, [namespace, ...args]);
    }
  },
};

global.API = API;
export default API;
