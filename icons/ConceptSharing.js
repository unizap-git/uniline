'use strict';

var React = require('react');

function ConceptSharing(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M28.3669 36H24L15 31.0396L4.00879 35.0818L7.01068 41.0257L14.0833 38.0729C20.7 42.0243 24.7272 44 26.1651 44C27.603 44 33.5479 41.3334 44 36"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.9923 26.9878C28.9923 24.097 28.9923 22.5402 28.9923 22.3171C30.0923 21.861 31.535 21.193 32.364 20.364C33.9926 18.7353 35 16.4853 35 14C35 9.02944 30.9706 5 26 5C21.0294 5 17 9.02944 17 14C17 16.4853 18.0074 18.7353 19.636 20.364C20.465 21.193 21.9 21.861 23 22.3171C23.0056 22.6525 23.0056 24.2094 23 26.9878H28.9923Z"/><path d="M12 21L13 20"/><path d="M40 21L39 20"/><path d="M15 5L14 4"/><path d="M37 5L38 4"/><path d="M41 12H40"/><path d="M12 12H11"/>' : '<path d="M28.3669 36H24L15 31.0396L4.00879 35.0818L7.01068 41.0257L14.0833 38.0729C20.7 42.0243 24.7272 44 26.1651 44C27.603 44 33.5479 41.3334 44 36"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.9923 26.9878C28.9923 24.097 28.9923 22.5402 28.9923 22.3171C30.0923 21.861 31.535 21.193 32.364 20.364C33.9926 18.7353 35 16.4853 35 14C35 9.02944 30.9706 5 26 5C21.0294 5 17 9.02944 17 14C17 16.4853 18.0074 18.7353 19.636 20.364C20.465 21.193 21.9 21.861 23 22.3171C23.0056 22.6525 23.0056 24.2094 23 26.9878H28.9923Z"/><path d="M12 21L13 20"/><path d="M40 21L39 20"/><path d="M15 5L14 4"/><path d="M37 5L38 4"/><path d="M41 12H40"/><path d="M12 12H11"/>';

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

module.exports = ConceptSharing;
