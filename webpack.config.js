const webpack = require('webpack')

module.exports = {
	entry: './ex/index.js',
	
	output: {
		path: __dirname + '/public',
		filename: './bundle.js' 
	},

	devServer: {
		port: 8080,
		contentBase: './public'
	},

	module: {
		loaders: [{ //fala quem vai fazer o carregamentos dos arquivos
			test: /.js?$/, //fala que ira ler todos os arquivos js
			loader: 'babel-loader', //usa o babel como loader
			exclude: /node_modules/, //nao le os arquivos js da pasta node_modules
			query: {
				presets: ['es2015'], //trabalha com o es6 para compilar para uma versao compativel ao browser
				plugins: ['transform-object-rest-spread']
			}
		}]
	}

}