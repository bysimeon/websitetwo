import React from "react"
import Arena from "are.na"

const arena = new Arena()

const Stream = ({}) => {
    let blogContent = {
        images: [],
        text: [],
        scrobbles: [],
        links: [],
        media: [],
        attachment: []
    }

    arena
        .channel("s-blog")
        .contents()
        .then(contents => {
            contents.map(item => {
                switch (item.class) {
                case "Image":
                    blogContent.images.push(item)
                    break
                case "Text":
                    blogContent.text.push(item)
                    break
                case "Link":
                    blogContent.links.push(item)
                    break
                case "Media":
                    blogContent.media.push(item)
                    break
                case "Attachment":
                    blogContent.attachemnt.push(item)
                    break
                default:
                    console.log("???")
                }
            })
        })
        .catch(err => console.log(err))

        
    return (
        <div className="stream-container">
        </div>
    )
}

export default Stream