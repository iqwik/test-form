const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const cssProcessing = ({ withModules = true }) => {
    return {
        test: withModules ? /\.module\.(css|s[ac]ss)$/ : /^((?!\.module).)*\.(css|s[ac]ss)$/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: { esModule: false },
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    ...(withModules ? {
                        modules: {
                            localIdentName: '[folder]__[local]__[hash:base64:6]',
                        },
                    } : {}),
                    sourceMap: true,
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        plugins: ['autoprefixer'],
                    },
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    implementation: require.resolve('node-sass'),
                    sourceMap: true
                },
            },
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        path.resolve(__dirname, '../../src/styles/_variables.scss')
                    ],
                }
            },
        ],
    }
}

module.exports = cssProcessing
