/*!
 * jQuery prettychecks v.0.0.1 alpha
 * Original author: @alfonsomartinde
 * Licensed under the MIT license
 * Dependencies: jQuery 1.4.2+
 *
 * Description
 * -----------------------------------------------------------------------------
 * Replaces the default SO checkboxes and radios for images
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
        }

    function Plugin( element, options ) {
        this.$elm      = $( element );
        this.options   = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name     = pluginName;
        this.init();
    }

    Plugin.prototype = {

        hideInput: function() {
            var that = this;
            that.$elm.attr("tabindex",0);
            that.$elm.attr("style", "position: absolute !important; clip: rect(1px, 1px, 1px, 1px);");
        },

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
            that.$parent = that.$elm.parent(); // Delegates here
        },

        delegateEvents: function() {
            var that = this;

            //  Delegate events only if it was previously wrapped by wrapInput()
            if( typeof( that.$parent !== "undefined" ) ) {
                that.$parent.delegate( "input", "click", function() {
                    that.toogleWrapperCheck( $(this) );
                });
                that.$parent.delegate( "input", "focus", function() {
                    that.$parent.addClass("hover");
                });
                that.$parent.delegate( "input", "blur", function() {
                    that.$parent.removeClass("hover");
                });
            }
        },

        toogleWrapperCheck: function( $elm ) {
            var that = this;
            $("." + that._name + "." + that.getInputName() ).each(function( i ) {
                $( this ).find("input").attr('checked') 
                    ? $( this ).addClass( "checked" ) 
                    : $( this ).removeClass( "checked" );
            });
        },

        isInputChecked: function() {
            var that = this;
            return ( that.$elm.attr('checked') ) ? true : false;
        },

        isInputDisabled: function() {
            var that = this;
            return ( that.$elm.attr('disabled') ) ? true : false;
        },

        getInputType: function() {
            var that = this;
            return that.$elm.attr('type') || "";
        },

        getInputName: function() {
            var that = this;
            return that.$elm.attr('name') || "";
        },

        getInputStatus: function() {
            var that = this,
                inputStatus = "";
            inputStatus += ( this.isInputChecked() ? " checked" : "" );
            inputStatus += ( this.isInputDisabled() ? " disabled" : "" );
            return inputStatus;
        },

        init: function() {
            var that = this;
            that.hideInput();
            that.wrapInput();
            that.delegateEvents();
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