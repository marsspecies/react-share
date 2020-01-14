const { override, fixBabelImports, addLessLoader, setWebpackPublicPath } = require('customize-cra');


module.exports = override(
    setWebpackPublicPath('/react-share/build'),
    fixBabelImports('import', {
        libaryName: 'antd',
        libaryDirectory: 'es',
        style: 'true'
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primaryColor': '#333',
            '@backgroundColor-nav': '#32c2e4'
        }
    })
)