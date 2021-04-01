import { Avatar } from '@material-ui/core'
import React, {forwardRef} from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
 

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {

    
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltIcon} title="Like" color="grey"/>
                <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="grey"/>
                <InputOption Icon={ShareIcon} title="Share" color="grey"/>
                <InputOption Icon={SendIcon} title="Send" color="grey"/>
            </div>
        </div>
    )
})

export default Post
