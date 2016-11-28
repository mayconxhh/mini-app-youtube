import yo from 'yo-yo'
import layout from '../layout'
import cardVideoList from '../card-video-list'

export default function templateVideoList(result){
	var el = yo`<div class="container">
		<div class="row">
			<div  class="col s12 m10 offset-m1 l8 offset-l2 listVideos" id="list-videos">
				${result.items.map(function(item){
					return cardVideoList(item)
				})}
			</div>
		</div>
	</div>`

	return layout(el)
}