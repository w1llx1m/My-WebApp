import profilePic from './profile_pic.jpg'


function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>William</h2>
            <p className='card-desc'>I develop websites</p>

        </div>
    );

}

export default Card