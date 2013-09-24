JQCurrency jQuery Plugin Version 0.1 Beta
==================================================================

jQuery Currency Conversion and Latest Exchange Rates jQuery Plugin with easy UI widget components such as Marquee, Tabular Data and many more..

Plugin can be easily configured and provides inverse currency conversion format

Documentation
==================================================================

To create a JQCurrency Widget just insert the html element in the DOM with respective plugin options

```
<div class="jq-currency-container" data-jqCurrency-options='{"widget":"marquee"}'></div>
```

How to use
==================================================================

```
    $('.jq-currency-container').jqCurrency();
```

Options
==================================================================

JQCurrency has one argument, an options object that you might want to customise:

widget: choose the widget component 
placeholder: text to use when no font is selected yet
lookahead: a number of fonts to try and preload ahead in the select box

```
$('.jq-currency-container').jqCurrency({
  "widget" : "marquee", //[marquee, tabular]
});
```

License / Credits
==================================================================

This plugin is released under the MIT license. It is simple and easy to understand and places almost no restrictions on what you can do with the code. More Information

Download
==================================================================

Releases are available for download from GitHub.
