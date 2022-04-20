import ComentDate from "./ComentDate"
import UserInfo from "./UserInfo"

function Comment(props) {
  return (
    <div className="Comment">
    <div className='UserInfo'>
   
      
     <UserInfo author={props.author} />

       <div className='Comment-text'>
         {props.text}
       </div>
      <ComentDate  date={props.date} />
    </div>
  </div>
  )
}
export default Comment