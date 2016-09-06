import React, { Component } from 'react';
import chalk from '../reactrally.jpg';
import '../App.css';

class Blog extends Component {
  render() {
    return (
      <div className='container react-img'>
        <div>
        <h2>React Rally</h2>
        <h4>Author: Parker Bond</h4>
        <p>
          This blog was brought about by a perfect storm
          of wanting to play around with create-react-app 
          and hoping that I might win one of the awesome(TM) 
          React Rally posters up for grabs for people who write
          a blog post about it. Since I don't have a blog, 
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
            talking about him. I can't confirm it, but Dave may have
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
          <li>All the cool people I got to meet</li>
          <p> 
            I got to meet a lot of amazing people from Florida, Chicago, 
            California, Utah, and beyond. Also, Ryan Florence got to find
            out who one of his anonymous twitter followers was.
          </p>
          <li>How great the music was</li>
          <p>
            Seriously, can we get the soundtrack for the speakers in an album format?
          </p>
          <li>How bad the sound was</li>
          <p>
            The only mildly annoying thing that took place at the conference had more
            to do with the microphone feedback that sometimes happened. All in all, 
            it was more of a bother than a serious problem.  
          </p>
          <li>How great the organizers were</li>
          <p>
            The organization, sponsors, speakers, venue, and snacks were all
            top notch, and I can't thank @jamison and @mzabriskie enough. Thank you
            guys for a great opportunity to improve my React mojo and meet other
            people who are leading the way in the craft.
          </p>
          <li>What I am most excited about from the conference</li>
          <p>
            Am I most excited about using animations, building a game, debugging in  
            the editor, making the web more accessible, or getting better at any number 
            of great technologies? I really want to make more composable functions
            and make music in React, however, I have to say the thing I am most
            excited about is to see how far the component can take us. Setting everything
            up for that first parent component is half the battle. Imagine if there 
            was just a server component or a Database component that you could use in
            your app! I never would have thought that something like this would be
            possible, let alone desireable before React Rally. Now, I think we are
            just starting to scratch the surface of what is possible. I can't wait
            to see what the future brings!
          </p>
          <li>Take aways and musings from the conference</li>
          <p>
            React is a great tool, with a lot of great people and great tools that
            help make it better for everyone.
          </p>
          <li>photos of the conference and the swag</li>
          <p>
            I'll try and upload some pictures here in the future, stay tuned.
          </p>
          <li>A dictionary definition of the word swag</li>
          <p>
            /SWAG/  noun
          </p>
          <p>
            1. money or goods taken by a thief or burglar.
          </p>
          <p>
            2. products given away free, typically for promotional purposes.
          </p>
          <p>
            While the first definition may be more fun, the second one is much
            more applicable to my usage.
          </p>
          <li>tl;dr</li>
          <p>
            React Rally is awesome. If you use/like react and didn't go, you should
            go watch the videos once they are released, and sign up for next years
            conference.  Also, I think I'm much more witty than I really am.
          </p>
        </ul>
        <br />
        </div>
      </div>
    );
  }
}

export default Blog;
