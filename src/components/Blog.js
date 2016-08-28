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
          <li>Before I do that however, here is this lovely...</li>
          <li><h5>Disclaimer!</h5></li>
          <p>
            While this blog may do a good job at pretending to be coherent,
            I doubt very much that it will have anything useful to say.
            Take everything you read here with a full handful of salt.
            At the end of the day, I am just another person who is wrong
            on the internet, and there are probably better things to get 
            mad at. If you do notice something egregious that must be 
            corrected, feel free to find the github repo for this website
            and open an issue. I promise to mark it as wontfix. Also, any
            and all opinions expressed are my own, and are not related to:
            DevPoint Labs, React Rally, or anyone else who isn't me.
          </p>
          <li>How great DPL is for letting me attend</li>
          <p>
            DevPoint Labs(hereafter known as DPL) is a programming bootcamp. 
            They have a full stack Ruby on Rails and React bootcamp and also 
            an evening Isomorphic JavaScript class that uses React and Redux.
            I am a Teaching Assistant for both of those classes and love it.
            They also have a UI/UX class that seems pretty great as well.
            I wouldn't have been able to attend React Rally without them, so thanks.
          </p>
          <li>How much of a man crush Dave has on Ryan Florence</li>
          <p>
            For those of you who don't know, Dave is an instructor at 
            DPL and probably loves React more than anyone else I know.
            Dave and Ryan used to work together and apparently
            Ryan taught Dave to love React and now he can't stop 
            talking about him.  I can't confirm it, but Dave may have
            shortened his beard just because Ryan shaved his first.
            Really, this point has nothing to do with the conference, 
            but I love trying to make bad jokes(especially puns) that 
            only I laugh at so there's that. Plus, there is a non-zero
            chance that he will be the only other person who ends up
            reading this, and this seems like one way to thank him
            for being a great conference buddy and mentor.
          </p>
          <li>How amazing the swag was Part 1</li>
          <p>
            The sponsors gave great stickers, shirts, chapsticks, treats,
            bottle openers, and more. Thank you sponsors.
          </p>
          <li>How amazing the swag was Part 2</li>
          <p>
            React Rally also gave great stickers, shirts, snacks, and more. 
            Thank you @jamison and @mzabriskie for all you did to make this
            the conference that will make me disappointed by all future
            conferences I go to.
          </p>
          <li>How amazing the speakers were, Part 1</li>
          <p>
            I may end up writing blog posts about individual talks they were
            all so awesome. I'm not going to write more now because if I start
            I may not stop until my battery dies, but if you weren't there and
            somehow find yourself reading this you should go find the videos and
            watch them.
          </p>
          <li>How amazing the speakers were, Part 2</li>
          <p>
            I don't know how, but day 2 somehow ended up being even better.
            I'm going to need an entire year to put half of what they talked
            about into practice, so I may end up writing blog posts on that as 
            well if this blog becomes more than a one time thing.
          </p>
          <li>How slow the foodtrucks were, and how I love free food.</li>
          <li>All the cool people I got to meet</li>
          <li>How great the music was</li>
          <li>How bad the sound was</li>
          <li>How great the organizers were</li>
          <li>What I am most excited about from the conference</li>
          <li>Take aways and musings from the conference</li>
          <li>photos of the conference and the swag</li>
          <li>A dictionary definition of the word swag</li>
          <li>tl;dr</li>
        </ul>
      </div>
    );
  }
}

export default Blog;
