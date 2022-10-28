import twitterImage from "./images/twitter_image.svg"
import slack from "./images/slack.svg"
import git from "./images/Social icon.svg"
import ingressive from "./images/I4G.svg"
import zuri from "./images/zuri.svg"
import './App.css';
import { LinkHTMLAttributes } from "react";

function App() {
  return (
      <div className='link-tree'>

        <div className="image-container">
          <img src={twitterImage} alt="profile" id="profile__img" />
          <h1 id="twitter">eri_itunu</h1>
          {/* <h4 id="slack">Eri </h4> */}
        </div>

        <div className="link-container">

            <a  id="button_zuri" href="https://training.zuri.team/">Zuri Team</a>
          

            <a id="books" href="http://books.zuri.team/">
              Zuri Books
            </a>
          

          <a id="book__python" href="http://books.zuri.team">
            Python Books
          </a>

          <button id="pitch">
            <a href="https://background.zuri.team">Background Check for Coders</a>
          </button>

          <button id="book__design">
            <a href="https://books.zuri.team/design-rules/">Design Books</a>
          </button>

          <div className="icon-container">
            <img src={slack} alt="" />
            <img src={git} alt="" />
          </div>
          

        </div>


        <div className="footer">
          <div className="left">
            <img src={zuri} alt="" />
          </div>
          <div className="center">
            <p>HNG Internship 9 Frontend Task</p>
          </div>
          <div className="right">
            <img src={ingressive} alt="" />
          </div>
        </div>

      </div>
  );
}

export default App;
