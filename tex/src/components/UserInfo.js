import CommentWrraper from "../UI/CommentWrraper"
import ComentAvatar from "./ComentAvatar";

import './UserInfo.css'


function UserInfo(props) {
  return (
    <CommentWrraper className='wrap'>

<div className='UserInfo'>
        
    <ComentAvatar author={props.author} />

    <div className="UserInfo-name">{props.author.name}</div>


</div>
    </CommentWrraper>

    
  )
}
export default UserInfo