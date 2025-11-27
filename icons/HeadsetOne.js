'use strict';

var React = require('react');

function HeadsetOne(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M36 32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16"/><path d="M36 32V32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16"/><path d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32"/><path d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32V32"/><path d="M12 32V31.5V29V24V16C12 9.37258 17.3726 4 24 4C30.6274 4 36 9.37258 36 16V32C36 38.6274 30.6274 44 24 44"/>' : '<path d="M36 32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16"/><path d="M36 32V32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16"/><path d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32"/><path d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32V32"/><path d="M12 32V31.5V29V24V16C12 9.37258 17.3726 4 24 4C30.6274 4 36 9.37258 36 16V32C36 38.6274 30.6274 44 24 44"/>';

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

module.exports = HeadsetOne;
