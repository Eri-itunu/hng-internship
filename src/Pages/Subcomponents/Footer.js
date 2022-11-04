import ingressive from "../../images/I4G.svg"
import zuri from "../../images/zuri.svg"

export default function Footer(){
    return(
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
    )
}