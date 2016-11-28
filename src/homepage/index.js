import page from 'page'
import header from '../header'
import empty from 'empty-element'
import request from 'superagent'
import template from './template'
import variable from '../const'

const variables = variable()

page('/', header, loadVideos, function(ctx, next){
	var main = document.getElementById('main-container')
	empty(main).appendChild(template(ctx.result))
})

function loadVideos(ctx, next){
	request
		.get(variables.searchDefault)
		.query({
			part: 'snippet, id',
			// type: 'video',
			q: '',
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