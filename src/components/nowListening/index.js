import React, { Component } from "react"
import "./style.scss"

const apikey = "a7f8dd0989ae6f42d1be2c4427767c6f"
const apibase = "https://ws.audioscrobbler.com/2.0/"
const user = "theblindlookout"

class NowListening extends Component {
    constructor() {
        super()
        this.state = {
            playing: null,
            songName: null,
            songUrl: null,
            artistName: null,
            artistUrl: null,
            notScrobbling: "nothing, but recently heard",
            userProfile: "https://www.last.fm/user/" + user,
            setInterval: false,
            limit: 2,
            recentTracks: null
        }
    }

    getJSON(request) {
        let xhr = new XMLHttpRequest()
        xhr.open(
            "GET",
            apibase +
            "?method=user." +
            request +
            "&user=" +
            user +
            "&limit=" +
            this.state.limit +
            "&api_key=" +
            apikey +
            "&format=json"
        )
        xhr.onload = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    switch (request) {
                    case "gettopartists":
                        this.setState({
                            topArtists: JSON.parse(xhr.responseText)
                        })
                        break
                    case "gettoptracks":
                        this.setState({
                            topTracks: JSON.parse(xhr.responseText)
                        })
                        break
                    case "gettopalbums":
                        this.setState({
                            topAlbums: JSON.parse(xhr.responseText)
                        })
                        break
                    case "getinfo":
                        this.setState({
                            userInfo: JSON.parse(xhr.responseText)
                        })
                        break
                    case "getrecenttracks":
                        this.setState({
                            recentTracks: JSON.parse(xhr.responseText)
                        })
                        break
                    default:
                        break
                    }
                }
            }
        }
        xhr.send()
    }

    nowPlaying() {
        let json = this.state.recentTracks
        if (json) {
            let songName = json.recenttracks.track[0].name
            let artistName = json.recenttracks.track[0].artist["#text"]
            let playing
            if (typeof json.recenttracks.track[0]["@attr"] === "undefined") {
                playing = false
            } else {
                playing = true
            }
            if (songName.length >= 50) {
                if (songName.toLowerCase().includes("(f")) {
                    songName = songName.substr(0, songName.indexOf(" (f"))
                } else {
                    songName = songName.substr(0, 50) + "..."
                }
            }
            if (playing) {
                this.setState({
                    playing: playing,
                    songName: songName,
                    artistName: artistName,
                    songUrl: json.recenttracks.track[0].url,
                    artistUrl: "https://www.last.fm/music/" + artistName
                })
            } else {
                this.setState({
                    playing: false,
                    songName: songName,
                    artistName: artistName,
                    songUrl: json.recenttracks.track[0].url,
                    artistUrl: "https://www.last.fm/music/" + artistName
                })
            }
        }
    }

    componentDidMount() {
        this.nowPlaying()
        let recentInterval = setInterval(() => {
            this.getJSON("getrecenttracks")
            this.nowPlaying()
        }, 1000)
        this.setState({
            setInterval: recentInterval
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.setInterval)
    }

    render() {
        return (
            <div className="now-playing">
                {this.state.playing ? (
                    <div>
                        <a href="https://fm.bysimeon.com" className="hidden-link">
                            {" "}
                    listening to:{" "}
                        </a>
                        <span>
                            <a className="visible-link" id="songName" href={this.state.songUrl}>
                                {this.state.songName}
                            </a>
                            <span id="filler"> by </span>
                            <a className="visible-link" id="artistName" href={this.state.artistUrl}>
                                {this.state.artistName}
                            </a>
                        </span>
                    </div>
                ) : (
                    <div>
                        {/* <a href="https://fm.bysimeon.com" className="hidden-link">
                            {" "}
                    last heard:&nbsp;
                        </a>
                        <span>
                            <a id="songName" href={this.state.songUrl}>
                                {" "}
                                {this.state.songName}{" "}
                            </a>
                            <span id="filler"> by </span>
                            <a id="artistName" href={this.state.artistUrl}>
                                {" "}
                                {this.state.artistName}
                            </a>
                        </span> */}
                    </div>
                )}
            </div>
        )
    }
}

export default NowListening
