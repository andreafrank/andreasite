import React from 'react';

const Bus = () => {
  return (
    <div className="secondary-font p-8 lg:w-3/4 w-full lg:pr-3 " style={{ color: 'white' }}>
      <h1 className="font-bold text-xl"> UX Case Study: Bus Tracker</h1>
      <div>Make this story short:{' '}
      <a
        className="text-yellow-300 hover:text-yellow-300 text-lg"
        href="https://www.figma.com/proto/BkE5F5RpCvH3XyjMIJnlbF/CTA?node-id=1%3A3&scaling=min-zoom"
        target="_blank"
        rel="noopener noreferrer"
      >
          Link to Figma proof of concept
      </a>
        <br />
        <br />
        <h2 className="font-bold text-lg">Overview</h2>
        Beginning in 2020, Covid had many of us staying at home. But for those of us who rely on city buses,
        transportation can be tricky. Capacities are diminished due to social distancing and just plain not wanting to stand next to others on the train.
        Sometimes these buses are at capacity, and don’t even stop for you. So how are you to know that you’ll be able to board the bus your app tells you will arrive in 10 minutes?
        <br />
        <br />
        <div className="font-bold text-yellow-200">
          **** Please note that this is just an ideation; this is in no way affiliated with the CTA. ****
        </div>

        <div className="p-8">(Bus and slide created in Figma)</div>
        <img
          src={"/bus1.png"}
          alt="cartoonized bus"
          className="p-8 pr-32 -mt-12"
        />
      </div>
      <h2 className="font-bold text-lg">Problem Statement</h2>
      <div>
        In the city of Chicago, CTA buses at capacity may skip stops at the discretion of the driver,
      leaving the expectant rider waiting for the next available bus, and Covid-19 has only reduced bus capacity.
      In winter months, waiting outdoors can prove especially brutal. What technologies might be most efficiently
      and unobtrusively implemented to track real-time ridership and display accurate data to riders so they know
      when they may realistically board? How might we increase health and safety confidence in riders, while
      operating buses within the allocated city budget?
    </div>
    <div className="p-8">(Slide created in Figma)</div>
    <img
      src={"/bus4.png"}
      alt="timeline"
      className="p-8 pr-32 -mt-12"
    />
    <h2 className="font-bold text-lg">Audience</h2>
    <div>
      Ideally, any smartphone user who boards a CTA bus should also be able to use the bus tracker app.
    This renders the target audience very broad! We can’t assume that all users are digitally literate,
    speak English, are physically capable of boarding a bus without assistance, or know their exact destination,
    for example. Some passengers care about a calm riding experience; others prefer to reach their destination as
    fast as possible, and we need to account for all of these differences. CTA reports that in 2016, 826,322 users
    rode the bus weekly. We have a diverse set of users, and quite a lot of them, so the app should aim to be as
    broadly usable as possible.
    </div>
    <br />
    <br />
    <h2 className="font-bold text-lg">Process</h2>
    <div>
      Public transportation is a very large problem space. There are researchers in many sectors with advanced
      degrees trying to solve these problems, and there are even optimal route algorithms that have not been fully
      solved. In light of this, I began by reading some academic papers that address the usage of Automatic Passenger
       (APCs). These systems typically include a laser that counts passengers on bus entry and exit, or a module that is mounted at the back of the bus that scans the area and counts heads. Other options include point-of-entry card scanning (such as paying for the bus) and user-reported data, which could be used to create historic data from which to draw predictive results. 
      <br />
      <br />
      With this understanding, I dug into Chicago’s bus system to see where they stand. There are no APCs or plans
      to install them (from what I can tell). Other cities, like Los Angeles, are implementing APCs and real-time
      location data, but according to Transit, a group who produces widely-used public transit apps in many cities, 5G real-time trackers for busses do not yet exist. If they did, might that change the way people interact with bus apps? 
      <br />
      <br />
      The research phase for this project could extend for as long as I had interest! There’s a wealth of
      information to find, and I distilled what was pertinent to this project. However, if this project were
      longer, I would put significantly more time into this phase, as there is a lot of complexity here, and it
      varies in application from country to country, and city to city.
    </div>
    <br />
    <br />
    <h2 className="font-bold text-lg">Interviews</h2>
    <div>
      Next, I formulated some questions that would allow me to understand folks’ opinions of busses specifically
      in Chicago. I interviewed five people. To be fully effective, I’d need a much larger respondent group.
      Five people weren’t really sufficient to gain many specific insights. (Remember, the user group is very broad!)
      Some of my interviewees would currently ride a crowded bus, others not. Although I screened for current bus
      ridership, one of my interviewees mentioned that he did not really ride the bus much these days. 
      <br />
      <br />
      To balance these disparate results, I used quotes and individual experiences from these interviews,
      along with a 6,000+ person study from Transit to create my personas and user flows and journeys.
    </div>
    <br />
    <br />
    <h2 className="font-bold text-lg">Competitive Analysis</h2>
    <div>
    I completed a competitive analysis, giving insight into other current public transit apps’ approaches to
    organizing their information. Most of the home screens are visually similar: a movable map on top, with route
    information below. This has established a convention, and I noted that I didn’t want to stray too far from
    this so as not to be too confusing. 
    <br />
    <br />
    Many of them had one or more small differences, from counting calories to counting trees saved by taking
    the bus instead of a car. I made note of the ones that seemed pertinent as possible integrations.
    </div>
    <div className="p-8">(Slide created in Figma)</div>
    <img
      src={"/bus5.png"}
      alt="competitive analysis"
      className="p-8 pr-32 -mt-12"
    />
    <h2 className="font-bold text-lg">Ideation and Concept Evolution</h2>
    <div>
    From information gathered in interviews and desk research, I brainstormed some features to facilitate
    that journey. I then prioritized these on a matrix which included high-low priority and high-low difficulty.
    Some were critical, others ended as a stretch, to be implemented at a later date. A few ideas will not be
    implemented at all, but it was fun to imagine the possibilities.
    <br />
    <br />
    I listed the high- to mid-priority and low- to mid-difficulty features on a sheet of paper, then organized
    them. After referencing that each was important and conceptually connected, I drew and iterated on some paper
    wireframes.
    <br />
    <br />
    The most critical piece of information to display (which current apps don't do) is the crowding information.
    I allowed for three levels of crowding through an icon, which could be reported to the user via real-time data,
     or user-reported data. The user should also be able to sort and filter based on their crowding preferences. 
    </div>
    <img
      src={"/bus2.jpg"}
      alt="drawings ideated on paper"
      className="p-8 px-48"
    />
    <img
      src={"/bus3.png"}
      alt="quick Figma sketch of what bus crowding options might look like"
      className="p-8 px-60"
    />
    <h2 className="font-bold text-lg">Proof of Concept</h2>
    <div>
    To accommodate diverse users, I maintain design conventions established by existing transit apps, not
    introducing too many novel ideas. I kept colors distinct, important text large, and relied on icons for
    non-English speakers. I aimed for simple and functional, without over-design.
    </div>
    <img
      src={"/bus8.png"}
      alt="Bus crowding options"
      className="p-8 px-60"
    />
    <a
      className="text-yellow-300 hover:text-yellow-300 text-lg px-64"
      href="https://www.figma.com/proto/BkE5F5RpCvH3XyjMIJnlbF/CTA?node-id=1%3A3&scaling=min-zoom"
      target="_blank"
      rel="noopener noreferrer"
    >
        Link to Figma proof of concept
    </a>
    </div>
  )
}

export default Bus;
