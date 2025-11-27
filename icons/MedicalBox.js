'use strict';

var React = require('react');

function MedicalBox(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17,3.5H7v5h10V3.5Z"/>   <path d="M20.5,7.5H3.5c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h17c1.1,0,2-.9,2-2v-10c0-1.1-.9-2-2-2ZM14.5,15.5h-1.5v1.5c0,.6-.4,1-1,1s-1-.4-1-1v-1.5h-1.5c-.6,0-1-.4-1-1s.4-1,1-1h1.5v-1.5c0-.6.4-1,1-1s1,.4,1,1v1.5h1.5c.6,0,1,.4,1,1s-.4,1-1,1Z"/>' : '<path d="M41 17H7C5.89543 17 5 17.8954 5 19L5.00003 39C5.00003 40.1046 5.89546 41 7.00002 41H41C42.1046 41 43 40.1046 43 39V19C43 17.8954 42.1046 17 41 17Z"/><path d="M34 7H14L14 17H34V7Z"/><path d="M19 29H29"/><path d="M24 24V34"/>';

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

module.exports = MedicalBox;
