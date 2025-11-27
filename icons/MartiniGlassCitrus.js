'use strict';

var React = require('react');

function MartiniGlassCitrus(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M4.00003 7h8.02747c.2487-2.24998 2.1562-4 4.4725-4C18.9853 3 21 5.01472 21 7.5S18.9853 12 16.5 12c-.8801 0-1.702-.2533-2.3956-.6902L11 14.4142V19h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H6.99999c-.55228 0-1-.4477-1-1s.44772-1 1-1h2.00004v-4.5858L3.29292 8.70711c-.286-.286-.37155-.71612-.21677-1.08979C3.23093 7.24364 3.59557 7 4.00003 7ZM16 7h-1.95c.2316-1.14112 1.2405-2 2.45-2C17.8807 5 19 6.11929 19 7.5S17.8807 10 16.5 10c-.3228 0-.6308-.06086-.9138-.17198l1.1209-1.12091c.286-.286.3716-.71612.2168-1.08979C16.7691 7.24364 16.4045 7 16 7Z" clip-rule="evenodd"/>' : '<path d="M19.5,28.5l13.6-13.6H5.8l13.6,13.6ZM19.5,28.5v13.6M12.6,42.2h13.6M26.4,14.9c0-.4,0-.8,0-1.1,0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-4.1-.9-5.6-2.3"/>';

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

module.exports = MartiniGlassCitrus;
