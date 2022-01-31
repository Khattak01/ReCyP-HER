import React from 'react';
import classes from './VideoFrame.module.css'


import PropTypes from 'prop-types';

const VideoFrame = ({ embedId }) => (
    <div className={classes.video__responsive} >
        <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
);

VideoFrame.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default VideoFrame;