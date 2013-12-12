prettychecks
============

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

### HTML

First include the jQuery library then include the prettychecks.js javascript in 
the head of the page(s) where you want to use prettychecks

```javascript
<script src="prettychecks.js" charset="utf-8"></script>
```

### Javascript

If you need to initalize prettychecks for a specific checkboxes and radios:

```javascript
$( selector ).prettychecks();
```

If you need to initalize prettychecks for all checkboxes and radios:

```javascript
$("input[type=checkbox], input[type=radio]").prettychecks();
```

### Styling

```css
/* Define the width, height and url of the sprite */

.prettychecks {
    width: 13px !important;
    height: 13px !important;
    border: 0 none !important;
    margin: 4px 4px 0 0px !important;
    padding: 0 !important;
    overflow: hidden !important;
    background: transparent url(../img/sprite-prettychecks.png) no-repeat 0 0 !important;
    cursor: pointer !important;
}

/* Define the background-position for all status */

.prettychecks.checkbox {background-position: -13px 0 !important;}
.prettychecks.checkbox.hover,
.prettychecks.checkbox:hover,
.prettychecks.checkbox:focus {background-position: -13px -13px !important;}

.prettychecks.checkbox.checked {background-position: 0 0 !important;}
.prettychecks.checkbox.checked.hover,
.prettychecks.checkbox.checked:hover,
.prettychecks.checkbox.checked:focus {background-position: 0 -13px !important;}

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

License
-------

Copyright (c) 2013 [@alfonsomartinde](https://twitter.com/alfonsomartinde) 
licensed under the [MIT](http://opensource.org/licenses/MIT).

[1]: http://www.w3.org/TR/UNDERSTANDING-WCAG20/keyboard-operation.html
[2]: http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-focus-visible.html
[3]: http://github.com/github/markup/pulls