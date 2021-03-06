const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SRC_PATH = path.join(__dirname, '../src');

module.exports = {
    entry: "./src/App.tsx",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../dist")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Soy un titulo do do do do',
            template: SRC_PATH + '/index.html',
            path: path.join(__dirname, '../dist/'),
            filename: 'index.html'
        })
    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "React": {
            commonjs: "React",
            commonjs2: "React"
        },
        "ReactDOM": {
            commonjs: "ReactDOM",
            commonjs2: "ReactDOM"
        }
    }
};