'use strict';

var React = require('react');

function GlassWater(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path fill-rule="evenodd" d="M6 2c-.27677 0-.54116.11471-.73024.31682-.18909.20211-.28595.47354-.26754.7497L6.07775 19.1996C6.18281 20.7755 7.49172 22 9.07111 22h5.85779c1.5794 0 2.8883-1.2246 2.9934-2.8004l1.0755-16.13308c.0184-.27616-.0785-.54759-.2676-.7497C18.5412 2.11471 18.2768 2 18 2H6Zm1.2124 4.15264L7.06889 4h9.86221l-.1651 2.47714-.0179.0163c-.133.12056-.3226.28077-.5474.43924-.4853.34209-.9823.56732-1.3743.56732-.2473 0-.3394-.06433-.6919-.4371l-.0272-.02876C13.7466 6.65192 13.1314 6 11.9894 6c-1.1421 0-1.7573.65192-2.11794 1.03414l-.02716.02876c-.35252.37277-.44468.4371-.69195.4371-.24728 0-.33944-.06433-.69196-.4371l-.02716-.02876c-.25189-.26693-.62791-.66541-1.22083-.8815Z" clip-rule="evenodd"/>' : '<path d="M12.6,14c2.8,0,2.8,3,5.7,3s2.8-3,5.7-3,2.8,3,5.7,3,5.7-3,5.7-3M12,5.9l2.2,32.4c.1,2.1,1.9,3.7,4,3.7h11.8c2.1,0,3.9-1.6,4-3.7l2.2-32.4H12Z"/>';

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

module.exports = GlassWater;
