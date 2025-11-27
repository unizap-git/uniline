'use strict';

var React = require('react');

function Dashboard(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M8.44365 41.5564C4.46243 37.5751 2 32.0751 2 26C2 13.8497 11.8497 4 24 4C36.1503 4 46 13.8497 46 26C46 32.0751 43.5376 37.5751 39.5564 41.5564"/><path d="M14.1005 35.8995C11.567 33.366 10 29.866 10 26C10 18.268 16.268 12 24 12"/><path d="M24 26V18"/>' : '<path d="M8.44365 41.5564C4.46243 37.5751 2 32.0751 2 26C2 13.8497 11.8497 4 24 4C36.1503 4 46 13.8497 46 26C46 32.0751 43.5376 37.5751 39.5564 41.5564"/><path d="M14.1005 35.8995C11.567 33.366 10 29.866 10 26C10 18.268 16.268 12 24 12"/><path d="M24 26V18"/>';

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

module.exports = Dashboard;
