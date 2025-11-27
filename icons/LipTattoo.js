'use strict';

var React = require('react');

function LipTattoo(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M20,12.3s0,0,0,0c0,0,0-.1,0-.2,0,0,0,.2,0,.2Z"/>     <path d="M19.8,11.9c0,0-.1-.2-.2-.2,0,0,.2.2.2.2Z"/>     <path d="M6.2,11.5c1.9.4,7,.9,12.7,0,.3,0,.5,0,.7.2,0,0-.1-.1-.2-.1-.3-.1-1.3-.9-2.4-2.2-.7-.9-1.8-1.4-3-1.3-.6,0-1.1.2-1.5.5-.5-.3-1.1-.5-1.8-.5-1.1,0-2.1.5-2.6,1.4-.4.7-2.2,1.9-2.5,2.1,0,0,0,0-.1.1.2-.1.5-.2.7-.1Z"/>     <path d="M5.4,11.7c-.1,0-.2.2-.3.3,0,0,.2-.2.3-.3Z"/>     <path d="M19.2,13.5c-2.4.4-4.8.5-6.8.5-3,0-5.3-.3-6.5-.5-.2,0-.4-.2-.5-.3,1,1.4,4.2,3.9,7.2,3.9s6.4-2.8,7.2-3.8c-.1.2-.3.3-.6.3Z"/>     <path d="M20,12.7s0,0,0,0c0,0,0,0,0,0Z"/>     <path d="M5,12.5s0,0,0,.1c0,0,0,0,0-.1Z"/>     <path d="M5.1,12c0,0,0,.1-.1.2,0,0,0,0,0,0,0-.1,0-.2.1-.3Z"/>   </g>   <path d="M22,12c0,5.5-4.5,10-10,10S2,17.5,2,12,6.5,2,12,2"/>   <path d="M19.5,4.2l.2.5h.6l-.4.3.2.5-.4-.3-.4.3.2-.5-.4-.3h.6l.2-.5Z" stroke-miterlimit="2"/>   <path d="M17.5,11.3c.6.6,1.2,1,1.5,1.1-.4.5-1.1,1.3-2.1,2"/>   <path d="M8,11c-.8.7-1.7,1.3-2,1.5.5.7,1.6,1.7,3,2.5"/>' : '<path d="M25 19.8902C23.5 17.37 19.5 17.3699 18 19.8902C16.8849 21.7639 13 24.5 12 24.9432C13.6667 27.2955 19.5 32 25 32C31.5 32 36.1667 27.2955 38 24.9432C37 24.5 34.8361 22.8196 32.5 19.8902C30.5 17.3823 26.5 17.3823 25 19.8902Z"/><path d="M12 25C15.7899 25.7546 26.2958 26.8111 38 25"/><path d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4"/><path d="M39 8.47214L39.343 9.52786H40.4531L39.555 10.1803L39.8981 11.2361L39 10.5836L38.1019 11.2361L38.445 10.1803L37.5469 9.52786H38.657L39 8.47214Z"/><path d="M35.0001 22.6562C36.2936 23.9045 37.3745 24.6658 38.0001 24.943C37.1558 26.0262 35.7108 27.6081 33.7627 28.9998"/><path d="M16.0978 22C14.5549 23.374 12.6562 24.6523 12 24.9432C12.9413 26.2716 15.2114 28.3503 18 29.9081"/>';

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

module.exports = LipTattoo;
