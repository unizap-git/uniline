'use strict';

var React = require('react');

function Newlybuild(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M9.5,5v-1.5c0-.6.4-1,1-1h10c.6,0,1,.4,1,1v11c0,.6-.4,1-1,1h-2"/>   <path d="M13.5,8H3.5c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h10c1.1,0,2-.9,2-2v-10c0-1.1-.9-2-2-2ZM11,16h-1.5v1.5c0,.6-.4,1-1,1s-1-.4-1-1v-1.5h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h1.5v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5h1.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M19 10V7C19 5.89543 19.8954 5 21 5H41C42.1046 5 43 5.89543 43 7V29C43 30.1046 42.1046 31 41 31H37"/><rect x="5" y="18" width="24" height="24" rx="2"/><path d="M17 25V35"/><path d="M12 30H22"/>';

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

module.exports = Newlybuild;
