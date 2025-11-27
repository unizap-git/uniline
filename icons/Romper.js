'use strict';

var React = require('react');

function Romper(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.9,4.2c-2-1.3-5.4-2.7-9.9-2.7S3.7,3.2,2.1,4.3c-.7.5-1.1,1.4-.8,2.2l1.1,3.6c.3.9,1,1.4,1.9,1.4h1.8s0,5,0,5c0,1,.7,1.8,1.7,2.1.4.1,1.1.4,1.4.9.8,1.2.8,2.4.8,2.4,0,.6.4,1,1,1h2c.6,0,1-.4,1-1s0-1.2.8-2.4c.4-.6,1-.8,1.4-.9,1-.3,1.7-1.1,1.7-2.1v-5h1.8c.9,0,1.7-.6,1.9-1.4l1.1-3.6c.3-.9,0-1.8-.8-2.2ZM12,7.5c-2.2,0-4-1.8-4-4s0-.7.1-1c.1-.5.7-.9,1.2-.7.5.1.9.7.7,1.2,0,.2,0,.3,0,.5,0,1.1.9,2,2,2s2-.9,2-2,0-.3,0-.5c-.1-.5.2-1.1.7-1.2.5-.1,1.1.2,1.2.7,0,.3.1.7.1,1,0,2.2-1.8,4-4,4Z"/>   <path d="M17.2,4.2c0,0-.2,0-.3,0-3.2-.9-6.7-.9-9.9,0-.5.2-1.1-.1-1.2-.7-.2-.5.1-1.1.7-1.2,3.5-1,7.5-1,11,0,.5.2.8.7.7,1.2-.1.4-.5.7-1,.7Z"/>' : '<path d="M6.57241 19.5747L4.40745 12.3582C4.16338 11.5446 4.4545 10.6619 5.17189 10.2071C8.05736 8.37793 14.6413 5 24 5C33.3427 5 39.7999 8.36639 42.7589 10.1977C43.5067 10.6605 43.8274 11.5754 43.5747 12.4177L41.4276 19.5747C41.1738 20.4207 40.3952 21 39.5119 21H36C34.8954 21 34 21.8911 34 22.9957V33.0019C34 34.1065 33.0949 35.0132 32.0273 35.2966C30.7283 35.6415 29.0752 36.3873 28 38C26 41 26 44 26 44H22C22 44 22 41 20 38C18.9248 36.3873 17.2717 35.6415 15.9727 35.2966C14.9051 35.0132 14 34.1065 14 33.0019V22.9957C14 21.8911 13.1046 21 12 21H8.48806C7.60484 21 6.8262 20.4207 6.57241 19.5747Z"/><path d="M29.811 5.5C29.9344 5.97943 30 6.48205 30 7C30 10.3137 27.3137 13 24 13C20.6863 13 18 10.3137 18 7C18 6.48205 18.0656 5.97943 18.189 5.5"/><path d="M13.5 6.49375C16.4326 5.63028 19.9575 5 24 5C28.0425 5 31.5449 5.63028 34.4573 6.49375"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 48 48',
    fill: fill ? color : 'none',
    stroke: fill ? 'none' : color,
    strokeWidth: fill ? 0 : strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: className,
    style: style,
    dangerouslySetInnerHTML: { __html: svgContent }
  });
}

module.exports = Romper;
