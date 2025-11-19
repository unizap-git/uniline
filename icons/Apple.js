'use strict';

var React = require('react');

function Apple(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"/>' : '<path d="M17.3,12.6c0,1.8,1.3,3.4,2.9,4-.3,1-.8,2-1.4,2.8-.8,1.2-1.7,2.4-3.1,2.5-1.3,0-1.8-.8-3.3-.8s-2,.8-3.3.8-2.3-1.3-3.2-2.5c-1.7-2.5-3-7-1.3-10.1.8-1.5,2.4-2.5,4.1-2.5s2.5.9,3.3.9,2.3-1.1,3.8-.9c1.5,0,2.8.8,3.7,2-1.3.8-2.1,2.2-2.2,3.8ZM16,1c-1.1,0-2.2.7-2.9,1.5-.8.8-1.1,2-1.1,3.1,0,0,4-.6,4-4.6Z" stroke-miterlimit="10"/>';

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

module.exports = Apple;
