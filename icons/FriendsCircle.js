'use strict';

var React = require('react');

function FriendsCircle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31 7V24V7Z"/><path d="M31 7V24"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6357 6.63599L30.7779 20.7781L16.6357 6.63599Z"/><path d="M16.6357 6.63599L30.7779 20.7781"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 17H24H7Z"/><path d="M7 17H24"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3643 17.636L6.22212 31.7781L20.3643 17.636Z"/><path d="M20.3643 17.636L6.22212 31.7781"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 25V42V25Z"/><path d="M17 25V42"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6357 27.636L31.7779 41.7781L17.6357 27.636Z"/><path d="M17.6357 27.636L31.7779 41.7781"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 31L42 31L24 31Z"/><path d="M24 31L42 31"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42.3643 16.636L28.2221 30.7781L42.3643 16.636Z"/><path d="M42.3643 16.636L28.2221 30.7781"/><path d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"/>' : '<path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M31 7V24V7Z"/><path d="M31 7V24"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.6357 6.63599L30.7779 20.7781L16.6357 6.63599Z"/><path d="M16.6357 6.63599L30.7779 20.7781"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 17H24H7Z"/><path d="M7 17H24"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20.3643 17.636L6.22212 31.7781L20.3643 17.636Z"/><path d="M20.3643 17.636L6.22212 31.7781"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17 25V42V25Z"/><path d="M17 25V42"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.6357 27.636L31.7779 41.7781L17.6357 27.636Z"/><path d="M17.6357 27.636L31.7779 41.7781"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24 31L42 31L24 31Z"/><path d="M24 31L42 31"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42.3643 16.636L28.2221 30.7781L42.3643 16.636Z"/><path d="M42.3643 16.636L28.2221 30.7781"/><path d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"/>';

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

module.exports = FriendsCircle;
