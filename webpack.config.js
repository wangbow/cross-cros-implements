
module.exports = {
    entry: __dirname + "/public/index.js",
    output:{
        path: __dirname + "/dist",
        filename:"[name].js"
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader:"babel-loader"
                }
            }
        ],
    }
}