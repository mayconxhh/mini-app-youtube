import yo from 'yo-yo'
import layout from '../layout'
import videoPlayed from '../card-video-played'
import listVideo from '../card-video-related'

export default function videoPlayer(idVideo, videosRelationated){
	var idVideoNext = videosRelationated.items[0].id.videoId
	console.log(idVideoNext)
	let el = yo`<div class="container">
		<div class="row videoPlayer">
			<div  class="col s12 m10 offset-m1 l8 offset-l2 playedVideo">
				${videoPlayed(idVideo, idVideoNext)}
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