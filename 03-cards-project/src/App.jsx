import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div className="top">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10'></img>
          <button>save <Bookmark size={12}/> </button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 Days Ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
          </div>
          <button>Apply Now </button>
        </div>
      </div>
    </div>
  )
}

export default App