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
            that.$elm.wrap(function() {
                var strClass = that.options.cssClass + 
                    " " + 
                    that.getInputType() + 
                    " " + 
                    that.getInputName() + 
                    " " + 
                    that.getInputStatus();

                return "<span class='" + strClass + "'></span>";
            });
            that.$wrapper = that.$elm.parent(); // that.$wrapper will be that span
        },

        addEventsOnWrapper: function() {
            var that = this;
            if( typeof( that.$wrapper !== "undefined" ) ) {

                // click
                that.$wrapper.click(function(ev) {
                    // If there's no implicit label
                    if (that.$wrapper.parents("label").length === 0) {
                        that.$elm.trigger("click");
                    }
                    ev.stopPropagation();
                });
            }
        },

        addEventsOnInput: function() {
            var that = this;
            if( typeof( that.$wrapper !== "undefined" ) ) {
                
                // change
                that.$elm.change(function(ev){
                    ev.stopPropagation();
                    that.toogleAllWrappersClass();
                });

                // click
                that.$elm.click(function(ev){
                    ev.stopPropagation();
                });

                // focus
                that.$elm.focus(function() {
                    that.$wrapper.addClass("focus");
                });

                // blur
                that.$elm.blur(function() {
                    that.$wrapper.removeClass("focus");
                });

            }
        },

        /**
         * Toogle all wrappers with an input with same name inside
         */
        toogleAllWrappersClass: function() {
            var that = this;
            $("." + that._name + "." + that.getInputName() ).each( function( i ) {
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
            var that = this;
            return ( that.$elm.attr('checked') ) ? true : false;
        },

       /**
         * Gets the input "disabled" attr.
         * @return {boolean}
         */
        isInputDisabled: function() {
            var that = this;
            return ( that.$elm.attr('disabled') ) ? true : false;
        },

       /**
         * Gets the input "type" attr.
         * @return {string}
         */
        getInputType: function() {
            var that = this;
            return that.$elm.attr('type') || "";
        },

        /**
         * Gets the input "name" attr.
         * @return {string}
         */
        getInputName: function() {
            var that = this;
            return that.$elm.attr('name') || "";
        },

        /**
         * Get a string with input status for being added to CSS
         * @return {string}
         */
        getInputStatus: function() {
            var that = this,
                inputStatus = "";
            inputStatus += ( this.isInputChecked() ? " checked" : "" );
            inputStatus += ( this.isInputDisabled() ? " disabled" : "" );
            return inputStatus;
        },

        init: function() {
            var that = this;
            that.wrapInput();
            that.addEventsOnInput();
            that.addEventsOnWrapper();
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