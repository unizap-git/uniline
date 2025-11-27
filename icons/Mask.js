'use strict';

var React = require('react');

function Mask(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17,6H7c-3.3,0-6,2.7-6,6v1.5c0,4.1,3.4,7.5,7.5,7.5h7c4.1,0,7.5-3.4,7.5-7.5v-1.5c0-3.3-2.7-6-6-6ZM15,14.5h-2v2c0,.6-.4,1-1,1s-1-.4-1-1v-2h-2c-.6,0-1-.4-1-1s.4-1,1-1h2v-2c0-.6.4-1,1-1s1,.4,1,1v2h2c.6,0,1,.4,1,1s-.4,1-1,1Z"/>   <path d="M2,12.5v-6.5c0-1.2.9-2.1,2.1-2.1s1.1.2,1.4.6c.8.8,1.4,1.6,1.7,2.5"/>   <path d="M22,12.5v-6.1c0-1.2-1-2.2-2.2-2.2s-1.3.3-1.8.9c-.5.7-1,1.3-1.5,2"/>' : '<path fill-rule="evenodd" clip-rule="evenodd" d="M14 14H34C39.5228 14 44 18.4772 44 24V27C44 34.1797 38.1797 40 31 40H24H17C9.8203 40 4 34.1797 4 27V24C4 18.4772 8.47715 14 14 14Z"/><path d="M18 27H30"/><path d="M24 21V33"/><path d="M4 25.0421V12.0145C4.00003 9.7124 5.86624 7.84619 8.16833 7.84619C9.24067 7.84619 10.2718 8.25946 11.0472 9.00009C12.6463 10.5273 13.7875 12.194 14.4707 14.0002"/><path d="M44 25.0421V12.7656C44 10.2925 41.9952 8.2876 39.522 8.2876C38.1474 8.2876 36.8489 8.91898 36 10.0002C34.9552 11.3308 33.9552 12.6641 33 14.0002"/>';

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

module.exports = Mask;
