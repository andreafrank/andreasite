import React from 'react';

const Community = () => {
  return (
    <div className="secondary-font p-8 lg:w-3/4 w-full lg:pr-3 " style={{ color: 'white' }}>
      <h1 className="font-bold text-xl"> UX Case Study: CommUNITY</h1>
      <div>Make this story short:{' '}
      <a
        className="text-yellow-300 hover:text-yellow-300 text-lg"
        target="_blank"
        href="https://xd.adobe.com/view/f3bd11a2-2b1d-4049-86ed-ec116ab2a67e-a6ee/"
        rel="noopener noreferrer"
      >
          Adobe XD prototype
      </a>
        <br />
        <br />
        <i>
          Disaster relief application proposal created November - December 2020 amongst five
          team members for the MICA MPS program UX Design Lab: Industry course
        </i>
        <br />
        <br />
        <h2 className="font-bold text-lg">Overview</h2>
        Tasked with creating a mobile app that addresses some of the extreme difficulties that arise when enduring a natural disaster, the CommUNITY app facilitates and prioritizes neighbor-to-neighbor mutual aid and relief through geo-located offers of and requests for goods and services, chat functionality, and virtual document storage. Meeting our client’s list of requirements was forefront in guiding this project through ideation to implementation.
        <br />
        <br />
        Through desk research, competitive analysis, and interviews with professionals working in the natural disaster relief space, we determined that the “big players” like Red Cross typically cover a large-scale disaster response immediately and effectively. We learned that there is an opportunity for smaller-scale neighborhood relief, especially when a disaster is damaging enough that professionals cannot immediately reach the affected area.
        <br />
        <br />
        We concluded our research synthesis and transitioned into creating user personas of an archetypal neighbor (aka a recipient), donor, and volunteer, as well as current- and future-state scenarios for each. We then developed a feature list that accommodates persona needs, mindful of the requirements given by the client. We designed the wire flows of CommUNITY that culminated in iterations of high fidelity wireframes and annotated micro-interactions.
        <br />
        <br />
        <div className="p-8 px-60">(Loading screen created in Adobe XD)</div>
        <img
          src={"/comm2.png"}
          alt="community app loading screen"
          className="p-8 px-60 -mt-12"
        />
      </div>
      <br />
      <br />
      <h2 className="font-bold text-lg">Problem Statement</h2>
      <div>
      In times of community crisis, larger organizations are tasked with tackling large scale crises, while local communities are left to manage non-life threatening situations. Neighbors within a community need a way to mobilize assets, organize teams, and distribute donations to other neighbors in need. <ins>How might we enable neighbors to form a network of mutual support?</ins>
    </div>
    <h2 className="font-bold text-lg">Audience</h2>
    <div>
    Throughout the process, we remained cognizant of the possibility that we are designing for individuals who may have various residency or citizenship statuses, and the app should not identify users directly, nor connect them to an app that may. We created a built-in chat feature to keep communication within the CommUNITY platform itself.
    <br />
    <br />
    Although we designed the app for usage in a disaster, the app is not necessarily only a disaster response app; it can be used at any time. We displayed information and navigation in as straightforward a way as possible so that the user may easily complete desired tasks. CommUNITY is designed to be accessible and usable by a wide range of users, ideally fostering neighborhood connections in the process.
    </div>
    <br />
    <br />
    <h2 className="font-bold text-lg">Competitive Analysis</h2>
    <div>
      We conducted a competitive analysis of nine direct and indirect competitors to understand how people currently connect in times of potential disaster, and how where these apps do well, or perhaps fall a little short. 
      <br />
      <br />
    </div>
    <img
      src={"/comm1.png"}
      alt="competitive analysis"
      className="p-8 pr-32"
    />
    <br />
    <br />
    <h2 className="font-bold text-lg">Competitive Analysis Takeaways</h2>
    <div>
    The emergency response ecosystem is saturated with top-down models, and models that fuse the different approaches necessary to address the extreme disparities in the scale of effects of foreseeable and unforeseeable emergencies. Through research and interviews, we discovered that overlapping capabilities and areas of responsibility mitigate the consequences of any single organization’s failure and diversify the types of services provided.
    <br />
    <br />
    The opportunities to impact the crisis space are at the poles of crisis mitigation. Individuals struck by a crisis who are in need of support can dial 911 and wait for assistance from government agencies, but that channel of mitigation can be overwhelmed. However, during an event where survival is uncertain, victims are unlikely to have the mental clarity (and perhaps not even the technological capacity) to seek rescue by sorting through a vast catalog of non-profit agencies and NGOs. Alternatively, hyper-localized and passive functionality present opportunities to enable neighbors to offer one another mutual support in modalities that are impossible for larger agencies to replicate.
    </div>
    <br />
    <br />
    <h2 className="font-bold text-lg">User Interviews</h2>
    <div>
      Our questions followed a traditional disaster timeline which addressed preparation before an event, the disaster event itself, what the organized response looks like, how volunteers are managed, and how donations are managed and distributed. We filtered the interview data into three main categories:
        <br />
      <br />
      <b>1.) Community Awareness of App</b>
      – If holding in-person events, it’s important to find creative ways to draw in community members to increase app awareness and downloads, i.e. with food vendors.
      <br />
      – Important to retain users to facilitate convenient peer-to-peer sharing of resources. Communication is critical.
      <br />
      – Who has evacuated? Who needs what and where?
      <br />
      – Easy implementation is key because users may be in a time of crisis or disaster.
    </div>
    <br />
    <br />
    <div>
      <b>2.) Increase in peer-to-peer interactions</b>
      – There are no “cookie cutter” situations; priorities can and do change based on disaster or non- disaster, type of need, location, neighborhood, etc.
      <br />
      – Important to focus on non-life threatening situations so that those in dire need can be cared for by trained specialists.
      <br />
      – Critical to consider technical issues where folks may not get notifications, see the app, or have internet connections. How might we find creative ways to reach them?
    </div>

    <br />
    <br />
    <div>
      <b>Increase in Donations</b>
      – Key to donations is ensuring that they are easily facilitated, and if online, easy to use on multiple devices.
      <br />
      – Recurring monthly donations are important to grassroots organizing.
      <br />
      – Important to consider how need for donations is communicated while balancing safety considerations (such as advertising that you have many resources to share while not stating your specific location.)
    </div>

    <img
      src={"/comm3.png"}
      alt="user interviews"
      className="p-8 pr-32"
    />

    <img
      src={"/comm4.png"}
      alt="research questions"
      className="p-8 pr-32"
    />

    <h2 className="font-bold text-lg">Personas</h2>
    <div>
    Through our research and synthesis, we pivoted our focus into the Neighbor persona. With goals constantly changing for an individual household, we identified 3 role-based personas that are common for a neighbor in a community. These personas would guide the design of our MVP and help us align our focus on the core function of the app. 
    </div>

    <img
      src={"/comm5.png"}
      alt="personas"
      className="p-8 px-48"
    />

    <div>
    Next, we focused on journey mapping through the lens of the identified role-based personas, the research conducted was used to inform a current state hurricane response as well as a future state hurricane response. We created a timeline which includes a “blue skies” period before awareness of a natural disaster, through to the events that occur after the disaster has occurred for both the current and future state journeys. Throughout these journeys, we integrated our three user personas and their involvement with the app, the disaster, and each other. These steps helped us identify potential areas of need and feature opportunities.
    </div>
    <br />
    <br />
    <h2 className="font-bold text-lg">Features & Ideal Feature List</h2>
    <div>
    We maintained a “big ideas” document to identify and track potential opportunities for post-MVP features as we conducted our research. The idea of ‘The Vault’ came during this stage, which we integrated into our MVP. Many of these ideas were generated directly from our interviews or gaps in service we identified during our user journeys. The following list represents the ideas we identified as the opportunities with the most reach and potential.
    </div>
    <br />
    <br />
    <div>
      <b>Social Media Integration</b>
      <br />
      1.) Easy Share link - Enable neighbors to request donations and volunteers
      <br />
      2.) Community Chat - Enable closer proximity conversations with Bluetooth technology
      <br />
      3.) Single Sign On - Enable neighbors to easily on-board and sign-on to the community
      <br />
      <br />

      <b>Interactive Map / Mapping</b>
      <br />
      1. Location & Safety Status Updates - Enable sharing of location and wellness status to the community app and connected social media accounts. *powered by Bluetooth
      <br />
      2. Interactive Maps - Geotag food / water stations set up by FEMA/Red Cross, etc.
      <br />
      <br />
      Volunteer Management
      <br />
      1. Peer2Peer Community Board - Identify requests for services
      <br />
      2. Create requests for services
      <br />
      3. Allow users to volunteer
      <br />
      <br />
​
      <b>Donation Management</b>
      <br />
      1. Donation Tab - Enable donations of goods and/or cash donations via the popular cash app services
      <br />
      <br />
​
      <b>Recipient Usage</b>
      <br />
      1. Curated Resource Library - Create a repository of preparedness articles & links based on geographic area, create a catalog of links to larger organizations once they are deployed in their community
      <br />
      2. Secure Digital Storage - Create vault to STORE LEGAL DOCUMENTS such as proof of home ownership, copies of ID's, etc in case they are lost
    </div>
    <br />
    <br />

    <h2 className="font-bold text-lg">Design</h2>
    <div>
      Prior to designing the solution, we ideated and prioritized concepts that would help bring the required functionality to reality in the MVP release of CommUNITY. We also incorporated an additional feature to help bring differentiation to similar competitors.
    </div>

    <img
      src={"/comm6.png"}
      alt="features"
      className="p-8"
    />

    <img
      src={"/comm7.png"}
      alt="information architecture 1"
      className="p-8"
    />

    <img
      src={"/comm8.png"}
      alt="information architecture 2"
      className="p-8"
    />
      <h2 className="font-bold text-lg">Wireflows, Wireframes</h2>
      <div>
        We organized key high-fidelity wireframes against the user flow to visualize the neighbors’ journey through their role-based tasks. These wireframes depict the happy paths, key feature sets, as well as annotations for describing the experience.
      </div>

      <img
        src={"/comm9.png"}
        alt="wireframe"
        className="p-8"
      />

      <h2 className="font-bold text-lg">Prototype</h2>
      <div>
        We organized key high-fidelity wireframes against the user flow to visualize the neighbors’ journey through their role-based tasks. These wireframes depict the happy paths, key feature sets, as well as annotations for describing the experience.
      </div>

      <img
        src={"/comm10.png"}
        alt="wireframe"
        className="p-8 px-64"
      />
      <a
        className="text-yellow-300 hover:text-yellow-300 text-lg p-8 px-72"
        target="_blank"
        href="https://xd.adobe.com/view/f3bd11a2-2b1d-4049-86ed-ec116ab2a67e-a6ee/"
        rel="noopener noreferrer"
      >
          Adobe XD prototype
      </a>

    </div>
  )
}

export default Community;
