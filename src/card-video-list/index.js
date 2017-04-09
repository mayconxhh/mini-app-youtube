import yo from 'yo-yo'

export default function itemVideoList(result){
	var el

	function render(item){
		var date = new Date(item.snippet.publishedAt)
		var day = date.getDay() < 10 ? '0'+date.getDay() : date.getDay()
		var month = date.getMonth() < 10 ? '0'+ date.getMonth() : date.getMonth()
		var year = date.getFullYear()
		var publishedAt = `${day}-${month}-${year}`

		return yo`<div class="ItemVideo">
			<a href="${ item.id.videoId ? '/video/'+item.id.videoId : item.id.channelId ? '/channel/'+item.id.channelId : ''}">
				<div class="ItemVideo__content">
					<div class="ItemVideo__content--preview">
						<div class="Preview">
							<img class="${item.id.videoId ? 'video-preview' : 'channel-preview'}" src="${item.snippet.thumbnails.high.url}" alt="${item.snippet.title}" />
							<i class="fa fa-play-circle ${item.id.videoId ? 'icon-play' : 'none'}" aria-hidden="true"></i>
						</div>
					</div>
					<div class="ItemVideo__content--description">
						<h3 class="Title"><a href="${item.id.videoId ? '/video/'+item.id.videoId : '/channel/'+item.id.channelId}">${item.snippet.title}</a></h3>
						<div class="Channel"><a>${item.snippet.channelTitle}</a></div>
						<div class="PublishedAt"><p>${publishedAt}</p></div>
						<div class="Description"><p>${item.snippet.description}</p></div>
					</div>
				</div>
			</a>
		</div>`
	}

	el = render(result)
	return el
}