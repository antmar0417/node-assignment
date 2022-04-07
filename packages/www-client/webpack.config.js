const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
const webpack = require("webpack"); //to access built-in plugins

module.exports = {
    entry: {
        app: "./App.jsx",
    },

    output: {
        path: path.join(__dirname, "/public"),
        filename: "app.js",
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    devtool: "source-map",

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html",
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
