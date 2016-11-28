import page from 'page'
import header from '../header'
import empty from 'empty-element'
import template from './template'
import request from 'superagent'
import variable from '../const'

const variables = variable()

page('/video/:id', header, loadVideosRelational, function(ctx, next){
	var main = document.getElementById('main-container')
	empty(main).appendChild(template(ctx.params.id, ctx.videosRelationated))
})

function loadVideosRelational(ctx, next){
	request
		.get(variables.searchDefault)
		.query({
			part :'snippet, id',
			relatedToVideoId: ctx.params.id,
			type: 'video',
			key: variables.key,
			maxResults: 20
		})
		.end(function(err, res){
			if (err) {
				return console.log(err)
			}
			ctx.videosRelationated = res.body
			next()
		})
}