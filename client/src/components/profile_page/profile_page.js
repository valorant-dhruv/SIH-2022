import React from "react";
import "./profile_page.css"
import home from "../../icons/home.png"
import cover from "../../images/cover.jpg"
import profile from "../../images/profile.png"
import { Link } from "react-router-dom";
const profile_page = () => {
    return (
        <>
            <div className="main">
                <div className="Navbar">
                    <div className="leftSide">
                        <button><h3>My Profile</h3></button>
                    </div>
                    <div className="rightSide d-flex ">
                        <h3 className="logo">Logo</h3>
                        <h4 className="website">Name of Website</h4>
                        <Link to="/" className="btn btn-light d-flex align-items-center pl-2 pr-2"><img src={home} alt="" /> </Link>
                    </div>
                </div>

                <div className="profile">
                    <div className="cover">
                        <img src={cover} alt="" />
                        <div className="profile_img"><img src={profile} alt="" /></div>
                        <div className="details">
                            <div className="user">
                                <h3>Sakshi Shah</h3>
                                <h4>lorem ipsum lorem ipsum</h4>
                            </div>
                            <button className="butn">Edit Profile 🖊</button>
                        </div>
                    </div>

                </div>
                <div className="section">
                    <div className="social">
                        <button className="butn socialicon">Message 📮</button>
                        <div className="icons">
                            <h6>LinkedIn</h6>
                            <h6>Github</h6>
                            <h6>Email</h6>
                        </div>
                    </div>

                    <div className="container">
                        <div className="interests">
                            <h3>Interests</h3>
                            <div className="fields"><h6>Machine Learning</h6></div>
                            <div className="fields"><h6>Web Development</h6></div>
                            <div className="fields"><h6>Artificial Intelligence</h6></div>
                            <div className="fields"><h6>Blockchain Development</h6></div>
                        </div>

                        <div className="uploads">
                            <h4>You haven't uploaded any projects yet!</h4>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}
export default profile_page;