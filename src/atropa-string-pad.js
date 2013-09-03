/*jslint
    white: true,
    vars: true
*/
/*globals
    module
*/

/**
 * @fileOverview atropa-string-pad: Pads strings on the right or left with user
 *  defined characters or strings.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 */

/**
 * Pads strings on the right or left with user defined characters or strings.
 * @author <a href="mailto:matthewkastor@gmail.com">
 *  Matthew Christopher Kastor-Inare III </a><br />
 *  ☭ Hial Atropa!! ☭
 * @param {Number} length The desired length of the string.
 * @param {String|Number} input The string or number to pad.
 * @param {String} padding The string to use for padding, may be one or more
 *  characters.
 * @param {Boolean} right set to true if you want to pad to the right. Defaults
 *  to left padding.
 * @returns {String} Returns a string whose <code>length</code> is equal to the
 *  given length.
 * @example
 *  console.log(
 *      pad(1, 'wee', 'um')
 *  );
 *  // logs wee
 * 
 *  console.log(
 *      pad(1, 'wee', 'um', true)
 *  );
 *  // logs wee
 * 
 *  console.log(
 *      pad(6, 'wee', 'um')
 *  );
 *  // logs umuwee
 * 
 *  console.log(
 *      pad(6, 'wee', 'um', true)
 *  );
 *  // logs weeumu
 * 
 */
function pad (length, input, padding, right) {
    "use strict";
    length = parseInt(length, 10);
    var i = String(input).split('');
    var p = String(padding).split('');
    
    if(i.length > length) {
        return input;
    }
    
    while(i.length + p.length < length) {
        p = p.concat(p);
    }
    
    while(i.length + p.length > length && p.length > 0 ) {
        p.pop();
    }
    
    if(right === true) {
        i = i.concat(p);
    } else {
        i = p.concat(i);
    }
    
    return i.join('');
}

try {
    module.exports = pad;
} catch (ignore) {
    // module.exports does not exist.
}



