import {useState} from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import foto from './assets/jander.jpg'
import tools from './assets/tools.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className='sidebar'>
        <div className='profile-card'>
          <img src={foto}
            className='profile-image'
            alt="jander"/>
          <h2>Jander Gomez</h2>

          <ul>
            <li>
              <Link to={'/'}>Who I am</Link>
            </li>
            <li>
              <Link to={'/stack'}>Stack</Link>
            </li>
            <li>
              <Link to={'/project'}>Projects</Link>
            </li>
            <li>
              <Link to={'/dev'}>Dev Resources</Link>
            </li>
          </ul>
        </div>
      </div>
      <main>
        <section className="header">
          <h2>Welcome</h2>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam aperiam rerum placeat illum eius, dolor odit debitis, accusamus voluptatem maiores inventore? Vitae accusamus illo, nulla harum voluptatibus perferendis repudiandae laborum?</span>
        </section>
        <section className='tasks'>
          <article className='card'>
            <div className='card-content'>
              <div className="left">
                <img src={tools}
                  width={'70'}
                  alt="tools"/>
              </div>
              <div className="right">
                <div className="task">Texto</div>
                <div className="status">4 de 10 Actividades</div>
                <div className="progress">
                  <div className="fill fill-40"></div>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button className='btn'>Complete</button>
            </div>
          </article>
        </section>
      </main>

    </div>
  )
}

export default App
