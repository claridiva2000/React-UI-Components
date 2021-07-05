import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div className="Footer">
    <div className="stats"> <i id="speach" className="speech" class="far fa-comment" onClick={comment}></i><span><i id="reshare" class="fas fa-sync-alt"></i>6</span> <span ><i id="heart" class="far fa-heart"></i>4</span><i id="email" class="far fa-envelope"></i>
    </div>
    <div className="comment">
    <form>
    <textarea placeholder="What's on your mind?">
    </textarea>
    <button>
      Submit
    </button>
    </form>
    
    </div>
    </div>
  );
};


const commentform= document.getElementsByTagName("form");
function comment(){
  commentform.style.display ='flex';
  };


export default Footer;