'use strict';

var React = require('react');

function Instagram(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12.1,1.8c2.2,0,3.9,0,5.3.2,1.4.2,2.5.6,3.3,1.4.9.9,1.2,2,1.4,3.3.2,1.3.2,3.1.2,5.3h0c0,2.3,0,4-.2,5.4-.2,1.4-.6,2.5-1.4,3.3s-2,1.2-3.3,1.4c-1.3.2-3.1.2-5.3.2h-.1c-2.2,0-3.9,0-5.3-.2-1.4-.2-2.5-.6-3.3-1.4-.9-.9-1.2-2-1.4-3.3-.2-1.3-.2-3.1-.2-5.3h0c0-2.3,0-4,.2-5.4.2-1.4.6-2.5,1.4-3.3s2-1.2,3.3-1.4c1.3-.2,3.1-.2,5.3-.2h.1ZM16.5,12c0,2.5-2,4.5-4.5,4.5s-4.5-2-4.5-4.5,2-4.5,4.5-4.5,4.5,2,4.5,4.5M17.5,7.5c.5,0,1-.4,1-1s-.4-1-1-1h0c-.6,0-1,.5-1,1,0,.6.4,1,1,1h0Z" fill-rule="evenodd"/>' : '<path d="M2.5,12c0-4.5,0-6.7,1.4-8.1,1.4-1.4,3.6-1.4,8.1-1.4s6.7,0,8.1,1.4c1.4,1.4,1.4,3.6,1.4,8.1s0,6.7-1.4,8.1c-1.4,1.4-3.6,1.4-8.1,1.4s-6.7,0-8.1-1.4-1.4-3.6-1.4-8.1Z"/>   <path d="M16.5,12c0,2.5-2,4.5-4.5,4.5s-4.5-2-4.5-4.5,2-4.5,4.5-4.5,4.5,2,4.5,4.5Z" stroke-miterlimit="21.3"/>   <path d="M17.5,6.5h0"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = Instagram;
