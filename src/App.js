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
          <img src={twitterImage} alt="" id="profile_id" />
          <h1 id="twitter">Annette Black</h1>
          {/* <h4 id="slack">Annette Black </h4> */}
        </div>

        <div className="link-container">
          
          <button id="twitter_link">
            <a href="http://books.zuri.team/">Twitter Link</a>
          </button>

          <button id="button_zuri">
            <a href="https://training.zuri.team/">Zuri Team</a>
          </button>

            <a href="http://books.zuri.team/">
              <button id="books">
                Zuri Books
              </button>
            </a>
          

          <a href="http://books.zuri.team">
            <button id="book__python">
              Python Books
            </button>
          </a>

          <button id="pitch">
            <a href="https://background.zuri.team//">Background Check for Coders</a>
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
