import React from 'react';

const Instapost = () => {
  return (
    <div className="secondary-font p-8 lg:w-3/4 w-full lg:pr-3" style={{ color: 'white' }}>
      <h2 className="font-bold text-lg">Instapost</h2>
      <br />
      <div>
        <a
          className="hover:text-yellow-300"
          href="https://github.com/andreafrank/instapost">
            Github source code
        </a>
        <br />
        <br />
          Rails, React, and PostGres mock Instagram app (not using react-rails gem).
          Blocker encountered with post.user associations problem.
          See stackoverflow question
          <a
            href="https://stackoverflow.com/questions/66019588/rails-post-controller-not-passing-user-association-to-react-view"
            className="hover:text-yellow-300"
          >
              here
          </a>.
          Note known bug.
          <br />
          <br />
          Next steps:
          <br />
          Entirely revamp styling to match Etsy. Currently, just stock pasted together from other projects.
          <br />
          Create post upload form
          <br />
          Activate ActiveStorage so users may upload photos of images
          <br />
          Add additional associations not yet present
          <br />
          Write tests
          <br />
          Heroku, Netlify, or some other host
          <br />
          <br />
          No photos due to current association problem, but... working on it!
      </div>
    </div>
  )
}

export default Instapost;
