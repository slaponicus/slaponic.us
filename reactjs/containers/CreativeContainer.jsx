import React from "react"
import PicturesContainer from "./PicturesContainer"

const styles = {
	bandcamp: {
		border: "0", 
		width: "50%", 
		height: "auto",
		border: "0",
		textAlign: "center",
		display: "block",
		margin: "0 auto",
	}
}

export default class CreativeContainer extends React.Component {
	render() {
		return (
			<div className="col-lg-12 text-center">
				<h1>🖌️🎶</h1>
				<br/>
				<p>
				I make weird electronic music as alptrack and footwork music with my friend Dave as PHF. I also help run <a href="https://secondmoonrecords.bandcamp.com/">Second Moon Records</a> and have a radio show 
				on <a href="http://datafruits.fm" target="_blank">Datafruits</a> every other week where I DJ some of my favorite music. 
				</p>
				<div>
				<iframe style={styles.bandcamp} src="https://bandcamp.com/EmbeddedPlayer/album=542863520/size=medium/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless>
					<a href="http://alptrack.bandcamp.com/album/alppack-v-1">alpPACK v.1 by alptrack</a>
				</iframe>
				<br />
				<iframe width="100%" height="auto" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/281164356&amp;
				auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
				</div>
				<br />
				<p>
				Here's some visual art I've done to accompany some of the music.
				</p>
				<br />
				<PicturesContainer />
			</div>
			)
	}
}
