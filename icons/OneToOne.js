'use strict';

var React = require('react');

function OneToOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M21,2.5H3c-1.1,0-2,.9-2,2v15c0,1.1.9,2,2,2h18c1.1,0,2-.9,2-2V4.5c0-1.1-.9-2-2-2ZM9,15c0,.6-.4,1-1,1s-1-.4-1-1v-4.2l-.5.3c-.5.3-1.1.2-1.4-.3-.3-.5-.2-1.1.3-1.4l2-1.3c.3-.2.7-.2,1,0,.3.2.5.5.5.9v6ZM13,14c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM13,10.5c0,.6-.4,1-1,1s-1-.4-1-1v-.5c0-.6.4-1,1-1s1,.4,1,1v.5ZM18.5,15c0,.6-.4,1-1,1s-1-.4-1-1v-4.2l-.5.3c-.5.3-1.1.2-1.4-.3-.3-.5-.2-1.1.3-1.4l2-1.3c.3-.2.7-.2,1,0,.3.2.5.5.5.9v6Z"/>' : '<path d="M42 7H6C4.89543 7 4 7.89543 4 9V39C4 40.1046 4.89543 41 6 41H42C43.1046 41 44 40.1046 44 39V9C44 7.89543 43.1046 7 42 7Z"/><path d="M12 20.5799L16 18V30"/><path d="M31 20.5799L35 18V30"/><path d="M24 20V21"/><path d="M24 27V28"/>';

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

module.exports = OneToOne;
