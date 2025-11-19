'use strict';

var React = require('react');

function GlassWaterDroplet(props) {
  var size = props.size !== undefined ? props.size : 24;
  var strokeWidth = props.strokeWidth !== undefined ? props.strokeWidth : 1.5;
  var color = props.color !== undefined ? props.color : 'currentColor';
  var fill = props.fill !== undefined ? props.fill : false;
  var className = props.className !== undefined ? props.className : '';
  var style = props.style !== undefined ? props.style : {};

  var svgContent = fill ? '<path d="M12 6c-.268 0-.4602.10529-.5254.14309-.0858.0497-.1506.10275-.1893.13652-.0789.06896-.1458.1435-.1939.20022-.1011.11923-.2104.26866-.3176.42564-.2184.31962-.4786.74423-.7284 1.19853-.24933.4535-.49952.9569-.69038 1.43273C9.17832 9.97724 9 10.5183 9 11c0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-.4817-.1783-1.02276-.355-1.46327-.1909-.47583-.4411-.97923-.6904-1.43273-.2498-.4543-.5099-.87891-.7284-1.19853-.1072-.15698-.2165-.30641-.3176-.42564-.0481-.05672-.1149-.13126-.1939-.20022-.0387-.03377-.1035-.08682-.1892-.13652C12.4602 6.10529 12.268 6 12 6Z"/>   <path fill-rule="evenodd" d="M6 2c-.27677 0-.54116.11471-.73024.31682-.18909.20211-.28595.47354-.26754.7497L6.07775 19.1996C6.18281 20.7755 7.49172 22 9.07111 22h5.85779c1.5794 0 2.8883-1.2246 2.9934-2.8004l1.0755-16.13308c.0184-.27616-.0785-.54759-.2676-.7497C18.5412 2.11471 18.2768 2 18 2H6Zm1.86889 14-.8-12h9.86221l-.8 12H7.86889Z" clip-rule="evenodd"/>' : '<path d="M7 17h10M6 3l1.07554 16.133C7.14558 20.1836 8.01818 21 9.07111 21h5.85779c1.0529 0 1.9255-.8164 1.9956-1.867L18 3H6Zm8 8c0 1.1046-.8954 2-2 2s-2-.8954-2-2c0-1.10457 1.7912-4 2-4 .2088 0 2 2.89543 2 4Z"/>';

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

module.exports = GlassWaterDroplet;
