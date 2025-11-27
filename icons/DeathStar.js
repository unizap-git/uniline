'use strict';

var React = require('react');

function DeathStar(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21.5,16.5h-6c-.6,0-1-.4-1-1s.4-1,1-1h6c.5,0,.9.4,1,.9.3-.9.4-1.8.5-2.7,0,.5-.5.8-1,.8H2.5c-.6,0-1-.4-1-1s.4-1,1-1h19.5c.5,0,.9.4,1,.9,0-.1,0-.3,0-.4,0-6.1-4.9-11-11-11S1,5.9,1,12s4.9,11,11,11,8.5-2.8,10.1-6.8c-.2.2-.4.3-.6.3ZM17,7.5h4c.6,0,1,.4,1,1s-.4,1-1,1h-4c-.6,0-1-.4-1-1s.4-1,1-1ZM9.5,4.5c1.7,0,3,1.3,3,3s-1.3,3-3,3-3-1.3-3-3,1.3-3,3-3ZM19.5,19.5h-7c-.6,0-1-.4-1-1s.4-1,1-1h7c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M20,6c1.3,1.7,2,3.7,2,6,0,3.9-2.2,7.3-5.5,8.9" stroke-miterlimit="2"/>   <path d="M1.3,14.7c-.2-.9-.3-1.8-.3-2.7s0-1.5.2-2.2l2,.4c-.1.6-.2,1.2-.2,1.8s0,1.5.3,2.3l-1.9.5Z"/>' : '<circle cx="24" cy="24" r="20"/><path d="M5 25H44"/><circle cx="19" cy="15" r="4"/><path d="M31 31H43"/><path d="M34 17L42 17"/><path d="M25 37H39"/><path d="M40 11.998C42.5116 15.341 44 19.4967 44 24C44 31.8085 39.5252 38.5718 33 41.8654"/><path d="M4.40007 20C4.13772 21.2924 4 22.6301 4 24C4 25.7265 4.21876 27.4019 4.63009 29"/>';

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

module.exports = DeathStar;
