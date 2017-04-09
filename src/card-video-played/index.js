import yo from 'yo-yo'

export default function playedVideo(idVideo, idVideoNext){
	var template = yo`<div class="VideoPlayer" id="player">
		<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${idVideo}?controls=2&autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>
	</div>`

	return template
}