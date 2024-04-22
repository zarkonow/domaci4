import {useParams} from "react-router-dom";
import VIDEOS from './../VIDEOS.json'

const Video = () => {

    const { id } = useParams()
    let videoFound = null

    VIDEOS.forEach(video => {
        if(video.id === id) {
            videoFound = video
        }

    })
    if(videoFound === null){
        return <h1>This video doesnt exist</h1>
    }
    return(
        <>
        <h3>{ videoFound.title }</h3>
            <p>{ videoFound.url }</p>
            <iframe src={videoFound.url}></iframe>
        </>
    )
}

export default Video