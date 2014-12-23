config = {
    baseUrl: '/src',
    paths: {
        "jquery": "bower_components/jquery/jquery",
        "logging": "bower_components/logging/src/logging",
        "jquery.form": "bower_components/jquery-form/jquery.form",
        "jquery.anythingslider": "bower_components/AnythingSlider/js/jquery.anythingslider",
        "jcrop": "bower_components/jcrop/js/jquery.Jcrop",
        "klass": "bower_components/klass/src/klass",
        "photoswipe": "legacy/photoswipe",
        "parsley": "bower_components/parsleyjs/parsley",
        "parsley.extend": "bower_components/parsleyjs/parsley.extend",
        "patternslib.slides": "bower_components/slides/src/slides",
        "modernizr": "bower_components/modernizr/modernizr",
        "less": "bower_components/less.js/dist/less-1.6.2",
        "prefixfree": "bower_components/prefixfree/prefixfree.min",
        "Markdown.Converter": "legacy/Markdown.Converter",
        "Markdown.Extra": "legacy/Markdown.Extra",
        "Markdown.Sanitizer": "legacy/Markdown.Sanitizer",
        "select2": "bower_components/select2/select2.min",
        "jquery.chosen": "bower_components/chosen/chosen/chosen.jquery",
        "jquery.fullcalendar": "bower_components/fullcalendar/fullcalendar.min",
        "jquery.fullcalendar.dnd": "bower_components/fullcalendar/lib/jquery-ui.custom.min",
        "jquery.placeholder": "bower_components/jquery-placeholder/jquery.placeholder.min",
        "jquery.textchange": "bower_components/jquery-textchange/jquery.textchange",
        "tinymce": "bower_components/jquery.tinymce/jscripts/tiny_mce/jquery.tinymce",
        "spectrum": "bower_components/spectrum/spectrum",
        // Core
        "pat-utils": "core/utils",
        "pat-compat": "core/compat",
        "pat-jquery-ext": "core/jquery-ext",
        "pat-logger": "core/logger",
        "pat-parser": "core/parser",
        "pat-remove": "core/remove",
        "pat-url": "core/url",
        "pat-store": "core/store",
        "pat-registry": "core/registry",
        "pat-htmlparser": "lib/htmlparser",
        "pat-depends_parse": "lib/depends_parse",
        "pat-dependshandler": "lib/dependshandler",
        "pat-input-change-events": "lib/input-change-events",
        // Patterns
        "patterns": "patterns",
        "pat-ajax": "pat/ajax",
        "pat-autofocus": "pat/autofocus",
        "pat-autoscale": "pat/autoscale",
        "pat-autosubmit": "pat/autosubmit",
        "pat-autosuggest": "pat/autosuggest",
        "pat-breadcrumbs": "pat/breadcrumbs",
        "pat-bumper": "pat/bumper",
        "pat-carousel": "pat/carousel",
        "pat-checkedflag": "pat/checkedflag",
        "pat-checklist": "pat/checklist",
        "pat-chosen": "pat/chosen",
        "pat-collapsible": "pat/collapsible",
        "pat-colour-picket": "pat/colour-picker",
        "pat-depends": "pat/depends",
        "pat-edit-tinymce": "pat/edit-tinymce",
        "pat-equaliser": "pat/equaliser",
        "pat-expandable": "pat/expandable",
        "pat-focus": "pat/focus",
        "pat-formstate": "pat/form-state",
        "pat-forward": "pat/forward",
        "pat-fullcalendar": "pat/fullcalendar",
        "pat-gallery": "pat/gallery",
        "pat-image-crop": "pat/image-crop",
        "pat-inject": "pat/inject",
        "pat-legend": "pat/legend",
        "pat-markdown": "pat/markdown",
        "pat-menu": "pat/menu",
        "pat-modal": "pat/modal",
        "pat-navigation": "pat/navigation",
        "pat-notification": "pat/notification",
        "pat-placeholder": "pat/placeholder",
        "pat-selectbox": "pat/selectbox",
        "pat-skeleton": "pat/skeleton",
        "pat-slides": "pat/slides",
        "pat-slideshow-builder": "pat/slideshow-builder",
        "pat-sortable": "pat/sortable",
        "pat-stacks": "pat/stacks",
        "pat-subform": "pat/subform",
        "pat-switch": "pat/switch",
        "pat-toggle": "pat/toggle",
        "pat-tooltip": "pat/tooltip",
        "pat-validate": "pat/validate",
        "pat-zoom": "pat/zoom",
        // Calendar pattern
        "moment": "bower_components/moment/moment",
        "moment-timezone": "bower_components/moment-timezone/moment-timezone",
        "pat-calendar": "pat/calendar/calendar",
        "pat-calendar-dnd": "pat/calendar/dnd",
        "pat-calendar-moment-timezone-data": "pat/calendar/moment-timezone-data"
    },

    shim: {
        "jcrop":                        { deps: ["jquery"] },
        "jquery":                       { exports: ["jQuery"] },
        "jquery.anythingslider":        { deps: ["jquery"] },
        "jquery.chosen":                { deps: ["jquery"] },
        "jquery.fullcalendar.dnd":      { deps: ["jquery"] },
        "jquery.placeholder":           { deps: ["jquery"] },
        "jquery.textchange":            { deps: ["jquery"] },
        "parsley":                      { deps: ["jquery"] },
        "parsley.extend":               { deps: ["jquery"] },
        "photoswipe":                   { deps: ["klass"] },
        "select2":                      { deps: ["jquery"] },
        "spectrum":                     { deps: ["jquery"] },
        "tinymce":                      { deps: ["jquery"] }
    },
};

if (typeof(require) !== 'undefined') {
    require.config(config);
    require(["patterns"], function(patterns) {});
}