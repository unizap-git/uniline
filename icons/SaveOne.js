'use strict';

var React = require('react');

function SaveOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g>     <path d="M19.7,2h-3.7c.6,0,1,.4,1,1v9c0,.6-.4,1-1,1H7.5c-.6,0-1-.4-1-1V3c0-.6.4-1,1-1h-3.1c-1.3,0-2.4,1.1-2.4,2.4v15.3c0,1.3,1.1,2.3,2.4,2.3h15.3c1.3,0,2.3-1.1,2.3-2.3V4.4c0-1.3-1.1-2.4-2.3-2.4Z"/>     <path d="M12,6.5v2c0,.6.4,1,1,1s1-.4,1-1v-2c0-.6-.4-1-1-1s-1,.4-1,1Z"/>   </g>   <path d="M5.5,3h12.5" stroke-miterlimit="2"/>' : '<path d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"/><path d="M32 6V24H15V6H32Z"/><path d="M26 13V17"/><path d="M10.9971 6H35.9986"/>';

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

module.exports = SaveOne;
