'use strict';

var React = require('react');

function Bone(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M4.13982 11.889c-1.40388 1.4039-1.40388 3.5869 0 4.9907.52114.5212 1.22247.8909 1.9657 1.0148.12387.7432.49363 1.4446 1.01476 1.9657 1.40388 1.4039 3.58692 1.4039 4.99072 0 1.1572-1.1571 1.3605-2.8435.6102-4.1867l2.9523-2.9523c1.3432.7503 3.0296.5469 4.1867-.6102 1.4039-1.4039 1.4039-3.58687 0-4.99075-.5211-.52113-1.2224-.89089-1.9657-1.01476-.1238-.74323-.4936-1.44456-1.0147-1.9657-1.4039-1.40388-3.5869-1.40388-4.9908 0-1.1571 1.15712-1.3605 2.84353-.6102 4.18672L8.32654 11.2788c-1.34319-.7503-3.0296-.5469-4.18672.6102Z"/>' : '<path stroke-miterlimit="10" d="M16.8879 7.11205c.1788-.77492-.1192-1.66905-.7153-2.26515-1.0133-1.01335-2.5632-1.01335-3.5765 0-1.0134 1.01336-1.0134 2.5632 0 3.57655L8.42342 12.5961c-1.01336-1.0134-2.5632-1.0134-3.57655 0-1.01336 1.0133-1.01336 2.5632 0 3.5765.59609.5961 1.49023.8942 2.26515.7154-.17883.7749.11921 1.669.71531 2.2651 1.01335 1.0134 2.56317 1.0134 3.57657 0 1.0133-1.0134 1.0133-2.5632 0-3.5765l4.1726-4.1727c1.0134 1.0134 2.5632 1.0134 3.5766 0 1.0133-1.0133 1.0133-2.56318 0-3.57654-.5961-.59609-1.4903-.89414-2.2652-.71531Z"/>';

  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
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

module.exports = Bone;
