import page from 'page'
import empty from 'empty-element'
import variable from '../const'
import request from 'superagent'
import header from '../header'
import template from './template'
var variables = variable()

page('/search/:valueSearch', header, loadVideos, function(ctx, next){
	var  main = document.getElementById('main-container')
	empty(main).appendChild(template(ctx.result))
})

function loadVideos(ctx, next){
	var url = ctx.path
	url = url.split('?')[1]
	url = url.split('+')
	var query
	for(var i = 0; i < url.length; i++){
	 if(i === 0){
	  query = url[i]
	 } else {
	  query = query + ' ' + url[i]
	 }
	}
	request
		.get(variables.searchDefault)
		.query({
			part: 'snippet, id',
			type: 'video',
			q: query,
			key: variables.key,
			maxResults: 20
		})
		.end(function(err, res){
			if (err) {
				return console.log(err)
			}
			ctx.result = res.body
			next()
		})
}