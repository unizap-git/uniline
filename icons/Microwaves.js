'use strict';

var React = require('react');

function Microwaves(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<rect x="5" y="34" width="24" height="38" rx="2" transform="rotate(-90 5 34)"/><path d="M20 19H24"/><path d="M13 25L35 25"/><path d="M12 34L12 38"/><path d="M20 34L20 38"/><path d="M28 34L28 38"/><path d="M36 34L36 38"/><path d="M15 19C15 20.1046 14.1046 21 13 21C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17C14.1046 17 15 17.8954 15 19Z"/>' : '<rect x="5" y="34" width="24" height="38" rx="2" transform="rotate(-90 5 34)"/><path d="M20 19H24"/><path d="M13 25L35 25"/><path d="M12 34L12 38"/><path d="M20 34L20 38"/><path d="M28 34L28 38"/><path d="M36 34L36 38"/><path d="M15 19C15 20.1046 14.1046 21 13 21C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17C14.1046 17 15 17.8954 15 19Z"/>';

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

module.exports = Microwaves;
