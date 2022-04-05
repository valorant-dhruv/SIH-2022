import React from 'react'
import projectCarousel from '../../icons/UI-home.jpeg'
import avatarIcon from '../../icons/avatar.png'
import sendIcon from '../../icons/send.png'
import './cardHome.css'
const cardHome = () => {
    return (
        <>
            <div className="project-card p-4 mb-4 bg-card-home">
                <div className="project-name">
                    <p className='fw-bold'>Project Team Pragati</p>
                </div>
                <div className="project-image p-4 mb-4">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={projectCarousel} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={projectCarousel} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={projectCarousel} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="project-description">
                    <p><strong>Project Description : </strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, sit optio recusandae voluptatibus repellat necessitatibus maxime amet molestiae totam ipsum, nesciunt temporibus exercitationem quasi soluta, corrupti eligendi explicabo repudiandae libero. </p>
                </div>
                <div className="project-comments-contributors d-flex justify-content-between align-items-center">
                    <div className="comments">
                        <strong>15 Comments</strong>
                    </div>
                    <div className="contributors">
                        <img src={avatarIcon} alt="" />
                        <img src={avatarIcon} alt="" />
                        <p className='d-inline p-2'>+6</p>
                    </div>
                </div>
                <hr />
                <div className="comments-section">
                    <img src={avatarIcon} alt="" />
                    <input type="text" className='comment-box' name="comment" id="comment" placeholder='Type Your Comment Here' />
                    <img src={sendIcon} className='sendIcon' alt="send" />
                </div>
            </div>
        </>
    )
}

export default cardHome