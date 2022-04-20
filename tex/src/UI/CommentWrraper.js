import './CommentWrraper.css'


function CommentWrraper(props) {
    let clases = 'wrapper   ' + props.className
  return (
      <div className={clases}>{props.children}</div>
  )
}
export default CommentWrraper  