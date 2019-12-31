export const state = () => ({
  activeMenu: '首页',
  menusList: [
    {
      'label': '首页',
      'router': '/'
    },
    {
      'label': '博客',
      'router': '/blog'
    },
    {
      'label': 'add',
      'class': 'add',
      'router': '/add'
    },
    {
      'label': '消息',
      'router': '/msg'
    },
    {
      'label': '我的',
      'router': '/me'
    }
  ]
});

export const mutations = {
  toggleMenu(state, menu) {
    state.activeMenu = menu;
  }
};
