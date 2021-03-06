module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'CoreUIReact',
      externals: {
        react: 'React',
        'react-dom': 'ReactDom',
        'react-dom/server': 'ReactDomServer',
        'react-router': 'ReactRouter',
        'react-router-dom': 'ReactRouterDom',
        '@coreui/icons-react': 'CoreUIIconsReact'
      }
    }
  }
}
