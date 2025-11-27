'use strict';

var React = require('react');

function Cycle(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M13 35H7V41"/><path d="M41 41H35V35"/><path d="M35 13H41V7"/><path d="M7 7H13V13"/><path d="M13 7.29395C7.57778 10.8714 4 17.0178 4 23.9999C4 25.0195 4.0763 26.0213 4.2235 26.9999"/><path d="M26.9999 43.7765C26.0213 43.9237 25.0195 44 23.9999 44C17.0178 44 10.8714 40.4222 7.29395 35"/><path d="M43.7765 21C43.9237 21.9786 44 22.9804 44 24C44 30.9821 40.4222 37.1285 35 40.706"/><path d="M21 4.2235C21.9786 4.0763 22.9804 4 24 4C30.9821 4 37.1285 7.57778 40.706 13"/>' : '<path d="M13 35H7V41"/><path d="M41 41H35V35"/><path d="M35 13H41V7"/><path d="M7 7H13V13"/><path d="M13 7.29395C7.57778 10.8714 4 17.0178 4 23.9999C4 25.0195 4.0763 26.0213 4.2235 26.9999"/><path d="M26.9999 43.7765C26.0213 43.9237 25.0195 44 23.9999 44C17.0178 44 10.8714 40.4222 7.29395 35"/><path d="M43.7765 21C43.9237 21.9786 44 22.9804 44 24C44 30.9821 40.4222 37.1285 35 40.706"/><path d="M21 4.2235C21.9786 4.0763 22.9804 4 24 4C30.9821 4 37.1285 7.57778 40.706 13"/>';

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

module.exports = Cycle;
