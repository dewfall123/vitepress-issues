function getRouterConfig(langPrefix = '/') {
  return [
    {
      text: langPrefix === '/' ? 'Getting started' : '快速上手',
      link: `${langPrefix}`,
    },
    {
      text: langPrefix === '/' ? 'componentA' : '组件A',
      link: `${langPrefix}componnet`,
    },
  ];
}

module.exports = {
  getRouterConfig,
};
