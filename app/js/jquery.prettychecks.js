/*!
 * jQuery prettychecks v.0.0.2 alpha
 * Original author: @alfonsomartinde
 * Licensed under the MIT license
 * Dependencies: jQuery 1.4.2+
 *
 * Description
 * -----------------------------------------------------------------------------
 * Replaces the default User Agent checkboxes and radios for images
 *
 *   1) It will wrap the input element with a span which has a backround 
 *      image, previously defined in CSS.
 *   2) Add some classes to that span, depending on the input status (checked, 
        disabled, required, etc).
 *   3) Hides the input element with display:none;
 *
 * Usage
 * -----------------------------------------------------------------------------
 * $("input[type=checkbox], input[type=radio]").prettychecks();
 *
 */
;(function ( $, window, document, undefined ) {

    var pluginName = "prettychecks",
        dataPlugin = 'plugin_' + pluginName,
        defaults = {
            cssClass: 'prettychecks'
        };

    function Plugin( element, options ) {
        this.element   = element;
        this.$elm      = $( element );
        this.options   = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name     = pluginName;
        this.init();
    }

    Plugin.prototype = {

        /**
         * Wraps the input
         */
        wrapInput: function() {
            var that = this;
            this.$elm.wrap(function() {
                var strClass = that.options.cssClass + 
                    " " + 
                    that.getInputType() + 
                    " " + 
                    that.getInputName() + 
                    " " + 
                    that.getInputStatus();

                return "<span class='" + strClass + "'></span>";
            });
            this.$wrapper = this.$elm.parent(); // this.$wrapper will be this span
        },

        /**
         * Add events on wrapper <span>: click
         */
        addEventsOnWrapper: function() {
            var that = this;
            if( typeof( this.$wrapper !== "undefined" ) ) {

                // click
                this.$wrapper.click(function(ev) {
                    // If there's no implicit label
                    if (that.$wrapper.parents("label").length === 0) {
                        that.$elm.trigger("click");
                    }
                    ev.stopPropagation();
                });
            }
        },

        /**
         * Add events on inputs: change, click, focus and blur
         */
        addEventsOnInput: function() {
            var that = this;
            if( typeof( this.$wrapper !== "undefined" ) ) {
                
                // change
                this.$elm.change(function(ev){
                    ev.stopPropagation();
                    that.toogleAllWrappersClass();
                });

                // click
                this.$elm.click(function(ev){
                    ev.stopPropagation();
                });

                // focus
                this.$elm.focus(function() {
                    that.$wrapper.addClass("focus");
                });

                // blur
                this.$elm.blur(function() {
                    that.$wrapper.removeClass("focus");
                });

            }
        },

        /**
         * Toogle all wrappers with an input with same name inside
         */
        toogleAllWrappersClass: function() {
            $("." + this._name + "." + this.getInputName() ).each( function( i ) {
                if( $( this ).find("input:checked").length > 0 ) {
                    $( this ).addClass( "checked" );
                } else {
                    $( this ).removeClass( "checked" );
                }
            });
        },

       /**
         * Gets the input "checked" attr.
         * @return {boolean}
         */
        isInputChecked: function() {
            return ( this.$elm.attr('checked') ) ? true : false;
        },

       /**
         * Gets the input "disabled" attr.
         * @return {boolean}
         */
        isInputDisabled: function() {
            return ( this.$elm.attr('disabled') ) ? true : false;
        },

       /**
         * Gets the input "type" attr.
         * @return {string}
         */
        getInputType: function() {
            return this.$elm.attr('type') || "";
        },

        /**
         * Gets the input "name" attr.
         * @return {string}
         */
        getInputName: function() {
            return this.$elm.attr('name') || "";
        },

        /**
         * Get a string with input status for being added to CSS
         * @return {string}
         */
        getInputStatus: function() {
            var inputStatus = "";
            inputStatus += ( this.isInputChecked() ? " checked" : "" );
            inputStatus += ( this.isInputDisabled() ? " disabled" : "" );
            return inputStatus;
        },

        init: function() {
            this.wrapInput();
            this.addEventsOnInput();
            this.addEventsOnWrapper();
        }

    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, dataPlugin)) {
                $.data(this, dataPlugin,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );