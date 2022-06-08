import { useEffect, useState } from 'react';
import './App.css';
import { BiBoltCircle } from 'react-icons/bi'
import { BsCircle, BsFacebook, BsTwitter,BsPlusLg, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { RiMenu3Fill } from 'react-icons/ri'
import { IoNotificationsCircle } from 'react-icons/io5'
import { AiOutlineAppstore } from 'react-icons/ai'
import { IoPersonOutline } from 'react-icons/io5'
function App() {
  const [posts, setPosts] = useState([]);
  const [close, setClose] = useState(false);
  useEffect(() => {
    fetch('https://api.facthunt.in/fostergem/v1/post/list/public')
      .then(res => res.json())
      .then(data => {
        console.log(data.content);
        setPosts(data.content)
      })
  }, [setPosts])
  const sideBar = () => {
    setClose(!close)
  }
  return (
    <div style={{ background: '#f9f9f9' }} className="App">
      <div className="row">
        <div className="col-12 col-md-5 col-lg-3" style={{userSelect:'none', cursor:'pointer'}}>
          {close &&
            <div className="card shadow m-3">
              <div className="d-flex  justify-content-between mx-4 my-3"><h4><BiBoltCircle></BiBoltCircle> SmartUp</h4>
                <h4><button onClick={sideBar} style={{ border: 'none', background: 'transparent' }}><RiMenu3Fill></RiMenu3Fill></button></h4>
              </div>
              <div>
                {
                  posts.slice(0, 1).map(post =>
                    <div className='d-flex   mx-4 align-items-center my-2'>
                      <img width='40' className='rounded-pill' src={post.user.profilePic} alt="" />
                      <h4 style={{ marginBottom: '0', fontWeight: '600' }} className='d-flex  w-100 justify-content-between align-items-center'>
                        <span className='ms-4'>Profile</span>
                        <span><span className='me-3'>12</span>
                          <span style={{ fontSize: '35px', color: 'orangered' }}><IoNotificationsCircle /></span></span>
                      </h4 >
                    </div>
                  )
                }
              </div>
              <div style={{backgroundColor:'#D8E8EE', borderLeft:'2px solid'}} className='d-flex align-items-center justify-content-between'>
                <div className='d-flex ms-4 align-items-center'>
                  <p style={{ fontSize: '28px' }}><AiOutlineAppstore /></p>
                  <p style={{ fontSize: '18px', marginLeft: '27px', marginBottom: '8px' }}>Discover</p>
                </div>
                <h4 style={{ fontSize: '15px', marginBottom: '2px' }} className='me-4 bg-primary rounded-pill px-3 py-1 text-light'>25</h4>
              </div>
              <div className='d-flex mx-4 align-items-center justify-content-between'>
                <div className='d-flex  align-items-center'>
                  <p style={{ fontSize: '25px' }}><BsCircle /></p>
                  <p style={{ fontSize: '18px', marginLeft: '27px', marginBottom: "8px" }}>SmartUp</p>
                </div>
              </div>
            
                  <div className='d-flex   mx-4 align-items-center my-3'>
                    <img width='30' className='rounded-pill' src='https://i.ibb.co/0htCzrc/user10.jpg' alt="" />
                    <h6 style={{ marginBottom: '0' }} className='d-flex  w-100 justify-content-between align-items-center'>
                      <span className='ms-4'>Lead Community</span>
                    </h6 >
                  </div>
                  <div className='d-flex   mx-4 align-items-center my-3'>
                    <img width='30' className='rounded-pill' src='https://i.ibb.co/bvST5GS/user9.jpg' alt="" />
                    <h6 style={{ marginBottom: '0' }} className='d-flex  w-100 justify-content-between align-items-center'>
                      <span className='ms-4'>Team Community</span>
                    </h6 >
                  </div>
                  <div className='d-flex   mx-4 align-items-center my-3'>
                    <img width='30' className='rounded-pill' src='https://i.ibb.co/9r96CYm/user7.jpg' alt="" />
                    <h6 style={{ marginBottom: '0' }} className='d-flex  w-100 justify-content-between align-items-center'>
                      <span className='ms-4'>Fun Community</span>
                    </h6 >
                  </div>
                  <div className='d-flex   mx-4 align-items-center my-3'>
                    <img width='30' className='rounded-pill' src='https://i.ibb.co/M9P6SWx/user4.jpg' alt="" />
                    <h6 style={{ marginBottom: '0' }} className='d-flex  w-100 justify-content-between align-items-center'>
                      <span className='ms-4'>Tech Community</span>
                    </h6 >
                  </div>
              <div className='d-flex mx-4 align-items-center'>
                <p style={{ fontSize: '22px' }}><IoPersonOutline /></p>
                <p style={{ fontSize: '22px', fontWeight: '600', marginLeft: '6px', marginBottom: '10px' }}>Personal</p>
              </div>
              <div className='d-flex mx-5 mb-3 align-items-center justify-content-between'>
                <p style={{ fontSize: '15px', marginBottom: '0' }}>In Progress</p>
                <p style={{ fontSize: '13px', marginBottom: '0' }}>260</p>
              </div>
              <div className='d-flex mx-5 mb-3 align-items-center justify-content-between'>
                <p style={{ fontSize: '15px', marginBottom: '0' }}>Completed</p>
                <p style={{ fontSize: '13px', marginBottom: '0' }}>48</p>
              </div>
              <div className='d-flex mx-5 mb-3 align-items-center justify-content-between'>
                <p style={{ fontSize: '15px', marginBottom: '0' }}>Read Letter</p>
                <p style={{ fontSize: '13px', marginBottom: '0' }}>24</p>
              </div>
              <div className='text-center mt-5'>
                <p>About SmartUp</p>
                <p>Send feedback</p>
                <p>Terms of use</p>
                <p>Privacy policy</p>
              </div>
              <div className='d-flex py-3 justify-content-center'>
                <div style={{ fontSize: '20px' }}>
                  <span className='px-2'><BsFacebook /></span>
                  <span className='px-2'><BsInstagram /></span>
                  <span className='px-2'><BsTwitter /></span>
                  <span className='px-2'><BsLinkedin /></span>
                </div>
              </div>
              <div className="card-footer text-center">
                Copyright © 2022 SmartUp
              </div>
            </div>
          }
        </div>


        <div className={close ? ` col-12 col-md-7 col-lg-9 ` : `col-12 col-md-12`}>
          <nav class="navbar navbar-light bg-light">
            <div class="container">
            {
              close ? <></>:<h4><button onClick={sideBar} style={{ border: 'none', background: 'transparent' }}><IoPersonOutline /></button></h4> 
            }
              <span class="navbar-brand mb-0 h1">Discover</span>
              <span class="navbar-brand mb-0 h1" style={{background:'RoyalBlue',color:'white',padding:'5px 20px',borderRadius:'20px'}}><BsPlusLg/></span>
            </div>
          </nav>
          <div className="mx-5 row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4 m-3">
            {
              posts.map((post) =>
                <div class="col">
                  <div class="card border-0" style={{ height: '500px' }}>
                    <img src={post.coverImageUrl} class="card-img-top" height={400} alt="..." />
                    <div class="card-body">
                      <p class="card-text">{post.title}</p>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
