const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        compress: true,
        port: 3001
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                meta: {
                    viewport: "width=device-width, initial-scale=1"
                },
                title: "Foo Bar"
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'ts-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ],
                    plugins: [
                        '@babel/plugin-transform-spread',
                        '@babel/plugin-proposal-object-rest-spread'
                    ]
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    }
}