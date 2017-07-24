const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

//Javascript rule on what to do with our js files
//The rule is we run them through babel
const javascript = {
    test: /\.(js)$/,
    use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
    }],
};

//This postCSS loader is used in the next loader.
const postcss = {
    loader: 'postcss-loader',
    options: {
        plugins() { return [autoprefixer({browser: 'last 3 versions' })]; }
    }
};

//The sass/css loader handles files that are required in a js file,
//require('something.scss') for instance.
const styles = {
    test: /\.(scss)$/,
    use: ExtractTextPlugin.extract(['css-loader?sourceMap', postcss, 'sass-loader?sourceMap'])
};


const config = {
    entry: {
        //We can have multiple entries if we feel like it, only one for now
        App: './public/javascripts/deli.js'
    },
    //Webpack sees everything as modules. Different loaders/rules are
    //responsible for different file types. We pass the rules for our js files
    //and styles
    module: {
        rules: [javascript]
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        //[name] is a webpack specific substitution
        //name will be the 'App' because that is what we used above in our entry
        //subsitiutions are useful for when you have multiple entry points, each
        //entry point will have its own output. We can use the file's name to
        //create a unique bundle for it.
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    plugins: [
        new ExtractTextPlugin('style.css'),
    ]
};

//webpack hates packages using the soon deprecated API
process.noDeprecation = true;

module.exports = config;
