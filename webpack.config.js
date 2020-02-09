const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new ReplaceInFileWebpackPlugin([{
            dir: 'dist',
            files: ['main.js'],
            rules: [{
                search: /@fullcalendar\/core/g,
                replace: 'FullCalendar'
            }]
        }])
    ],
    optimization: {
        minimize: false
    },
    externals: /(fullcalendar|moment)/i,
    output: {
        library: "FullCalendarYearView",
        libraryTarget: "umd",
        globalObject: "this",
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    }
};
