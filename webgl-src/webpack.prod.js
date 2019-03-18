
module.exports = {
    mode: 'production',
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
    }
};
