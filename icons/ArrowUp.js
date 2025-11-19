'use strict';

var React = require('react');

function ArrowUp(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12,20c-.6,0-1-.4-1-1v-10.6l-2.3,2.3c-.4.4-1,.4-1.4,0s-.4-1,0-1.4l4-4c0,0,.2-.2.3-.2.1,0,.2,0,.4,0h0c.1,0,.3,0,.4,0,.1,0,.2.1.3.2l4,4c.4.4.4,1,0,1.4s-1,.4-1.4,0l-2.3-2.3v10.6c0,.6-.4,1-1,1Z"/>' : '<path d="M12 6v13m0-13 4 4m-4-4-4 4"/>';

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

module.exports = ArrowUp;
