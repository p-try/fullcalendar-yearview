module.exports = {

    entry: './src/index.js',
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    externals: {
        jquery: {
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: 'jQuery'
        },
        moment: 'moment',

        // moment locale files reference the moment lib with a relative require.
        // use our e.viewsxternal reference instead.
        '../moment': 'moment',

        // plugins reference the root 'fullcalendar' namespace
        fullcalendar: {
            commonjs: 'fullcalendar',
            commonjs2: 'fullcalendar',
            amd: 'fullcalendar',
            root: 'FullCalendar'
        }
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                loader: 'awesome-typescript-loader',
                options: {
                    useCache: true
                }
            }

        ]
    },
    output: {
        library: 'FullCalendar', // gulp will strip this out for plugins
        libraryTarget: 'umd',
        filename: '[name].js'
    },
    watch: true

};