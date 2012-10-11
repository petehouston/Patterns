define([
    '../logging'
], function(logging) {
    var log = logging.getLogger('old-injection');

    var init = function($el, opts) {
        log.info($el);
    };

    return {
        markup_trigger: '.injection,[data-injection]',
        init: init
    };
});
// jshint indent: 4, browser: true, jquery: true, quotmark: double
// vim: sw=4 expandtab
