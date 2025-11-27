'use strict';

var React = require('react');

function Rugby(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-9da32543528b5a1)"><path d="M33.8994 33.8995C43.272 24.5269 46.4378 12.4968 40.9705 7.02941C35.5032 1.56207 23.473 4.7279 14.1004 14.1005C4.72786 23.4731 1.56204 35.5032 7.02938 40.9705C12.4967 46.4379 24.5269 43.2721 33.8994 33.8995Z"/><path d="M21.1713 21.1715L26.8281 26.8284"/><path d="M25.4144 16.9288L31.0713 22.5857"/><path d="M16.9291 25.4142L22.5859 31.071"/><path d="M12.6924 35.3196L35.3198 12.6922"/><path d="M5.6147 28.2426L19.7568 42.3848"/><path d="M28.2426 5.61519L42.3848 19.7573"/></g><defs><clipPath id="icon-9da32543528b5a1"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-456044113528b5a1)"><path d="M33.8994 33.8995C43.272 24.5269 46.4378 12.4968 40.9705 7.02941C35.5032 1.56207 23.473 4.7279 14.1004 14.1005C4.72786 23.4731 1.56204 35.5032 7.02938 40.9705C12.4967 46.4379 24.5269 43.2721 33.8994 33.8995Z"/><path d="M21.1713 21.1715L26.8281 26.8284"/><path d="M25.4144 16.9288L31.0713 22.5857"/><path d="M16.9291 25.4142L22.5859 31.071"/><path d="M12.6924 35.3196L35.3198 12.6922"/><path d="M5.6147 28.2426L19.7568 42.3848"/><path d="M28.2426 5.61519L42.3848 19.7573"/></g><defs><clipPath id="icon-456044113528b5a1"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = Rugby;
