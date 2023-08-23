import Gst from 'gi://Gst';

export class Sound {

	playbin;
	bus;

	ini(){
		Gst.init(null);
		this.playbin = Gst.ElementFactory.make('playbin', 'playbin');
	}

	pause() {
		this.playbin.set_state(Gst.State.PAUSED);
	}

	play(url) {
		this.playbin.set_property('uri', url);
		this.playbin.set_state(Gst.State.PLAYING);
	}

	destroy() {
		this.playbin.set_state(Gst.State.NULL);
		//this.playbin.unref();
	}

}
