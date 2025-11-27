'use strict';

var React = require('react');

function ArchersBow(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<g clip-path="url(#icon-da49e84c8d897c6)"><path d="M40.8505 43.9205L39.2762 43.6056C36.9266 43.1357 35.856 39.9987 36.6027 37.7219C38.5571 31.7629 37.1246 24.1116 36.3326 20.8093C36.0869 19.7845 35.2752 19.0154 34.2529 18.7598L31.9902 18.1941C30.9153 17.9254 30.0761 17.0862 29.8074 16.0113L29.2417 13.7486C28.9861 12.7262 28.217 11.9146 27.1922 11.6688C23.8899 10.8769 16.2385 9.4444 10.2795 11.3988C8.00278 12.1455 4.86576 11.0749 4.39585 8.72533L4.08097 7.15096"/><path d="M6 11L38 43"/><path d="M12 36L43 5"/></g><defs><clipPath id="icon-da49e84c8d897c6"><rect width="48" height="48"/></clipPath></defs>' : '<g clip-path="url(#icon-8a77606c8d897c6)"><path d="M40.8505 43.9205L39.2762 43.6056C36.9266 43.1357 35.856 39.9987 36.6027 37.7219C38.5571 31.7629 37.1246 24.1116 36.3326 20.8093C36.0869 19.7845 35.2752 19.0154 34.2529 18.7598L31.9902 18.1941C30.9153 17.9254 30.0761 17.0862 29.8074 16.0113L29.2417 13.7486C28.9861 12.7262 28.217 11.9146 27.1922 11.6688C23.8899 10.8769 16.2385 9.4444 10.2795 11.3988C8.00278 12.1455 4.86576 11.0749 4.39585 8.72533L4.08097 7.15096"/><path d="M6 11L38 43"/><path d="M12 36L43 5"/></g><defs><clipPath id="icon-8a77606c8d897c6"><rect width="48" height="48"/></clipPath></defs>';

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

module.exports = ArchersBow;
