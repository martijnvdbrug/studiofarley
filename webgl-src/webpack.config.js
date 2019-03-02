var path = require("path");

module.exports = {
    mode: 'development',
    // entry: ['webpack/hot/dev-server' , './src/index.ts'],
    entry: ['./src/index.ts'],
    output: {
        filename: "../../js/webgl.js"
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    }
};
