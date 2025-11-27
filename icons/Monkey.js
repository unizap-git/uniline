'use strict';

var React = require('react');

function Monkey(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M6.6,10.5c-.4-.7-.6-1.6-.6-2.4,0-3.1,2.7-5.6,6-5.6s6,2.5,6,5.6-.2,1.7-.6,2.4" stroke-miterlimit="2"/>   <path d="M12,8.5c-4.7,0-8.5,3.1-8.5,7s3.8,7,8.5,7,8.5-3.1,8.5-7-3.8-7-8.5-7ZM16,17.6c-1.1,1.1-2.5,1.6-4,1.6s-3-.6-4.2-1.7c-.4-.4-.4-1,0-1.4s1-.4,1.4,0c1.5,1.5,3.9,1.6,5.3.1.4-.4,1-.4,1.4,0s.4,1,0,1.4Z"/>   <path d="M6,11.5c-1.7,0-3-1.1-3-2.5s1.3-2.5,3-2.5" stroke-miterlimit="2"/>   <path d="M18,11.5c1.7,0,3-1.1,3-2.5s-1.3-2.5-3-2.5" stroke-miterlimit="2"/>   <circle cx="10" cy="7" r="1"/>   <circle cx="14" cy="7" r="1"/>' : '<path d="M13.2 21C12.4312 19.531 12 17.8817 12 16.1389C12 9.98704 17.3726 5 24 5C30.6274 5 36 9.98704 36 16.1389C36 17.8817 35.5688 19.531 34.8 21"/><ellipse cx="24" cy="31" rx="15" ry="12"/><path d="M30.5177 33.8742C26.8486 37.5433 20.7965 37.44 17 33.6435"/><path d="M12 23C8.68629 23 6 20.7614 6 18C6 15.2386 8.68629 13 12 13"/><path d="M36 23C39.3137 23 42 20.7614 42 18C42 15.2386 39.3137 13 36 13"/><circle cx="20" cy="14" r="2"/><circle cx="28" cy="14" r="2"/>';

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

module.exports = Monkey;
