const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const {
    override,
    addWebpackAlias,
    addWebpackModuleRule,
    addWebpackResolve,
} = require('customize-cra')

module.exports = {
    webpack: override(
        addWebpackAlias({
            '@': path.resolve(__dirname, './src'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@components': path.resolve(__dirname, './src/components')
        }),
        // this will cause error
        /* addWebpackModuleRule({
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }, {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                    exclude: /node_modules/
                }
            ]
        }), */
        //addWebpackResolve({extensions: ['.tsx', '.ts', '.js', '.json']}),
        (config) => {
            config.mode = 'development'
            config.entry = './src/index.tsx'
            config.output = {
                filename: 'main.js',
                path: path.resolve(__dirname, 'dist')
            }
            // this will cause error
            /* config.plugins = [
                new HtmlWebpackPlugin({template: "./public/index.html"})
            ] */
            return config
        },
    ),
    devServer: function (config) {
        config.port = 4000
        return config
    }
}