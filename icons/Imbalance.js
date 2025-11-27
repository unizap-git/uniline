'use strict';

var React = require('react');

function Imbalance(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 19V4"/><path d="M12 22L24 19L36 16"/><path d="M28 30L36 16"/><path d="M44 30L36 16"/><path d="M20 36L12 22"/><path d="M4 36L12 22"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 44C16.4183 44 20 40.4183 20 36H4C4 40.4183 7.58172 44 12 44Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 38C40.4183 38 44 34.4183 44 30H28C28 34.4183 31.5817 38 36 38Z"/>' : '<path d="M24 19V4"/><path d="M12 22L24 19L36 16"/><path d="M28 30L36 16"/><path d="M44 30L36 16"/><path d="M20 36L12 22"/><path d="M4 36L12 22"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 44C16.4183 44 20 40.4183 20 36H4C4 40.4183 7.58172 44 12 44Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36 38C40.4183 38 44 34.4183 44 30H28C28 34.4183 31.5817 38 36 38Z"/>';

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

module.exports = Imbalance;
