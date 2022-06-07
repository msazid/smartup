import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home/Home';

function App() {
  const [posts,setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://api.facthunt.in/fostergem/v1/post/list/public')
    .then(res=> res.json())
    .then(data=>setPosts(data.content))
  },[setPosts])
  return (
    <div className="App">
      <div className="container">
          {
            posts.map((post) => <Home key={post.postId} post={post}></Home> )
          }
      </div>
    </div>
  );
}

export default App;
