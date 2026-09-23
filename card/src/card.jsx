import image from './assets/college_pic.jpg'
function Card(){
    return(
        <div className='card'>
            <img className='image' src={image} alt="my photo" />
            <h2 className='title'>Md Abdullah Arman</h2>
            <p className='description'>I am a cs Student, currently at 3rd year</p>
        </div>
    );
}

export default Card