import './App.css';
import Component from './components/Component'

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
function App() {

  return (  <Component 
    author={comment.author} 
    text={comment.text}
    date={comment.date}/> 
    );
    // под капотом ушинтип иштейт
    // return React.createElement('div',{},React.createElement(Component, {
    //   author:comment.author,
    //   text:comment.text,
    //    date:comment.date,
    // }))
}

export default App;
