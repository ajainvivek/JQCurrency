/*
 * JQCurrency : Jquery Currency Converter 
 * Author: @ajainvivek
 * Further changes, comments: @ajainvivek
 * Licensed under the MIT license
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define, $, window, undefined, jQuery, document */


(function ($, w, doc, un) {
    "use strict";
    // our plugin constructor
    var JQCurrency = function (elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
    };

    // the plugin prototype
    JQCurrency.prototype = {
        defaults: {
            url: "http://themoneyconverter.com/rss-feed/",
            code: {
                "AED": "United Arab Emirates Dirham",
                "ARS": "Argentine Peso",
                "AUD": "Australian Dollar",
                "AWG": "Aruban Florin",
                "BAM": "Bosnia and Herzegovina convertible mark",
                "BBD": "Barbadian Dollar",
                "BDT": "Bangladeshi Taka",
                "BGN": "Bulgarian Lev",
                "BHD": "Bahraini Dinar",
                "BMD": "Bermudian Dollar",
                "BOB": "Bolivian Boliviano",
                "BRL": "Brazilian Real",
                "BSD": "Bahamian Dollar",
                "CAD": "Canadian Dollar",
                "CHF": "Swiss Franc",
                "CLP": "Chilean Peso",
                "CNY": "Chinese Yuan",
                "COP": "Colombian Peso",
                "CZK": "Czech Koruna",
                "DKK": "Danish Krone",
                "EGP": "Egyptian Pound",
                "EUR": "Euro",
                "FJD": "Fijian Dollar",
                "GBP": "British Pound Sterling",
                "GHS": "Ghana Cedi",
                "GMD": "Gambian Dalasi",
                "GTQ": "Guatemalan Quetzal",
                "HKD": "Hong Kong Dollar",
                "HRK": "Croatian Kuna",
                "HUF": "Hungarian Forint",
                "IDR": "Indonesian Rupiah",
                "ILS": "Israeli Sheqel",
                "INR": "Indian Rupee",
                "ISK": "Icelandic Krona",
                "JMD": "Jamaican Dollar",
                "JOD": "Jordanian Dinar",
                "JPY": "Japanese Yen",
                "KES": "Kenyan Shilling",
                "KHR": "Cambodian Riel",
                "KRW": "South Korean Won",
                "KWD": "Kuwaiti Dinar",
                "LAK": "Lao Kip",
                "LBP": "Lebanese Pound",
                "LKR": "Sri Lankan Rupee",
                "LTL": "Lithuanian Litas",
                "LVL": "Latvian Lats",
                "MAD": "Moroccan Dirham",
                "MDL": "Moldovan Leu",
                "MGA": "Malagasy Ariary",
                "MKD": "Macedonian Denar",
                "MUR": "Mauritian Rupee",
                "MVR": "Maldivian Rufiyaa",
                "MXN": "Mexican Peso",
                "MYR": "Malaysian Ringgit",
                "NAD": "Namibian Dollar",
                "NGN": "Nigerian Naira",
                "NOK": "Norwegian Krone",
                "NPR": "Nepalese Rupee",
                "NZD": "New Zealand Dollar",
                "OMR": "Omani Rial",
                "PAB": "Panamanian Balboa",
                "PEN": "Peruvian Sol",
                "PHP": "Philippine Peso",
                "PKR": "Pakistani Rupee",
                "PLN": "Polish Zloty",
                "PYG": "Paraguayan Guaraní",
                "QAR": "Qatari Riyal",
                "RON": "Romanian Leu",
                "RSD": "Serbian Dinar",
                "RUB": "Russian Rouble",
                "SAR": "Saudi Riyal",
                "SCR": "Seychellois Rupee",
                "SEK": "Swedish Krona",
                "SGD": "Singapore Dollar",
                "SYP": "Syrian Pound",
                "THB": "Thai Baht",
                "TND": "Tunisian Dinar",
                "TRY": "Turkish Lira",
                "TWD": "Taiwanese Dollar",
                "UAH": "Ukraine Hryvnia",
                "UGX": "Ugandan Shilling",
                "USD": "United States Dollar",
                "UYU": "Uruguayan Peso",
                "VEF": "Venezuelan Bolívar",
                "VND": "Vietnamese Dong",
                "XAF": "Central African Franc",
                "XCD": "East Caribbean Dollar",
                "XOF": "West African Franc",
                "XPF": "CFP Franc",
                "ZAR": "South African Rand"
            }
        },

        init: function () {

            // globally or using an object literal. 
            this.config = $.extend({}, this.defaults, this.options,
                this.metadata);

            this._buildTemplate();
            return this;
        },

        _buildTemplate: function () {
            console.log(this.config.message);
            var currencyCode = this._utils.swapKeyValue(this.config.code);
            this._ajaxCall(this.config.url, currencyCode["South African Rand"]);
        },

        _ajaxCall: function (url, code) {
            $.ajax({
                type: "GET",
                url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url + code + "/rss.xml"),
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                }
            });
        },

        _utils: {
            swapKeyValue: function (input) {
                var one, output = {};
                for (one in input) {
                    if (input.hasOwnProperty(one)) {
                        output[input[one]] = one;
                    }
                }
                return output;
            }
        }
    };

    JQCurrency.defaults = JQCurrency.prototype.defaults;

    $.fn.jqCurrency = function (options) {
        return this.each(function () {
            new JQCurrency(this, options).init();
        });
    };


}(jQuery, window, document, undefined));

$('.item').jqCurrency();