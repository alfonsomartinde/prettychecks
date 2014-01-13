jQuery prettychecks plugin
==========================

[![Build Status](https://api.travis-ci.org/alfonsomartinde/prettychecks.png)](https://travis-ci.org/alfonsomartinde/prettychecks)

Replaces the default user agent checkboxes and radios for custom images.
Satisfies WCAG 2.0 Level AA conformance.

* Generates valid HTML5 / XHTML code
* Retina display compatible
* Works with implicit and explicit labels
* Compatible with Chrome, Firefox, Opera, Safari and IE7+
* Customization freedom: the burden is on the CSS
* Lightweight size - 1 kb gzipped
* WCAG2 [Keyboard Accessible][1]: all functionality available from a keyboard.
* WCAG2 [Focus Visible][2]: the keyboard focus indicator is visible.

### Current version

* 0.0.6

### Dependencies

* Requires jQuery 1.4.2+ or 2.0.3 +

How it works?
-------------

* It will wrap the input with a span which has a fake checkbox as a 
  backround image, previously defined in CSS file.
* Add class="..." to the wrapper, depending on the input status (checked, 
  disabled, required, error, focus, etc).
* Hides the input: available to screen reader users, but visually hidden.
* When inputs gets focus with keyboard, the wrapper is updated with class="focus"

Usage
-----

### Images

Default sprite is a PNG with all the checkboxes and radiobuttons status: normal, normal-checked, focus, focus-checked, error, error-checked, error-focus, error-focus-checked, etc... The size of all images is 13x13px 72ppp.

![spryte-prettychecks](https://github.com/alfonsomartinde/prettychecks/blob/master/app/img/sprite-prettychecks.png?raw=true)

You can design your own sprites, with custom sizes, even with retina display resolution, and just update the CSS.

### HTML

First include the jQuery library then include the prettychecks.js javascript in 
the head of the page(s) where you want to use prettychecks

```javascript
<script src="jquery.prettychecks.js" charset="utf-8"></script>
```

### JS

If you need to initalize prettychecks for a specific checkboxes and radios:

```javascript
$( selector ).prettychecks();
```

If you need to initalize prettychecks for all checkboxes and radios:

```javascript
$("input[type=checkbox], input[type=radio]").prettychecks();
```

### CSS

```css
/* Define the width, height and url of the sprite */

.prettychecks {
    position: relative;
    display: inline-block;
    width: 13px !important;
    height: 13px !important;
    border: 0 none !important;
    margin: 4px 4px 0 0px !important;
    padding: 0 !important;
    overflow: hidden !important;
    background: transparent url(../img/sprite-prettychecks.png) no-repeat 0 0 !important;
    cursor: pointer !important;
}

.prettychecks input {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
}

/* Define the background-position for all status */

.prettychecks.checkbox {background-position: -13px 0 !important;}
.prettychecks.checkbox.hover,
.prettychecks.checkbox:hover {background-position: -13px -13px !important;}
.prettychecks.checkbox.focus,
.prettychecks.checkbox:focus {background-position: -39px 0 !important;}
.prettychecks.checkbox.disabled {background-position: -13px -26px !important;}
.prettychecks.checkbox.disabled.hover,
.prettychecks.checkbox.disabled:hover {background-position: -13px -26px !important;}
.prettychecks.checkbox.required {background-position: -13px -39px !important;}
.prettychecks.checkbox.required.hover,
.prettychecks.checkbox.required:hover {background-position: -13px -39px !important;}
.prettychecks.checkbox.required.focus,
.prettychecks.checkbox.required:focus {background-position: -39px -39px !important;}
.prettychecks.checkbox.error {background-position: -13px -52px !important;}
.prettychecks.checkbox.error.hover,
.prettychecks.checkbox.error:hover {background-position: -13px -52px !important;}
.prettychecks.checkbox.error.focus,
.prettychecks.checkbox.error:focus {background-position: -39px -52px !important;}
.prettychecks.checkbox.checked {background-position: 0 0 !important;}
.prettychecks.checkbox.checked.hover,
.prettychecks.checkbox.checked:hover {background-position: 0 -13px !important;}
.prettychecks.checkbox.checked.focus,
.prettychecks.checkbox.checked:focus {background-position: -26px 0px !important;}
.prettychecks.checkbox.checked.disabled {background-position: 0 -26px !important;}
.prettychecks.checkbox.checked.disabled.hover,
.prettychecks.checkbox.checked.disabled:hover {background-position: 0 -26px !important;}
.prettychecks.checkbox.checked.required {background-position: 0 -39px !important;}
.prettychecks.checkbox.checked.required.hover,
.prettychecks.checkbox.checked.required:hover {background-position: 0 -39px !important;}
.prettychecks.checkbox.checked.required.focus,
.prettychecks.checkbox.checked.required:focus {background-position: -26px -39px !important;}
.prettychecks.checkbox.checked.error {background-position: 0 -52px !important;}
.prettychecks.checkbox.checked.error.hover,
.prettychecks.checkbox.checked.error:hover {background-position: -26px -52px !important;}
.prettychecks.checkbox.checked.error.focus,
.prettychecks.checkbox.checked.error:focus {background-position: -26px -52px !important;}

.prettychecks.radio {background-position: -13px -65px !important;}
.prettychecks.radio.hover,
.prettychecks.radio:hover {background-position: -13px -78px !important;}
.prettychecks.radio.focus,
.prettychecks.radio:focus {background-position: -39px -65px !important;}
.prettychecks.radio.disabled {background-position: -13px -91px !important;}
.prettychecks.radio.disabled.hover,
.prettychecks.radio.disabled:hover {background-position: -13px -91px !important;}
.prettychecks.radio.error {background-position: -13px -104px !important;}
.prettychecks.radio.error.hover,
.prettychecks.radio.error:hover {background-position: -13px -78px !important;}
.prettychecks.radio.error.focus,
.prettychecks.radio.error:focus {background-position: -13px -78px !important;}
.prettychecks.radio.checked {background-position: 0 -65px !important;}
.prettychecks.radio.checked.hover,
.prettychecks.radio.checked:hover {background-position: 0 -78px !important;}
.prettychecks.radio.checked.focus,
.prettychecks.radio.checked:focus {background-position: -26px -65px !important;}
.prettychecks.radio.checked.disabled {background-position: 0 -91px !important;}
.prettychecks.radio.checked.disabled.hover,
.prettychecks.radio.checked.disabled:hover,
.prettychecks.radio.checked.disabled:focus {background-position: 0 -91px !important;}
.prettychecks.radio.checked.error {background-position: 0px -104px !important;}
.prettychecks.radio.checked.error.hover,
.prettychecks.radio.checked.error:hover {background-position: 0px -104px !important;}
.prettychecks.radio.checked.error.focus,
.prettychecks.radio.checked.error:focus {background-position: -26px -104px !important;}

/* ... rest of CSS ... */

```

Contributing
------------

1. Fork it.
2. Create a branch (`git checkout -b my_markup`)
3. Commit your changes (`git commit -am "Added Snarkdown"`)
4. Push to the branch (`git push origin my_markup`)
5. Open a [Pull Request][1]
6. Enjoy a refreshing Diet Coke and wait


Help us!
--------

Buy us a beer (Paypal)

[![Click here to lend your support to: jQuery Prettychecks Plugin and make a donation at pledgie.com !](https://pledgie.com/campaigns/23329.png?skin_name=chrome)](https://pledgie.com/campaigns/23329)


License
-------

Copyright (c) 2014 [@alfonsomartinde](https://twitter.com/alfonsomartinde) 
licensed under the [MIT](http://opensource.org/licenses/MIT).

[1]: http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation.html
[2]: http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html
[3]: http://github.com/github/markup/pulls