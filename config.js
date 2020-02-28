module.exports = {
  name: 'Title Your Website',
  domain: 'example.com',
  ogDescription: 'Description Your Website',
  googleAnalyticsTrackingId: '',
  facebookChat: {
    pageId: '',
    appId: '',
    htmlRef: '',
  },
  GTAG_ID: '', //https://tagmanager.google.com/
  urlWebsiteDefine: {
    categoriesCombos: [
      {
        name: 'danh-sach-san-pham',
        pattern: '/danh-sach-san-pham',
        page: 'categories',
        slug: false,
      },
    ],
    category: [
      { name: 'tieng-anh', pattern: '/tieng-anh', page: 'sub-categories', slug: false },
      { name: 'tieng-hoa', pattern: '/tieng-hoa', page: 'sub-categories', slug: false },
    ],
    categoryOptions: [
      { name: 'san-pham-tieng-anh', pattern: '/tieng-anh/:slug', page: 'products', slug: true },
      { name: 'san-pham-tieng-hoa', pattern: '/tieng-hoa/:slug', page: 'products', slug: true },
    ],
  },
};
