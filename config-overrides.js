const { override, fixBabelImports, addLessLoader } = require('customize-cra');


module.exports = override(
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