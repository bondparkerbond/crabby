import React, { Component } from 'react';

class Blog extends Component {
  render() {
    return (
      <div className='container'>
        <h2>React Rally</h2>
        <h4>Author: Parker Bond</h4>
        <p>
          This blog was brought about by a perfect storm
          of wanting to play around with create-react-app 
          and hoping that I might win one of the aweome(TM) 
          React Rally posters up for grabs for people who write
          a blog post about it.  Since I don't have a blog, 
          I thought that this would be the perfect opportunity
          to hit two birds with one stone... The way I see it,
          even if I don't get a poster, I can hide a fun Theramin
          easter egg in my app and make someone think that their
          computer is possesed!
        </p>
        <p>
          Ok, where to start?  I think I'm going to talk about a few things:
        </p>
        <ul className='center-align'>
          <li>What I loved</li>
          <li>What I liked</li>
          <li>What I hated</li>
        </ul>
        <ul>
          <li>How great DPL is for letting me attend</li>
          <li>How much of a man crush Dave has on Ryan Florence</li>
          <li>How amazing the swag was Part 1</li>
          <li>How amazing the swag was Part 2</li>
          <li>How amazing the speakers were, Part 1</li>
          <li>How amazing the speakers were, Part 2</li>
          <li>How slow the foodtrucks were, and how I love free food.</li>
          <li>All the cool people I got to meet</li>
          <li>How great the music was</li>
          <li>How bad the sound was</li>
          <li>How great the organizers were</li>
          <li>What I am most excited about from the conference</li>
          <li>Take aways and musings from the conference</li>
          <li>photos of the conference and the swag</li>
          <li>A dictionary definition of the word swag</li>
          <li>TL DR</li>
        </ul>
      </div>
    );
  }
}

export default Blog;
