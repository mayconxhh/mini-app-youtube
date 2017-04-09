import yo from 'yo-yo'
import empty from 'empty-element'

export default function header(ctx, next){
	var el = yo`<div class="Header">
		<nav>
			<div class="nav-wrapper Header__container">
				<h1 class="Header__container--title brand-logo"><a href="/"class="Logo">WEB VIDEOS</a></h1>
				<a href="#" data-activates="mobile-demo" class="button-collapse"><i class="fa fa-bars" aria-hidden="true"></i></a>
				<ul class="right hide-on-med-and-down Header__container--list">
					<li>
						<div class="nav-wrapper content-search">
							<form>
								<div class="input-field">
									<input id="search" type="search" required onkeypress=${searchResults}/>
									<label for="search" class="icon-search"><i class="material-icons fa fa-search" aria-hidden="true"></i></label>
									<i class="material-icons fa fa-times" aria-hidden="true"></i>
								</div>
							</form>
						</div>
					</li>
				</ul>
				<ul class="side-nav Header__container--list" id="mobile-demo">
					<li>
						<div class="nav-wrapper content-search">
							<form>
								<div class="input-field mobile">
									<input id="search-mobile" type="search" required onkeypress=${searchResults}/>
									<label for="search-mobile" class="icon-search"><i class="material-icons fa fa-search" aria-hidden="true"></i></label>
									<i class="material-icons fa fa-times" aria-hidden="true"></i>
								</div>
							</form>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	</div>`

	function searchResults(ev){
		if (ev.which === 13) {
			ev.preventDefault()
			var q = this.value
			if (q !== '') {
				var texto = q.replace(/\s/g, '+')
				location.href=`/search/results?${texto}`
			}
		}
	}

	var container = document.getElementById('header-container')
	empty(container).appendChild(el)
	$('.button-collapse').sideNav()
	next()
}