import yo from 'yo-yo'
import layout from '../layout'
import listVideo from '../card-video-related'

export default function videoPlayer(idVideo, videosRelationated){
	console.log(idVideo, videosRelationated)
	let el = yo`<div class="container">
		<div class="row videoPlayer">
			<div  class="col s12 m10 offset-m1 l8 offset-l2 playedVideo">
				<div class="VideoPlayer" id="player">
					<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${idVideo}?controls=2&autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>
				</div>
			</div>
			<div  class="col s12 m10 offset-m1 l8 offset-l2 listVideos" id="list-videos">
				${videosRelationated.items.map(function(item){
					return listVideo(item)
				})}
			</div>
		</div>
	</div>`

	return layout(el)
}