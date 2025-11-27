'use strict';

var React = require('react');

function Voicemail(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M11 31C14.866 31 18 27.866 18 24C18 20.134 14.866 17 11 17C7.13401 17 4 20.134 4 24C4 27.866 7.13401 31 11 31Z"/><path d="M37 31C40.866 31 44 27.866 44 24C44 20.134 40.866 17 37 17C33.134 17 30 20.134 30 24C30 27.866 33.134 31 37 31Z"/><path d="M12 31H36"/>' : '<path d="M11 31C14.866 31 18 27.866 18 24C18 20.134 14.866 17 11 17C7.13401 17 4 20.134 4 24C4 27.866 7.13401 31 11 31Z"/><path d="M37 31C40.866 31 44 27.866 44 24C44 20.134 40.866 17 37 17C33.134 17 30 20.134 30 24C30 27.866 33.134 31 37 31Z"/><path d="M12 31H36"/>';

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

module.exports = Voicemail;
