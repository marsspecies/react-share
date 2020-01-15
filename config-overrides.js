const { override, fixBabelImports, addLessLoader, setWebpackPublicPath } = require('customize-cra');
const ENV = process.env.NODE_ENV;

module.exports = override(
    ENV === 'production' ? setWebpackPublicPath('/react-share/build') : null,
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