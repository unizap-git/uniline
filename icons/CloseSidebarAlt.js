'use strict';

var React = require('react');

function CloseSidebarAlt(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13 21h6c1.1046 0 2-.8954 2-2V5c0-1.10457-.8954-2-2-2h-6v18Z"/>   <path fill-rule="evenodd" d="M11 3H5c-1.10457 0-2 .89543-2 2v14c0 1.1046.89543 2 2 2h6V3Zm-2.29295 7.7071c.39052-.3905.39052-1.02368 0-1.41421-.39053-.39052-1.02369-.39052-1.41421 0L5.29289 11.2928c-.39052.3906-.39052 1.0237 0 1.4142l1.99995 2c.39052.3905 1.02368.3905 1.41421 0 .39052-.3905.39052-1.0237 0-1.4142l-1.29284-1.2929 1.29284-1.2928Z" clip-rule="evenodd"/>' : '<path d="M8.99994 10 7 11.9999l1.99994 2M12 5v14M5 4h14c.5523 0 1 .44772 1 1v14c0 .5523-.4477 1-1 1H5c-.55228 0-1-.4477-1-1V5c0-.55228.44772-1 1-1Z"/>';

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

module.exports = CloseSidebarAlt;
