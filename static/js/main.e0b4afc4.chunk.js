(this["webpackJsonpinvoice-generator"] = this["webpackJsonpinvoice-generator"] || []).push([
    [0], {
        303: function(e, a, t) {
            e.exports = t(509)
        },
        310: function(e, a) {},
        312: function(e, a) {},
        350: function(e, a) {},
        351: function(e, a) {},
        508: function(e, a, t) {},
        509: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(2),
                l = t.n(n),
                r = t(132),
                i = t.n(r),
                o = t(302),
                u = t(54),
                c = t(95),
                s = {
                    description: "",
                    quantity: "1",
                    rate: "0.00"
                }, d = {
                    title: "INVOICE",
                    companyName: "",
                    name: "",
                    companyAddress: "",
                    companyAddress2: "",
                    companyCountry: "United States",
                    billTo: "Bill To:",
                    clientName: "",
                    clientAddress: "",
                    clientAddress2: "",
                    clientCountry: "United States",
                    invoiceTitleLabel: "Invoice#",
                    invoiceTitle: "",
                    invoiceDateLabel: "Invoice Date",
                    invoiceDate: "",
                    invoiceDueDateLabel: "Due Date",
                    invoiceDueDate: "",
                    productLineDescription: "Item Description",
                    productLineQuantity: "Qty",
                    productLineQuantityRate: "Rate",
                    productLineQuantityAmount: "Amount",
                    productLines: [{
                        description: "Brochure Design",
                        quantity: "2",
                        rate: "100.00"
                    },
                    Object(u.a)({}, s), Object(u.a)({}, s)],
                    subTotalLabel: "Sub Total",
                    taxLabel: "Sale Tax (10%)",
                    totalLabel: "TOTAL",
                    currency: "$",
                    notesLabel: "Notes",
                    notes: "It was great doing business with you.",
                    termLabel: "Terms & Conditions",
                    term: "Please make the payment by the due date."
                }, v = t(37),
                m = {
                    dark: {
                        color: "#222"
                    },
                    white: {
                        color: "#fff"
                    },
                    "bg-dark": {
                        backgroundColor: "#666"
                    },
                    "bg-gray": {
                        backgroundColor: "#e3e3e3"
                    },
                    flex: {
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap"
                    },
                    "w-auto": {
                        flex: 1,
                        paddingRight: "8px"
                    },
                    "ml-30": {
                        flex: 1
                    },
                    "w-100": {
                        width: "100%"
                    },
                    "w-50": {
                        width: "50%"
                    },
                    "w-55": {
                        width: "55%"
                    },
                    "w-45": {
                        width: "45%"
                    },
                    "w-60": {
                        width: "60%"
                    },
                    "w-40": {
                        width: "40%"
                    },
                    "w-48": {
                        width: "48%"
                    },
                    "w-17": {
                        width: "17%"
                    },
                    "w-18": {
                        width: "18%"
                    },
                    row: {
                        borderBottom: "1px solid ".concat("#e3e3e3")
                    },
                    "mt-40": {
                        marginTop: "40px"
                    },
                    "mt-30": {
                        marginTop: "30px"
                    },
                    "mt-20": {
                        marginTop: "20px"
                    },
                    "mt-10": {
                        marginTop: "10px"
                    },
                    "mb-5": {
                        marginBottom: "5px"
                    },
                    "p-4-8": {
                        padding: "4px 8px"
                    },
                    "p-5": {
                        padding: "5px"
                    },
                    "pb-10": {
                        paddingBottom: "10px"
                    },
                    right: {
                        textAlign: "right"
                    },
                    bold: {
                        fontWeight: "bold"
                    },
                    "fs-20": {
                        fontSize: "20px"
                    },
                    "fs-45": {
                        fontSize: "45px"
                    },
                    page: {
                        fontFamily: "Nunito",
                        fontSize: "13px",
                        color: "#555",
                        padding: "40px 35px"
                    },
                    span: {
                        padding: "4px 12px 4px 0"
                    }
                }, p = function(e) {
                    var a = {};
                    return e.replace(/\s+/g, " ").split(" ").forEach((function(e) {
                        void 0 !== typeof m[e] && Object.assign(a, m[e])
                    })), a
                }, x = function(e) {
                    var a = e.className,
                        t = e.placeholder,
                        n = e.value,
                        r = e.onChange,
                        i = e.pdfMode;
                    return l.a.createElement(l.a.Fragment, null, i ? l.a.createElement(v.e, {
                        style: p("span " + (a || ""))
                    }, n) : l.a.createElement("input", {
                        type: "text",
                        className: "input " + (a || ""),
                        placeholder: t || "",
                        value: n || "",
                        onChange: r ? function(e) {
                            return r(e.target.value)
                        } : void 0
                    }))
                }, f = function(e) {
                    var a = e.className,
                        t = e.options,
                        r = e.placeholder,
                        i = e.value,
                        o = e.onChange,
                        u = e.pdfMode,
                        s = Object(n.useState)(!1),
                        d = Object(c.a)(s, 2),
                        m = d[0],
                        x = d[1];
                    return l.a.createElement(l.a.Fragment, null, u ? l.a.createElement(v.e, {
                        style: p("span " + (a || ""))
                    }, i) : l.a.createElement(l.a.Fragment, null, m ? l.a.createElement("select", {
                        className: "select " + (a || ""),
                        value: i,
                        onChange: o ? function(e) {
                            return o(e.target.value)
                        } : void 0,
                        onBlur: function() {
                            return x(!1)
                        },
                        autoFocus: !0
                    }, null === t || void 0 === t ? void 0 : t.map((function(e) {
                        return l.a.createElement("option", {
                            key: e.text,
                            value: e.value
                        }, e.text)
                    }))) : l.a.createElement("input", {
                        readOnly: !0,
                        type: "text",
                        className: "input " + (a || ""),
                        value: i || "",
                        placeholder: r || "",
                        onFocus: function() {
                            return x(!0)
                        }
                    })))
                }, g = t(301),
                h = function(e) {
                    var a = e.className,
                        t = e.placeholder,
                        n = e.value,
                        r = e.onChange,
                        i = e.pdfMode,
                        o = e.rows;
                    return l.a.createElement(l.a.Fragment, null, i ? l.a.createElement(v.e, {
                        style: p("span " + (a || ""))
                    }, n) : l.a.createElement(g.a, {
                        minRows: o || 1,
                        className: "input " + (a || ""),
                        placeholder: t || "",
                        value: n || "",
                        onChange: r ? function(e) {
                            return r(e.target.value)
                        } : void 0
                    }))
                }, b = t(299),
                M = t.n(b),
                y = (t(460), function(e) {
                    var a = e.className,
                        t = e.value,
                        n = e.selected,
                        r = e.onChange,
                        i = e.pdfMode;
                    return l.a.createElement(l.a.Fragment, null, i ? l.a.createElement(v.e, {
                        style: p("span " + (a || ""))
                    }, t) : l.a.createElement(M.a, {
                        className: "input " + (a || ""),
                        selected: n,
                        onChange: r ? function(e) {
                            return r(e)
                        } : function(e) {
                            return null
                        },
                        dateFormat: "MMM dd, yyyy"
                    }))
                }),
                E = [{
                    value: "Bangladesh",
                    text: "Bangladesh"
                }, {
                    value: "Belgium",
                    text: "Belgium"
                }, {
                    value: "Burkina Faso",
                    text: "Burkina Faso"
                }, {
                    value: "Bulgaria",
                    text: "Bulgaria"
                }, {
                    value: "Bosnia and Herzegovina",
                    text: "Bosnia and Herzegovina"
                }, {
                    value: "Barbados",
                    text: "Barbados"
                }, {
                    value: "Wallis and Futuna",
                    text: "Wallis and Futuna"
                }, {
                    value: "Saint Barthelemy",
                    text: "Saint Barthelemy"
                }, {
                    value: "Bermuda",
                    text: "Bermuda"
                }, {
                    value: "Brunei",
                    text: "Brunei"
                }, {
                    value: "Bolivia",
                    text: "Bolivia"
                }, {
                    value: "Bahrain",
                    text: "Bahrain"
                }, {
                    value: "Burundi",
                    text: "Burundi"
                }, {
                    value: "Benin",
                    text: "Benin"
                }, {
                    value: "Bhutan",
                    text: "Bhutan"
                }, {
                    value: "Jamaica",
                    text: "Jamaica"
                }, {
                    value: "Bouvet Island",
                    text: "Bouvet Island"
                }, {
                    value: "Botswana",
                    text: "Botswana"
                }, {
                    value: "Samoa",
                    text: "Samoa"
                }, {
                    value: "Bonaire, Saint Eustatius and Saba ",
                    text: "Bonaire, Saint Eustatius and Saba "
                }, {
                    value: "Brazil",
                    text: "Brazil"
                }, {
                    value: "Bahamas",
                    text: "Bahamas"
                }, {
                    value: "Jersey",
                    text: "Jersey"
                }, {
                    value: "Belarus",
                    text: "Belarus"
                }, {
                    value: "Belize",
                    text: "Belize"
                }, {
                    value: "Russia",
                    text: "Russia"
                }, {
                    value: "Rwanda",
                    text: "Rwanda"
                }, {
                    value: "Serbia",
                    text: "Serbia"
                }, {
                    value: "East Timor",
                    text: "East Timor"
                }, {
                    value: "Reunion",
                    text: "Reunion"
                }, {
                    value: "Turkmenistan",
                    text: "Turkmenistan"
                }, {
                    value: "Tajikistan",
                    text: "Tajikistan"
                }, {
                    value: "Romania",
                    text: "Romania"
                }, {
                    value: "Tokelau",
                    text: "Tokelau"
                }, {
                    value: "Guinea-Bissau",
                    text: "Guinea-Bissau"
                }, {
                    value: "Guam",
                    text: "Guam"
                }, {
                    value: "Guatemala",
                    text: "Guatemala"
                }, {
                    value: "South Georgia and the South Sandwich Islands",
                    text: "South Georgia and the South Sandwich Islands"
                }, {
                    value: "Greece",
                    text: "Greece"
                }, {
                    value: "Equatorial Guinea",
                    text: "Equatorial Guinea"
                }, {
                    value: "Guadeloupe",
                    text: "Guadeloupe"
                }, {
                    value: "Japan",
                    text: "Japan"
                }, {
                    value: "Guyana",
                    text: "Guyana"
                }, {
                    value: "Guernsey",
                    text: "Guernsey"
                }, {
                    value: "French Guiana",
                    text: "French Guiana"
                }, {
                    value: "Georgia",
                    text: "Georgia"
                }, {
                    value: "Grenada",
                    text: "Grenada"
                }, {
                    value: "United Kingdom",
                    text: "United Kingdom"
                }, {
                    value: "Gabon",
                    text: "Gabon"
                }, {
                    value: "El Salvador",
                    text: "El Salvador"
                }, {
                    value: "Guinea",
                    text: "Guinea"
                }, {
                    value: "Gambia",
                    text: "Gambia"
                }, {
                    value: "Greenland",
                    text: "Greenland"
                }, {
                    value: "Gibraltar",
                    text: "Gibraltar"
                }, {
                    value: "Ghana",
                    text: "Ghana"
                }, {
                    value: "Oman",
                    text: "Oman"
                }, {
                    value: "Tunisia",
                    text: "Tunisia"
                }, {
                    value: "Jordan",
                    text: "Jordan"
                }, {
                    value: "Croatia",
                    text: "Croatia"
                }, {
                    value: "Haiti",
                    text: "Haiti"
                }, {
                    value: "Hungary",
                    text: "Hungary"
                }, {
                    value: "Hong Kong",
                    text: "Hong Kong"
                }, {
                    value: "Honduras",
                    text: "Honduras"
                }, {
                    value: "Heard Island and McDonald Islands",
                    text: "Heard Island and McDonald Islands"
                }, {
                    value: "Venezuela",
                    text: "Venezuela"
                }, {
                    value: "Puerto Rico",
                    text: "Puerto Rico"
                }, {
                    value: "Palestinian Territory",
                    text: "Palestinian Territory"
                }, {
                    value: "Palau",
                    text: "Palau"
                }, {
                    value: "Portugal",
                    text: "Portugal"
                }, {
                    value: "Svalbard and Jan Mayen",
                    text: "Svalbard and Jan Mayen"
                }, {
                    value: "Paraguay",
                    text: "Paraguay"
                }, {
                    value: "Iraq",
                    text: "Iraq"
                }, {
                    value: "Panama",
                    text: "Panama"
                }, {
                    value: "French Polynesia",
                    text: "French Polynesia"
                }, {
                    value: "Papua New Guinea",
                    text: "Papua New Guinea"
                }, {
                    value: "Peru",
                    text: "Peru"
                }, {
                    value: "Pakistan",
                    text: "Pakistan"
                }, {
                    value: "Philippines",
                    text: "Philippines"
                }, {
                    value: "Pitcairn",
                    text: "Pitcairn"
                }, {
                    value: "Poland",
                    text: "Poland"
                }, {
                    value: "Saint Pierre and Miquelon",
                    text: "Saint Pierre and Miquelon"
                }, {
                    value: "Zambia",
                    text: "Zambia"
                }, {
                    value: "Western Sahara",
                    text: "Western Sahara"
                }, {
                    value: "Estonia",
                    text: "Estonia"
                }, {
                    value: "Egypt",
                    text: "Egypt"
                }, {
                    value: "South Africa",
                    text: "South Africa"
                }, {
                    value: "Ecuador",
                    text: "Ecuador"
                }, {
                    value: "Italy",
                    text: "Italy"
                }, {
                    value: "Vietnam",
                    text: "Vietnam"
                }, {
                    value: "Solomon Islands",
                    text: "Solomon Islands"
                }, {
                    value: "Ethiopia",
                    text: "Ethiopia"
                }, {
                    value: "Somalia",
                    text: "Somalia"
                }, {
                    value: "Zimbabwe",
                    text: "Zimbabwe"
                }, {
                    value: "Saudi Arabia",
                    text: "Saudi Arabia"
                }, {
                    value: "Spain",
                    text: "Spain"
                }, {
                    value: "Eritrea",
                    text: "Eritrea"
                }, {
                    value: "Montenegro",
                    text: "Montenegro"
                }, {
                    value: "Moldova",
                    text: "Moldova"
                }, {
                    value: "Madagascar",
                    text: "Madagascar"
                }, {
                    value: "Saint Martin",
                    text: "Saint Martin"
                }, {
                    value: "Morocco",
                    text: "Morocco"
                }, {
                    value: "Monaco",
                    text: "Monaco"
                }, {
                    value: "Uzbekistan",
                    text: "Uzbekistan"
                }, {
                    value: "Myanmar",
                    text: "Myanmar"
                }, {
                    value: "Mali",
                    text: "Mali"
                }, {
                    value: "Macao",
                    text: "Macao"
                }, {
                    value: "Mongolia",
                    text: "Mongolia"
                }, {
                    value: "Marshall Islands",
                    text: "Marshall Islands"
                }, {
                    value: "Macedonia",
                    text: "Macedonia"
                }, {
                    value: "Mauritius",
                    text: "Mauritius"
                }, {
                    value: "Malta",
                    text: "Malta"
                }, {
                    value: "Malawi",
                    text: "Malawi"
                }, {
                    value: "Maldives",
                    text: "Maldives"
                }, {
                    value: "Martinique",
                    text: "Martinique"
                }, {
                    value: "Northern Mariana Islands",
                    text: "Northern Mariana Islands"
                }, {
                    value: "Montserrat",
                    text: "Montserrat"
                }, {
                    value: "Mauritania",
                    text: "Mauritania"
                }, {
                    value: "Isle of Man",
                    text: "Isle of Man"
                }, {
                    value: "Uganda",
                    text: "Uganda"
                }, {
                    value: "Tanzania",
                    text: "Tanzania"
                }, {
                    value: "Malaysia",
                    text: "Malaysia"
                }, {
                    value: "Mexico",
                    text: "Mexico"
                }, {
                    value: "Israel",
                    text: "Israel"
                }, {
                    value: "France",
                    text: "France"
                }, {
                    value: "British Indian Ocean Territory",
                    text: "British Indian Ocean Territory"
                }, {
                    value: "Saint Helena",
                    text: "Saint Helena"
                }, {
                    value: "Finland",
                    text: "Finland"
                }, {
                    value: "Fiji",
                    text: "Fiji"
                }, {
                    value: "Falkland Islands",
                    text: "Falkland Islands"
                }, {
                    value: "Micronesia",
                    text: "Micronesia"
                }, {
                    value: "Faroe Islands",
                    text: "Faroe Islands"
                }, {
                    value: "Nicaragua",
                    text: "Nicaragua"
                }, {
                    value: "Netherlands",
                    text: "Netherlands"
                }, {
                    value: "Norway",
                    text: "Norway"
                }, {
                    value: "Namibia",
                    text: "Namibia"
                }, {
                    value: "Vanuatu",
                    text: "Vanuatu"
                }, {
                    value: "New Caledonia",
                    text: "New Caledonia"
                }, {
                    value: "Niger",
                    text: "Niger"
                }, {
                    value: "Norfolk Island",
                    text: "Norfolk Island"
                }, {
                    value: "Nigeria",
                    text: "Nigeria"
                }, {
                    value: "New Zealand",
                    text: "New Zealand"
                }, {
                    value: "Nepal",
                    text: "Nepal"
                }, {
                    value: "Nauru",
                    text: "Nauru"
                }, {
                    value: "Niue",
                    text: "Niue"
                }, {
                    value: "Cook Islands",
                    text: "Cook Islands"
                }, {
                    value: "Kosovo",
                    text: "Kosovo"
                }, {
                    value: "Ivory Coast",
                    text: "Ivory Coast"
                }, {
                    value: "Switzerland",
                    text: "Switzerland"
                }, {
                    value: "Colombia",
                    text: "Colombia"
                }, {
                    value: "China",
                    text: "China"
                }, {
                    value: "Cameroon",
                    text: "Cameroon"
                }, {
                    value: "Chile",
                    text: "Chile"
                }, {
                    value: "Cocos Islands",
                    text: "Cocos Islands"
                }, {
                    value: "Canada",
                    text: "Canada"
                }, {
                    value: "Republic of the Congo",
                    text: "Republic of the Congo"
                }, {
                    value: "Central African Republic",
                    text: "Central African Republic"
                }, {
                    value: "Democratic Republic of the Congo",
                    text: "Democratic Republic of the Congo"
                }, {
                    value: "Czech Republic",
                    text: "Czech Republic"
                }, {
                    value: "Cyprus",
                    text: "Cyprus"
                }, {
                    value: "Christmas Island",
                    text: "Christmas Island"
                }, {
                    value: "Costa Rica",
                    text: "Costa Rica"
                }, {
                    value: "Curacao",
                    text: "Curacao"
                }, {
                    value: "Cape Verde",
                    text: "Cape Verde"
                }, {
                    value: "Cuba",
                    text: "Cuba"
                }, {
                    value: "Swaziland",
                    text: "Swaziland"
                }, {
                    value: "Syria",
                    text: "Syria"
                }, {
                    value: "Sint Maarten",
                    text: "Sint Maarten"
                }, {
                    value: "Kyrgyzstan",
                    text: "Kyrgyzstan"
                }, {
                    value: "Kenya",
                    text: "Kenya"
                }, {
                    value: "South Sudan",
                    text: "South Sudan"
                }, {
                    value: "Suriname",
                    text: "Suriname"
                }, {
                    value: "Kiribati",
                    text: "Kiribati"
                }, {
                    value: "Cambodia",
                    text: "Cambodia"
                }, {
                    value: "Saint Kitts and Nevis",
                    text: "Saint Kitts and Nevis"
                }, {
                    value: "Comoros",
                    text: "Comoros"
                }, {
                    value: "Sao Tome and Principe",
                    text: "Sao Tome and Principe"
                }, {
                    value: "Slovakia",
                    text: "Slovakia"
                }, {
                    value: "South Korea",
                    text: "South Korea"
                }, {
                    value: "Slovenia",
                    text: "Slovenia"
                }, {
                    value: "North Korea",
                    text: "North Korea"
                }, {
                    value: "Kuwait",
                    text: "Kuwait"
                }, {
                    value: "Senegal",
                    text: "Senegal"
                }, {
                    value: "San Marino",
                    text: "San Marino"
                }, {
                    value: "Sierra Leone",
                    text: "Sierra Leone"
                }, {
                    value: "Seychelles",
                    text: "Seychelles"
                }, {
                    value: "Kazakhstan",
                    text: "Kazakhstan"
                }, {
                    value: "Cayman Islands",
                    text: "Cayman Islands"
                }, {
                    value: "Singapore",
                    text: "Singapore"
                }, {
                    value: "Sweden",
                    text: "Sweden"
                }, {
                    value: "Sudan",
                    text: "Sudan"
                }, {
                    value: "Dominican Republic",
                    text: "Dominican Republic"
                }, {
                    value: "Dominica",
                    text: "Dominica"
                }, {
                    value: "Djibouti",
                    text: "Djibouti"
                }, {
                    value: "Denmark",
                    text: "Denmark"
                }, {
                    value: "British Virgin Islands",
                    text: "British Virgin Islands"
                }, {
                    value: "Germany",
                    text: "Germany"
                }, {
                    value: "Yemen",
                    text: "Yemen"
                }, {
                    value: "Algeria",
                    text: "Algeria"
                }, {
                    value: "United States",
                    text: "United States"
                }, {
                    value: "Uruguay",
                    text: "Uruguay"
                }, {
                    value: "Mayotte",
                    text: "Mayotte"
                }, {
                    value: "United States Minor Outlying Islands",
                    text: "United States Minor Outlying Islands"
                }, {
                    value: "Lebanon",
                    text: "Lebanon"
                }, {
                    value: "Saint Lucia",
                    text: "Saint Lucia"
                }, {
                    value: "Laos",
                    text: "Laos"
                }, {
                    value: "Tuvalu",
                    text: "Tuvalu"
                }, {
                    value: "Taiwan",
                    text: "Taiwan"
                }, {
                    value: "Trinidad and Tobago",
                    text: "Trinidad and Tobago"
                }, {
                    value: "Turkey",
                    text: "Turkey"
                }, {
                    value: "Sri Lanka",
                    text: "Sri Lanka"
                }, {
                    value: "Liechtenstein",
                    text: "Liechtenstein"
                }, {
                    value: "Latvia",
                    text: "Latvia"
                }, {
                    value: "Tonga",
                    text: "Tonga"
                }, {
                    value: "Lithuania",
                    text: "Lithuania"
                }, {
                    value: "Luxembourg",
                    text: "Luxembourg"
                }, {
                    value: "Liberia",
                    text: "Liberia"
                }, {
                    value: "Lesotho",
                    text: "Lesotho"
                }, {
                    value: "Thailand",
                    text: "Thailand"
                }, {
                    value: "French Southern Territories",
                    text: "French Southern Territories"
                }, {
                    value: "Togo",
                    text: "Togo"
                }, {
                    value: "Chad",
                    text: "Chad"
                }, {
                    value: "Turks and Caicos Islands",
                    text: "Turks and Caicos Islands"
                }, {
                    value: "Libya",
                    text: "Libya"
                }, {
                    value: "Vatican",
                    text: "Vatican"
                }, {
                    value: "Saint Vincent and the Grenadines",
                    text: "Saint Vincent and the Grenadines"
                }, {
                    value: "United Arab Emirates",
                    text: "United Arab Emirates"
                }, {
                    value: "Andorra",
                    text: "Andorra"
                }, {
                    value: "Antigua and Barbuda",
                    text: "Antigua and Barbuda"
                }, {
                    value: "Afghanistan",
                    text: "Afghanistan"
                }, {
                    value: "Anguilla",
                    text: "Anguilla"
                }, {
                    value: "U.S. Virgin Islands",
                    text: "U.S. Virgin Islands"
                }, {
                    value: "Iceland",
                    text: "Iceland"
                }, {
                    value: "Iran",
                    text: "Iran"
                }, {
                    value: "Armenia",
                    text: "Armenia"
                }, {
                    value: "Albania",
                    text: "Albania"
                }, {
                    value: "Angola",
                    text: "Angola"
                }, {
                    value: "Antarctica",
                    text: "Antarctica"
                }, {
                    value: "American Samoa",
                    text: "American Samoa"
                }, {
                    value: "Argentina",
                    text: "Argentina"
                }, {
                    value: "Australia",
                    text: "Australia"
                }, {
                    value: "Austria",
                    text: "Austria"
                }, {
                    value: "Aruba",
                    text: "Aruba"
                }, {
                    value: "India",
                    text: "India"
                }, {
                    value: "Aland Islands",
                    text: "Aland Islands"
                }, {
                    value: "Azerbaijan",
                    text: "Azerbaijan"
                }, {
                    value: "Ireland",
                    text: "Ireland"
                }, {
                    value: "Indonesia",
                    text: "Indonesia"
                }, {
                    value: "Ukraine",
                    text: "Ukraine"
                }, {
                    value: "Qatar",
                    text: "Qatar"
                }, {
                    value: "Mozambique",
                    text: "Mozambique"
                }],
                N = function(e) {
                    var a = e.pdfMode,
                        t = e.children;
                    return l.a.createElement(l.a.Fragment, null, a ? l.a.createElement(v.a, null, t) : l.a.createElement(l.a.Fragment, null, t))
                }, w = function(e) {
                    var a = e.className,
                        t = e.pdfMode,
                        n = e.children;
                    return l.a.createElement(l.a.Fragment, null, t ? l.a.createElement(v.d, {
                        size: "A4",
                        style: p("page " + (a || ""))
                    }, n) : l.a.createElement("div", {
                        className: "page " + (a || "")
                    }, n))
                }, S = function(e) {
                    var a = e.className,
                        t = e.pdfMode,
                        n = e.children;
                    return l.a.createElement(l.a.Fragment, null, t ? l.a.createElement(v.f, {
                        style: p("view " + (a || ""))
                    }, n) : l.a.createElement("div", {
                        className: "view " + (a || "")
                    }, n))
                }, C = function(e) {
                    var a = e.className,
                        t = e.pdfMode,
                        n = e.children;
                    return l.a.createElement(l.a.Fragment, null, t ? l.a.createElement(v.e, {
                        style: p("span " + (a || ""))
                    }, n) : l.a.createElement("span", {
                        className: "span " + (a || "")
                    }, n))
                }, L = function(e) {
                    var a = e.data,
                        t = Object(n.useState)(!1),
                        r = Object(c.a)(t, 2),
                        i = r[0],
                        o = r[1];
                    return Object(n.useEffect)((function() {
                        o(!1);
                        var e = setTimeout((function() {
                            o(!0)
                        }), 500);
                        return function() {
                            return clearTimeout(e)
                        }
                    }), [a]), l.a.createElement("div", {
                        className: "download-pdf " + (i ? "" : "loading"),
                        title: "Save PDF"
                    }, i && l.a.createElement(v.c, {
                        document: l.a.createElement(A, {
                            pdfMode: !0,
                            data: a
                        }),
                        fileName: "".concat(a.invoiceTitle ? a.invoiceTitle.toLowerCase() : "invoice", ".pdf"),
                        "aria-label": "Save PDF"
                    }))
                }, I = t(127);
            v.b.register({
                family: "Nunito",
                fonts: [{
                    src: "https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaE.ttf"
                }, {
                    src: "https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA6sKUYevN.ttf",
                    fontWeight: 600
                }]
            });
            var A = function(e) {
                var a = e.data,
                    t = e.pdfMode,
                    r = Object(n.useState)(a ? Object(u.a)({}, a) : Object(u.a)({}, d)),
                    i = Object(c.a)(r, 2),
                    v = i[0],
                    m = i[1],
                    p = Object(n.useState)(),
                    g = Object(c.a)(p, 2),
                    b = g[0],
                    M = g[1],
                    A = Object(n.useState)(),
                    T = Object(c.a)(A, 2),
                    k = T[0],
                    B = T[1],
                    D = "" !== v.invoiceDate ? new Date(v.invoiceDate) : new Date,
                    F = "" !== v.invoiceDueDate ? new Date(v.invoiceDueDate) : new Date(D.valueOf());
                "" === v.invoiceDueDate && F.setDate(F.getDate() + 30);
                var G = function(e, a) {
                    if ("productLines" !== e) {
                        var t = Object(u.a)({}, v);
                        t[e] = a, m(t)
                    }
                }, O = function(e, a, t) {
                    var n = v.productLines.map((function(n, l) {
                        if (l === e) {
                            var r = Object(u.a)({}, n);
                            if ("description" === a) r[a] = t;
                            else if ("." === t[t.length - 1] || "0" === t[t.length - 1] && t.includes(".")) r[a] = t;
                            else {
                                var i = parseFloat(t);
                                r[a] = (i || 0).toString()
                            }
                            return r
                        }
                        return Object(u.a)({}, n)
                    }));
                    m(Object(u.a)({}, v, {
                        productLines: n
                    }))
                };
                return Object(n.useEffect)((function() {
                    var e = 0;
                    v.productLines.forEach((function(a) {
                        var t = parseFloat(a.quantity),
                            n = parseFloat(a.rate);
                        e += t && n ? t * n : 0
                    })), M(e)
                }), [v.productLines]), Object(n.useEffect)((function() {
                    var e = v.taxLabel.match(/(\d+)%/),
                        a = e ? parseFloat(e[1]) : 0;
                    B(b ? b * a / 100 : 0)
                }), [b, v.taxLabel]), l.a.createElement(N, {
                    pdfMode: t
                }, l.a.createElement(w, {
                    className: "invoice-wrapper",
                    pdfMode: t
                }, !t && l.a.createElement(L, {
                    data: v
                }), l.a.createElement(S, {
                    className: "flex",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "w-50",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "fs-20 bold",
                    placeholder: "Your Company",
                    value: v.companyName,
                    onChange: function(e) {
                        return G("companyName", e)
                    },
                    pdfMode: t
                }), l.a.createElement(x, {
                    placeholder: "Your Name",
                    value: v.name,
                    onChange: function(e) {
                        return G("name", e)
                    },
                    pdfMode: t
                })), l.a.createElement(S, {
                    className: "w-50",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "fs-45 right bold",
                    placeholder: "Invoice",
                    value: v.title,
                    onChange: function(e) {
                        return G("title", e)
                    },
                    pdfMode: t
                }))), l.a.createElement(S, {
                    className: "flex mt-40",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "w-55",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "bold dark mb-5",
                    value: v.billTo,
                    onChange: function(e) {
                        return G("billTo", e)
                    },
                    pdfMode: t
                }), l.a.createElement(x, {
                    placeholder: "Your Client's Name",
                    value: v.clientName,
                    onChange: function(e) {
                        return G("clientName", e)
                    },
                    pdfMode: t
                })), l.a.createElement(S, {
                    className: "w-45",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "flex mb-5",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "w-40",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "bold",
                    value: v.invoiceTitleLabel,
                    onChange: function(e) {
                        return G("invoiceTitleLabel", e)
                    },
                    pdfMode: t
                })), l.a.createElement(S, {
                    className: "w-60",
                    pdfMode: t
                }, l.a.createElement(x, {
                    placeholder: "INV-12",
                    value: v.invoiceTitle,
                    onChange: function(e) {
                        return G("invoiceTitle", e)
                    },
                    pdfMode: t
                }))), l.a.createElement(S, {
                    className: "flex mb-5",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "w-40",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "bold",
                    value: v.invoiceDateLabel,
                    onChange: function(e) {
                        return G("invoiceDateLabel", e)
                    },
                    pdfMode: t
                })), l.a.createElement(S, {
                    className: "w-60",
                    pdfMode: t
                }, l.a.createElement(y, {
                    value: Object(I.
                    default)(D, "MMM dd, yyyy"),
                    selected: D,
                    onChange: function(e) {
                        return G("invoiceDate", e && !Array.isArray(e) ? Object(I.
                        default)(e, "MMM dd, yyyy") : "")
                    },
                    pdfMode: t
                }))), l.a.createElement(S, {
                    className: "flex mb-5",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "w-40",
                    pdfMode: t
                }), l.a.createElement(S, {
                    className: "w-60",
                    pdfMode: t
                }, l.a.createElement(y, {
                    value: Object(I.
                    default)(F, "MMM dd, yyyy"),
                    selected: F,
                    onChange: function(e) {
                        return G("invoiceDueDate", e && !Array.isArray(e) ? Object(I.
                        default)(e, "MMM dd, yyyy") : "")
                    },
                    pdfMode: t
                }))))), l.a.createElement(S, {
                    className: "mt-30 bg-dark flex",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "w-48 p-4-8",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "white bold",
                    value: v.productLineDescription,
                    onChange: function(e) {
                        return G("productLineDescription", e)
                    },
                    pdfMode: t
                })), l.a.createElement(S, {
                    className: "w-17 p-4-8",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "white bold right",
                    value: v.productLineQuantity,
                    onChange: function(e) {
                        return G("productLineQuantity", e)
                    },
                    pdfMode: t
                })), l.a.createElement(S, {
                    className: "w-17 p-4-8",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "white bold right",
                    value: v.productLineQuantityRate,
                    onChange: function(e) {
                        return G("productLineQuantityRate", e)
                    },
                    pdfMode: t
                })), l.a.createElement(S, {
                    className: "w-18 p-4-8",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "white bold right",
                    value: v.productLineQuantityAmount,
                    onChange: function(e) {
                        return G("productLineQuantityAmount", e)
                    },
                    pdfMode: t
                }))), v.productLines.map((function(e, a) {
                    return t && "" === e.description ? l.a.createElement(C, {
                        key: a
                    }) : l.a.createElement(S, {
                        key: a,
                        className: "row flex",
                        pdfMode: t
                    }, l.a.createElement(S, {
                        className: "w-48 p-4-8 pb-10",
                        pdfMode: t
                    }, l.a.createElement(h, {
                        className: "dark",
                        rows: 2,
                        placeholder: "Enter item name/description",
                        value: e.description,
                        onChange: function(e) {
                            return O(a, "description", e)
                        },
                        pdfMode: t
                    })), l.a.createElement(S, {
                        className: "w-17 p-4-8 pb-10",
                        pdfMode: t
                    }, l.a.createElement(x, {
                        className: "dark right",
                        value: e.quantity,
                        onChange: function(e) {
                            return O(a, "quantity", e)
                        },
                        pdfMode: t
                    })), l.a.createElement(S, {
                        className: "w-17 p-4-8 pb-10",
                        pdfMode: t
                    }, l.a.createElement(x, {
                        className: "dark right",
                        value: e.rate,
                        onChange: function(e) {
                            return O(a, "rate", e)
                        },
                        pdfMode: t
                    })), l.a.createElement(S, {
                        className: "w-18 p-4-8 pb-10",
                        pdfMode: t
                    }, l.a.createElement(C, {
                        className: "dark right",
                        pdfMode: t
                    }, function(e, a) {
                        var t = parseFloat(e),
                            n = parseFloat(a);
                        return (t && n ? t * n : 0).toFixed(2)
                    }(e.quantity, e.rate))), !t && l.a.createElement("button", {
                        className: "link row__remove",
                        "aria-label": "Remove Row",
                        title: "Remove Row",
                        onClick: function() {
                            return function(e) {
                                var a = v.productLines.filter((function(a, t) {
                                    return t !== e
                                }));
                                m(Object(u.a)({}, v, {
                                    productLines: a
                                }))
                            }(a)
                        }
                    }, l.a.createElement("span", {
                        className: "icon icon-remove bg-red"
                    })))
                })), l.a.createElement(S, {
                    className: "flex",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "w-50 mt-10",
                    pdfMode: t
                }, !t && l.a.createElement("button", {
                    className: "link",
                    onClick: function() {
                        var e = [].concat(Object(o.a)(v.productLines), [Object(u.a)({}, s)]);
                        m(Object(u.a)({}, v, {
                            productLines: e
                        }))
                    }
                }, l.a.createElement("span", {
                    className: "icon icon-add bg-green mr-10"
                }), "Add Line Item")), l.a.createElement(S, {
                    className: "w-50 mt-20",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "flex",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "w-50 p-5",
                    pdfMode: t
                }, l.a.createElement(x, {
                    value: v.subTotalLabel,
                    onChange: function(e) {
                        return G("subTotalLabel", e)
                    },
                    pdfMode: t
                })), l.a.createElement(S, {
                    className: "w-50 p-5",
                    pdfMode: t
                }, l.a.createElement(C, {
                    className: "right bold dark",
                    pdfMode: t
                }, null === b || void 0 === b ? void 0 : b.toFixed(2)))), l.a.createElement(S, {
                    className: "flex",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "w-50 p-5",
                    pdfMode: t
                })), l.a.createElement(S, {
                    className: "w-50 p-5",
                    pdfMode: t
                }, l.a.createElement(C, {
                    className: "right bold dark",
                    pdfMode: t
                }, null === k || void 0 === k ? void 0 : k.toFixed(2)))), l.a.createElement(S, {
                    className: "flex bg-gray p-5",
                    pdfMode: t
                }, l.a.createElement(S, {
                    className: "w-50 p-5",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "bold",
                    value: v.totalLabel,
                    onChange: function(e) {
                        return G("totalLabel", e)
                    },
                    pdfMode: t
                })), l.a.createElement(S, {
                    className: "w-50 p-5 flex",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "dark bold right ml-30",
                    value: v.currency,
                    onChange: function(e) {
                        return G("currency", e)
                    },
                    pdfMode: t
                }), l.a.createElement(C, {
                    className: "right bold dark w-auto",
                    pdfMode: t
                }, ("undefined" !== typeof b && "undefined" !== typeof k ? b + k : 0).toFixed(2)))))), l.a.createElement(S, {
                    className: "mt-20",
                    pdfMode: t
                }, l.a.createElement(x, {
                    className: "bold w-100",
                    value: v.notesLabel,
                    onChange: function(e) {
                        return G("notesLabel", e)
                    },
                    pdfMode: t
                }), l.a.createElement(h, {
                    className: "w-100",
                    rows: 2,
                    value: v.notes,
                    onChange: function(e) {
                        return G("notes", e)
                    },
                    pdfMode: t
                })), l.a.createElement(S, {
                    className: "mt-20",
                    pdfMode: t
                }, l.a.createElement(h, {
                    className: "w-100",
                    rows: 2,
                    value: v.term,
                    onChange: function(e) {
                        return G("term", e)
                    },
                    pdfMode: t
                })))
            };
            var T = function() {
                return l.a.createElement("div", {
                    className: "app"
                }, l.a.createElement("h1", {
                    className: "center fs-30"
                }, "React Invoice Generator"), l.a.createElement(A, null))
            }, k = (t(508), Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));

            function B(e, a) {
                navigator.serviceWorker.register(e).then((function(e) {
                    e.onupdatefound = function() {
                        var t = e.installing;
                        null != t && (t.onstatechange = function() {
                            "installed" === t.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."), a && a.onUpdate && a.onUpdate(e)) : (console.log("Content is cached for offline use."), a && a.onSuccess && a.onSuccess(e)))
                        })
                    }
                })).
                catch ((function(e) {
                    console.error("Error during service worker registration:", e)
                }))
            }
            i.a.render(l.a.createElement(l.a.StrictMode, null, l.a.createElement(T, null)), document.getElementById("root")),
            function(e) {
                if ("serviceWorker" in navigator) {
                    if (new URL("/react-invoice-generator", window.location.href).origin !== window.location.origin) return;
                    window.addEventListener("load", (function() {
                        var a = "".concat("/react-invoice-generator", "/service-worker.js");
                        k ? (! function(e, a) {
                            fetch(e, {
                                headers: {
                                    "Service-Worker": "script"
                                }
                            }).then((function(t) {
                                var n = t.headers.get("content-type");
                                404 === t.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                    e.unregister().then((function() {
                                        window.location.reload()
                                    }))
                                })) : B(e, a)
                            })).
                            catch ((function() {
                                console.log("No internet connection found. App is running in offline mode.")
                            }))
                        }(a, e), navigator.serviceWorker.ready.then((function() {
                            console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")
                        }))) : B(a, e)
                    }))
                }
            }()
        }
    }, [
        [303, 1, 2]
    ]
]);
//# sourceMappingURL=main.e0b4afc4.chunk.js.map
