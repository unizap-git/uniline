'use strict';

var React = require('react');

function Ipo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M22.3,10.1c.4-.1.7-.5.7-.9V3.5c0-.6-.4-1-1-1H2c-.6,0-1,.4-1,1v5.7c0,.4.3.8.7.9.7.2,1.2.9,1.2,1.7s-.5,1.4-1.2,1.7c-.4.1-.7.5-.7.9v5.7c0,.6.4,1,1,1h20c.6,0,1-.4,1-1v-5.7c0-.4-.3-.8-.7-.9-.7-.2-1.2-.9-1.2-1.7s.5-1.4,1.2-1.7ZM7.5,14.5c0,.6-.4,1-1,1s-1-.4-1-1v-5.5c0-.6.4-1,1-1s1,.4,1,1v5.5ZM10.5,13h-.5v1.5c0,.6-.4,1-1,1s-1-.4-1-1v-5.5c0-.6.4-1,1-1h1.5c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5ZM16,15.5c-1.4,0-2.5-1.5-2.5-3.5s1.1-3.5,2.5-3.5,2.5,1.5,2.5,3.5-1.1,3.5-2.5,3.5Z"/>   <path d="M10.5,10h-.5v1h.5c.3,0,.5-.2.5-.5s-.2-.5-.5-.5Z"/>   <path d="M15.5,12c0,.9.4,1.5.5,1.5.1,0,.5-.6.5-1.5s-.3-1.4-.5-1.5c-.2,0-.5.6-.5,1.5Z"/>' : '<path d="M4 18.313V7H44V18.313C41.8815 19.068 40.3636 21.1053 40.3636 23.5C40.3636 25.8947 41.8815 27.932 44 28.687V40H4V28.687C6.11853 27.932 7.63636 25.8947 7.63636 23.5C7.63636 21.1053 6.11853 19.068 4 18.313V18.313Z"/><path d="M13 18V29"/><path d="M18 18V29"/><path d="M18 18H21C22.6569 18 24 19.3431 24 21C24 22.6569 22.6569 24 21 24H18V18Z"/><ellipse cx="32" cy="24" rx="3" ry="5"/>';

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

module.exports = Ipo;
