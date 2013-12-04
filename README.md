prettychecks
============

Replaces the default user agent checkboxes and radios for custom images.

* Chrome, Firefox, Opera, IE7+ compatible
* Customization freedom
* Lightweight size - 1 kb gzipped
* Keyboard accessible inputs
* Requires jQuery 1.4.2+

How it works?
-------------

* It will wrap the input element with a span which has a backround image, previously defined in CSS.
* Add some classes to that span, depending on the input status (checked, disabled, required, etc).
* Hides the input element with css.

Usage
-----

### HTML

First include the jQuery library then include the prettychecks.js javascript in the head of the page(s) where you want to use prettychecks

```javascript
<script src="prettychecks.js" charset="utf-8"></script>
```

### Javascript

You need to initalize prettychecks:

```javascript
$("input[type=checkbox], input[type=radio]").prettychecks();
```

### Styling

```css
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

.prettychecks.checkbox {background-position: -13px 0!important;}
.prettychecks.checkbox.hover,
.prettychecks.checkbox:hover,
.prettychecks.checkbox:focus {background-position: -13px -13px !important;}
.prettychecks.checkbox.checked {background-position: 0 0 !important;}
.prettychecks.checkbox.checked.hover,
.prettychecks.checkbox.checked:hover,
.prettychecks.checkbox.checked:focus {background-position: 0 -13px !important;}
.prettychecks.checkbox.disabled {background-position: -13px -39px !important;}
.prettychecks.checkbox.disabled.hover,
.prettychecks.checkbox.disabled:hover,
.prettychecks.checkbox.disabled:focus {background-position: -13px -39px !important;}
.prettychecks.checkbox.checked.disabled {background-position: 0 -39px !important;}
.prettychecks.checkbox.checked.disabled.hover,
.prettychecks.checkbox.checked.disabled:hover,
.prettychecks.checkbox.checked.disabled:focus {background-position: 0 -39px !important;}
.prettychecks.checkbox.required {background-position: 0 0 !important;}
.prettychecks.checkbox.required.hover,
.prettychecks.checkbox.required:hover,
.prettychecks.checkbox.required:focus {background-position: 0 0 !important;}

.prettychecks.radio {background-position: -13px -52px !important;}
.prettychecks.radio.hover,
.prettychecks.radio:hover,
.prettychecks.radio:focus {background-position: -13px -65px !important;}
.prettychecks.radio.checked {background-position: 0 -52px !important;}
.prettychecks.radio.checked.hover,
.prettychecks.radio.checked:hover,
.prettychecks.radio.checked:focus {background-position: 0 -65px !important;}
.prettychecks.radio.disabled {background-position: 0 -78px !important;}
.prettychecks.radio.disabled.hover,
.prettychecks.radio.disabled:hover,
.prettychecks.radio.disabled:focus {background-position: 0 -78px !important;}
.prettychecks.radio.required {background-position: -13px -52px !important;}
.prettychecks.radio.required.hover,
.prettychecks.radio.required:hover,
.prettychecks.radio.required:focus {background-position: -13px -65px !important;}
```

Contributing
------------

1. Fork it.
2. Create a branch (`git checkout -b my_markup`)
3. Commit your changes (`git commit -am "Added Snarkdown"`)
4. Push to the branch (`git push origin my_markup`)
5. Open a [Pull Request][1]
6. Enjoy a refreshing Diet Coke and wait

[1]: http://github.com/github/markup/pulls

License
-------

Copyright (c) 2013 [@alfonsomartinde](https://twitter.com/alfonsomartinde) licensed under the [MIT](http://opensource.org/licenses/MIT).
