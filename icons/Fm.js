'use strict';

var React = require('react');

function Fm(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<circle cx="24" cy="22" r="4"/><path d="M21.5238 33.0539C22.7619 31.6487 25.2381 31.6486 26.4762 33.0539C27.7143 34.4592 26.4763 43.3608 25.6508 44.2975C24.8254 45.2342 23.1746 45.2342 22.3492 44.2975C21.5238 43.3608 20.2857 34.4591 21.5238 33.0539Z"/><path d="M30.9668 30.513C33.4289 28.4957 35 25.4313 35 22C35 15.9249 30.0751 11 24 11C17.9249 11 13 15.9249 13 22C13 25.4313 14.5711 28.4957 17.0332 30.513"/><path d="M31.9258 38.1656C37.8928 35.2345 42 29.0969 42 22C42 12.0589 33.9411 4 24 4C14.0589 4 6 12.0589 6 22C6 29.0969 10.1072 35.2345 16.0742 38.1656"/>' : '<circle cx="24" cy="22" r="4"/><path d="M21.5238 33.0539C22.7619 31.6487 25.2381 31.6486 26.4762 33.0539C27.7143 34.4592 26.4763 43.3608 25.6508 44.2975C24.8254 45.2342 23.1746 45.2342 22.3492 44.2975C21.5238 43.3608 20.2857 34.4591 21.5238 33.0539Z"/><path d="M30.9668 30.513C33.4289 28.4957 35 25.4313 35 22C35 15.9249 30.0751 11 24 11C17.9249 11 13 15.9249 13 22C13 25.4313 14.5711 28.4957 17.0332 30.513"/><path d="M31.9258 38.1656C37.8928 35.2345 42 29.0969 42 22C42 12.0589 33.9411 4 24 4C14.0589 4 6 12.0589 6 22C6 29.0969 10.1072 35.2345 16.0742 38.1656"/>';

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

module.exports = Fm;
