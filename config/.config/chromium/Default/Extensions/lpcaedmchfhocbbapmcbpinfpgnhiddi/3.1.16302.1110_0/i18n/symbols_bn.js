var a=this,b=function(m,k){var f=m.split("."),e=a;f[0]in e||!e.execScript||e.execScript("var "+f[0]);for(var g;f.length&&(g=f.shift());)f.length||void 0===k?e=e[g]?e[g]:e[g]={}:e[g]=k};var c={b:{1E3:{other:"0K"},1E4:{other:"00K"},1E5:{other:"000K"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 thousand"},1E4:{other:"00 thousand"},1E5:{other:"000 thousand"},1E6:{other:"0 million"},1E7:{other:"00 million"},1E8:{other:"000 million"},1E9:{other:"0 billion"},1E10:{other:"00 billion"},1E11:{other:"000 billion"},1E12:{other:"0 trillion"},1E13:{other:"00 trillion"},
1E14:{other:"000 trillion"}}},c={b:{1E3:{other:"0\u00a0\u09b9\u09be\u099c\u09be\u09b0"},1E4:{other:"00\u00a0\u09b9\u09be\u099c\u09be\u09b0"},1E5:{other:"0\u00a0\u09b2\u09be\u0996"},1E6:{other:"0M"},1E7:{other:"00M"},1E8:{other:"000M"},1E9:{other:"0B"},1E10:{other:"00B"},1E11:{other:"000B"},1E12:{other:"0T"},1E13:{other:"00T"},1E14:{other:"000T"}},a:{1E3:{other:"0 \u09b9\u09be\u099c\u09be\u09b0"},1E4:{other:"00 \u09b9\u09be\u099c\u09be\u09b0"},1E5:{other:"0 \u09b2\u09be\u0996"},1E6:{other:"0 \u09ae\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},
1E7:{other:"00 \u09ae\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E8:{other:"000 \u09ae\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E9:{other:"0 \u09ac\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E10:{other:"00 \u09ac\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E11:{other:"000 \u09ac\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E12:{other:"0 \u099f\u09cd\u09b0\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E13:{other:"00 \u099f\u09cd\u09b0\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"},1E14:{other:"000 \u099f\u09cd\u09b0\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"}}};var d={I:"y",ma:"y G",J:"MMM y",K:"MMMM y",s:"MMM d",u:"MMMM dd",w:"M/d",v:"MMMM d",W:"MMM d, y",H:"EEE, MMM d",ka:"EEE, MMM d, y",f:"d"},d={I:"y",ma:"y G",J:"MMM y",K:"MMMM y",s:"d MMM",u:"dd MMMM",w:"d/M",v:"d MMMM",W:"d MMM, y",H:"EEE d MMM",ka:"EEE, d MMM, y",f:"d"};var h;
h={L:2534,S:["\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac","\u0996\u09c3\u09b7\u09cd\u099f\u09be\u09ac\u09cd\u09a6"],R:["\u0996\u09cd\u09b0\u09bf\u09b8\u09cd\u099f\u09aa\u09c2\u09b0\u09cd\u09ac","\u0996\u09c3\u09b7\u09cd\u099f\u09be\u09ac\u09cd\u09a6"],X:"\u099c\u09be \u09ab\u09c7 \u09ae\u09be \u098f \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1 \u0986 \u09b8\u09c7 \u0985 \u09a8 \u09a1\u09bf".split(" "),da:"\u099c\u09be \u09ab\u09c7 \u09ae\u09be \u098f \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1 \u0986 \u09b8\u09c7 \u0985 \u09a8 \u09a1\u09bf".split(" "),V:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),
ca:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),$:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),
fa:"\u099c\u09be\u09a8\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09af\u09bc\u09be\u09b0\u09c0 \u09ae\u09be\u09b0\u09cd\u099a \u098f\u09aa\u09cd\u09b0\u09bf\u09b2 \u09ae\u09c7 \u099c\u09c1\u09a8 \u099c\u09c1\u09b2\u09be\u0987 \u0986\u0997\u09b8\u09cd\u099f \u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0 \u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0 \u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0 \u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split(" "),ja:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0 \u09b8\u09cb\u09ae\u09ac\u09be\u09b0 \u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0 \u09ac\u09c1\u09a7\u09ac\u09be\u09b0 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 \u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0 \u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(" "),
ha:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0 \u09b8\u09cb\u09ae\u09ac\u09be\u09b0 \u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0 \u09ac\u09c1\u09a7\u09ac\u09be\u09b0 \u09ac\u09c3\u09b9\u09b7\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0 \u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0 \u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split(" "),ba:"\u09b0\u09ac\u09bf \u09b8\u09cb\u09ae \u09ae\u0999\u09cd\u0997\u09b2 \u09ac\u09c1\u09a7 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf \u09b6\u09c1\u0995\u09cd\u09b0 \u09b6\u09a8\u09bf".split(" "),
ga:"\u09b0\u09ac\u09bf \u09b8\u09cb\u09ae \u09ae\u0999\u09cd\u0997\u09b2 \u09ac\u09c1\u09a7 \u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf \u09b6\u09c1\u0995\u09cd\u09b0 \u09b6\u09a8\u09bf".split(" "),Y:"\u09b0 \u09b8\u09cb \u09ae \u09ac\u09c1 \u09ac\u09c3 \u09b6\u09c1 \u09b6".split(" "),ea:"\u09b0 \u09b8\u09cb \u09ae \u09ac\u09c1 \u09ac\u09c3 \u09b6\u09c1 \u09b6".split(" "),aa:["Q1","Q2","Q3","Q4"],Z:["\u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u09a6\u09cd\u09ac\u09bf\u09a4\u09c0\u09af\u09bc \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995",
"\u09a4\u09c3\u09a4\u09c0\u09af\u09bc \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995","\u099a\u09a4\u09c1\u09b0\u09cd\u09a5 \u09a4\u09cd\u09b0\u09c8\u09ae\u09be\u09b8\u09bf\u0995"],N:["am","pm"],O:["EEEE, d MMMM, y","d MMMM, y","d MMM, y","d/M/yy"],ia:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],P:["{1} {0}","{1} {0}","{1} {0}","{1} {0}"],T:4,la:[5,6],U:3};var l={h:".",l:",",B:"%",M:"0",F:"+",o:"-",j:"E",D:"\u2030",m:"\u221e",A:"NaN",g:"#,##0.###",G:"#E0",C:"#,##0%",c:"\u00a4#,##0.00",i:"USD"},l={h:".",l:",",B:"%",M:"\u09e6",F:"+",o:"-",j:"E",D:"\u2030",m:"\u221e",A:"\u09b8\u0982\u0996\u09cd\u09af\u09be\u00a0\u09a8\u09be",g:"#,##,##0.###",G:"#E0",C:"#,##,##0%",c:"#,##,##0.00\u00a4",i:"BDT"};b("I18N_DATETIMESYMBOLS_ERAS",h.S);b("I18N_DATETIMESYMBOLS_ERANAMES",h.R);b("I18N_DATETIMESYMBOLS_NARROWMONTHS",h.X);b("I18N_DATETIMESYMBOLS_STANDALONENARROWMONTHS",h.da);b("I18N_DATETIMESYMBOLS_MONTHS",h.V);b("I18N_DATETIMESYMBOLS_STANDALONEMONTHS",h.ca);b("I18N_DATETIMESYMBOLS_SHORTMONTHS",h.$);b("I18N_DATETIMESYMBOLS_STANDALONESHORTMONTHS",h.fa);b("I18N_DATETIMESYMBOLS_WEEKDAYS",h.ja);b("I18N_DATETIMESYMBOLS_STANDALONEWEEKDAYS",h.ha);b("I18N_DATETIMESYMBOLS_SHORTWEEKDAYS",h.ba);
b("I18N_DATETIMESYMBOLS_STANDALONESHORTWEEKDAYS",h.ga);b("I18N_DATETIMESYMBOLS_NARROWWEEKDAYS",h.Y);b("I18N_DATETIMESYMBOLS_STANDALONENARROWWEEKDAYS",h.ea);b("I18N_DATETIMESYMBOLS_SHORTQUARTERS",h.aa);b("I18N_DATETIMESYMBOLS_QUARTERS",h.Z);b("I18N_DATETIMESYMBOLS_AMPMS",h.N);b("I18N_DATETIMESYMBOLS_DATEFORMATS",h.O);b("I18N_DATETIMESYMBOLS_TIMEFORMATS",h.ia);b("I18N_DATETIMESYMBOLS_DATETIMEFORMATS",h.P);b("I18N_DATETIMESYMBOLS_FIRSTDAYOFWEEK",h.T);b("I18N_DATETIMESYMBOLS_WEEKENDRANGE",h.la);
b("I18N_DATETIMESYMBOLS_FIRSTWEEKCUTOFFDAY",h.U);b("I18N_DATETIMEPATTERNS_YEAR_FULL",d.I);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_ABBR",d.J);b("I18N_DATETIMEPATTERNS_YEAR_MONTH_FULL",d.K);b("I18N_DATETIMEPATTERNS_MONTH_DAY_ABBR",d.s);b("I18N_DATETIMEPATTERNS_MONTH_DAY_FULL",d.u);b("I18N_DATETIMEPATTERNS_MONTH_DAY_SHORT",d.w);b("I18N_DATETIMEPATTERNS_MONTH_DAY_MEDIUM",d.v);b("I18N_DATETIMEPATTERNS_WEEKDAY_MONTH_DAY_MEDIUM",d.H);b("I18N_DATETIMEPATTERNS_DAY_ABBR",d.f);
void 0!==h.L&&b("I18N_DATETIMESYMBOLS_ZERODIGIT",h.L);b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_SEP",l.h);b("I18N_NUMBERFORMATSYMBOLS_GROUP_SEP",l.l);b("I18N_NUMBERFORMATSYMBOLS_PERCENT",l.B);b("I18N_NUMBERFORMATSYMBOLS_ZERO_DIGIT",l.M);b("I18N_NUMBERFORMATSYMBOLS_PLUS_SIGN",l.F);b("I18N_NUMBERFORMATSYMBOLS_MINUS_SIGN",l.o);b("I18N_NUMBERFORMATSYMBOLS_EXP_SYMBOL",l.j);b("I18N_NUMBERFORMATSYMBOLS_PERMILL",l.D);b("I18N_NUMBERFORMATSYMBOLS_INFINITY",l.m);b("I18N_NUMBERFORMATSYMBOLS_NAN",l.A);
b("I18N_NUMBERFORMATSYMBOLS_DECIMAL_PATTERN",l.g);b("I18N_NUMBERFORMATSYMBOLS_SCIENTIFIC_PATTERN",l.G);b("I18N_NUMBERFORMATSYMBOLS_PERCENT_PATTERN",l.C);b("I18N_NUMBERFORMATSYMBOLS_CURRENCY_PATTERN",l.c);b("I18N_NUMBERFORMATSYMBOLS_DEF_CURRENCY_CODE",l.i);b("I18N_COMPACT_DECIMAL_SHORT_PATTERN",c.b);b("I18N_COMPACT_DECIMAL_LONG_PATTERN",c.a);
