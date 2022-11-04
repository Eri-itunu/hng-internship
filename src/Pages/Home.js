import twitterImage from "../images/twitter_image.svg"
import slack from "../images/slack.svg"
import git from "../images/Social icon.svg"
import large from "../images/share_large.svg"
import share_small from "../images/share_small.svg"

import Footer from "./Subcomponents/Footer"

export default function Home(){
    return(
        <div className='link-tree'>

            <div className="image-container">

            <div className="image-center">
                <img src={twitterImage} alt="profile" id="profile__img" />
                <h1 id="twitter">eri_itunu</h1>
                <h4 id="slack">Eri </h4> 
            </div>
            <div className="menu-image">
                <img  className="small" src={share_small} alt="" />
            </div>
            <div className="menu">
                <img src={large} alt="" />
            </div>
            </div>

            <div className="link-container">

                <a class="text-reset text-decoration-none"  id="btn__zuri" href="https://training.zuri.team/">Zuri Team</a>
            

                <a class="text-reset text-decoration-none" id="books" href="http://books.zuri.team/">
                Zuri Books
                </a>
            

                <a class="text-reset text-decoration-none" id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=Eri">
                    Python Books
                </a>

            
                <a class="text-reset text-decoration-none" id="pitch" href="https://background.zuri.team">Background Check for Coders</a>
            

            
                <a class="text-reset text-decoration-none" id="book__design" href="https://books.zuri.team/design-rules/">Design Books</a>

                <a class="text-reset text-decoration-none" id="contact" href="/contact">Contact Me</a>
            

            <div className="icon-container">
                <img src={slack} alt="" />
                <img src={git} alt="" />
            </div>
            

            </div>

            <Footer/>
            

        </div>
    )
}