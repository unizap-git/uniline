'use strict';

var React = require('react');

function Comb(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.20117 31.0713L16.9291 43.7992L43.7992 16.9292L31.0712 4.20123"/><path d="M9.15137 26.1221L16.2224 33.1931"/><path d="M14.8076 20.4653L21.8787 27.5364"/><path d="M20.4648 14.8081L27.5359 21.8792"/><path d="M26.1211 9.15137L33.1922 16.2224"/><path d="M12.6865 39.5566L39.5566 12.6866"/>' : '<path d="M4.20117 31.0713L16.9291 43.7992L43.7992 16.9292L31.0712 4.20123"/><path d="M9.15137 26.1221L16.2224 33.1931"/><path d="M14.8076 20.4653L21.8787 27.5364"/><path d="M20.4648 14.8081L27.5359 21.8792"/><path d="M26.1211 9.15137L33.1922 16.2224"/><path d="M12.6865 39.5566L39.5566 12.6866"/>';

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

module.exports = Comb;
