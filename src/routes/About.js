import React from 'react';

const About = ({ match }) => {
  return (
    <div>
      ABOUT {match.params.username}
    </div>
  );
};

export default About;