module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './app/bundle.js'
    },
    resolve: {
        root:__dirname,
        alias:{

        },
        extensions: ['', '.js', '.jsx']
    },
    /*watch: true,*/

    module: {
        loaders: [{
            loader:'babel-loader',
            query:{
                presets:['react','es2015']
            },
            test:/\.jsx?$/,
            exclude:/(node_modules)/
        }]

    },
    /*devtool:'source-map'*/
};