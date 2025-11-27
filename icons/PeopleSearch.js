'use strict';

var React = require('react');

function PeopleSearch(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"/><path d="M27 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8V42H27"/><path d="M39.9997 41.0002L36.8281 37.8286"/><path d="M38 35C38 36.1046 37.5523 37.1046 36.8284 37.8284C36.1046 38.5523 35.1046 39 34 39C31.7909 39 30 37.2091 30 35C30 32.7909 31.7909 31 34 31C36.2091 31 38 32.7909 38 35Z"/>' : '<path d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"/><path d="M27 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8V42H27"/><path d="M39.9997 41.0002L36.8281 37.8286"/><path d="M38 35C38 36.1046 37.5523 37.1046 36.8284 37.8284C36.1046 38.5523 35.1046 39 34 39C31.7909 39 30 37.2091 30 35C30 32.7909 31.7909 31 34 31C36.2091 31 38 32.7909 38 35Z"/>';

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

module.exports = PeopleSearch;
