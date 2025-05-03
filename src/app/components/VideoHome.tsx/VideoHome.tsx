const VideoHome = () => {
    return (
        <div className="inset-0 w-full h-full">		
            <video
                autoPlay muted loop playsInline className="w-full h-full object-cover" src="/img/home-movie.mp4"
            ></video>
		</div>
    )
}

export default VideoHome