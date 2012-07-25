/*
// Copyright 2012 Twitter, Inc
// http://www.apache.org/licenses/LICENSE-2.0

// TwitterCLDR (JavaScript) v1.6.2
// Authors: 		Cameron Dutro [@camertron]
								Kirill Lashuk [@KL_7]
								portions by Sven Fuchs [@svenfuchs]
// Homepage: 		https://twitter.com
// Description:	Provides date, time, number, and list formatting functionality for various Twitter-supported locales in Javascript.
*/

var DateTimeFormatter, PluralRules, TimespanFormatter, TwitterCldr;

TwitterCldr = {};

TwitterCldr.PluralRules = PluralRules = (function() {

  function PluralRules() {}

  PluralRules.rules = {"keys": ["one","other"], "rule": function(n) { return (function() { if ([0, 1].indexOf(n) >= 0) { return "one" } else { return "other" } })(); }};

  PluralRules.all = function() {
    return this.rules.keys;
  };

  PluralRules.rule_for = function(number) {
    try {
      return this.rules.rule(number);
    } catch (error) {
      return "other";
    }
  };

  return PluralRules;

})();

TwitterCldr.TimespanFormatter = TimespanFormatter = (function() {

  function TimespanFormatter() {
    this.default_type = "default";
    this.tokens = {"ago":{"second":{"default":{"one":[{"value":"Nakalipas na 1 segundo","type":"plaintext"}],"other":[{"value":"Nakalipas na ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) segundo","type":"plaintext"}]}},"minute":{"default":{"one":[{"value":"Nakalipas na 1 minuto","type":"plaintext"}],"other":[{"value":"Nakalipas na ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) minuto","type":"plaintext"}]}},"hour":{"default":{"one":[{"value":"Nakalipas na 1 oras","type":"plaintext"}],"other":[{"value":"Nakalipas na ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) oras","type":"plaintext"}]}},"day":{"default":{"one":[{"value":"Nakalipas na 1 araw","type":"plaintext"}],"other":[{"value":"Nakalipas na ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) araw","type":"plaintext"}]}},"week":{"default":{"one":[{"value":"Nakalipas na 1 linggo","type":"plaintext"}],"other":[{"value":"Nakalipas na ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) linggo","type":"plaintext"}]}},"month":{"default":{"one":[{"value":"Nakalipas na 1 buwan","type":"plaintext"}],"other":[{"value":"Nakalipas na ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) buwan","type":"plaintext"}]}},"year":{"default":{"one":[{"value":"Nakalipas na 1 taon","type":"plaintext"}],"other":[{"value":"Nakalipas na ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) taon","type":"plaintext"}]}}},"until":{"second":{"default":{"one":[{"value":"Sa 1 segundo","type":"plaintext"}],"other":[{"value":"Sa ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) segundo","type":"plaintext"}]}},"minute":{"default":{"one":[{"value":"Sa 1 minuto","type":"plaintext"}],"other":[{"value":"Sa ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) minuto","type":"plaintext"}]}},"hour":{"default":{"one":[{"value":"Sa 1 oras","type":"plaintext"}],"other":[{"value":"Sa ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) oras","type":"plaintext"}]}},"day":{"default":{"one":[{"value":"Sa 1 araw","type":"plaintext"}],"other":[{"value":"Sa ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) araw","type":"plaintext"}]}},"week":{"default":{"one":[{"value":"Sa 1 linggo","type":"plaintext"}],"other":[{"value":"Sa ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) linggo","type":"plaintext"}]}},"month":{"default":{"one":[{"value":"Sa 1 buwan","type":"plaintext"}],"other":[{"value":"Sa ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) buwan","type":"plaintext"}]}},"year":{"default":{"one":[{"value":"Sa 1 taon","type":"plaintext"}],"other":[{"value":"Sa ","type":"plaintext"},{"value":"{0}","type":"placeholder"},{"value":" (na) taon","type":"plaintext"}]}}},"none":{"second":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" segundo","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" segundo","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" seg","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" seg","type":"plaintext"}]},"abbreviated":{"one":[{"value":"{0}","type":"placeholder"},{"value":"s","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":"s","type":"plaintext"}]}},"minute":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" minuto","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" minuto","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" min","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" min","type":"plaintext"}]},"abbreviated":{"one":[{"value":"{0}","type":"placeholder"},{"value":"m","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":"m","type":"plaintext"}]}},"hour":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" oras","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" oras","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" or","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" or","type":"plaintext"}]},"abbreviated":{"one":[{"value":"{0}","type":"placeholder"},{"value":"h","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":"h","type":"plaintext"}]}},"day":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" araw","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" araw","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" arw","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" arw","type":"plaintext"}]},"abbreviated":{"one":[{"value":"{0}","type":"placeholder"},{"value":"d","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":"d","type":"plaintext"}]}},"week":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" linggo","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" linggo","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" ling","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" ling","type":"plaintext"}]}},"month":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" buwan","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" buwan","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" buw","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" buw","type":"plaintext"}]}},"year":{"default":{"one":[{"value":"{0}","type":"placeholder"},{"value":" taon","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" taon","type":"plaintext"}]},"short":{"one":[{"value":"{0}","type":"placeholder"},{"value":" ta","type":"plaintext"}],"other":[{"value":"{0}","type":"placeholder"},{"value":" ta","type":"plaintext"}]}}}};
    this.time_in_seconds = {
      "second": 1,
      "minute": 60,
      "hour": 3600,
      "day": 86400,
      "week": 604800,
      "month": 2629743.83,
      "year": 31556926
    };
  }

  TimespanFormatter.prototype.format = function(seconds, options) {
    var number, strings, token;
    if (options == null) {
      options = {};
    }
    options["direction"] || (options["direction"] = (seconds < 0 ? "ago" : "until"));
    if (options["unit"] === null || options["unit"] === void 0) {
      options["unit"] = this.calculate_unit(Math.abs(seconds));
    }
    options["type"] || (options["type"] = this.default_type);
    options["number"] = this.calculate_time(Math.abs(seconds), options["unit"]);
    number = this.calculate_time(Math.abs(seconds), options["unit"]);
    options["rule"] = TwitterCldr.PluralRules.rule_for(number);
    strings = (function() {
      var _i, _len, _ref, _results;
      _ref = this.tokens[options["direction"]][options["unit"]][options["type"]][options["rule"]];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        token = _ref[_i];
        _results.push(token.value);
      }
      return _results;
    }).call(this);
    return strings.join("").replace(/\{[0-9]\}/, number.toString());
  };

  TimespanFormatter.prototype.calculate_unit = function(seconds) {
    if (seconds < 30) {
      return "second";
    } else if (seconds < 2670) {
      return "minute";
    } else if (seconds < 86369) {
      return "hour";
    } else if (seconds < 604800) {
      return "day";
    } else if (seconds < 2591969) {
      return "week";
    } else if (seconds < 31556926) {
      return "month";
    } else {
      return "year";
    }
  };

  TimespanFormatter.prototype.calculate_time = function(seconds, unit) {
    return Math.round(seconds / this.time_in_seconds[unit]);
  };

  return TimespanFormatter;

})();

TwitterCldr.DateTimeFormatter = DateTimeFormatter = (function() {

  function DateTimeFormatter() {
    this.tokens = {"date_time":{"default":[{"value":"MMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"d","type":"pattern"},{"value":", ","type":"plaintext"},{"value":"y","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"}],"full":[{"value":"EEEE","type":"pattern"},{"value":", ","type":"plaintext"},{"value":"MMMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"dd","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"y","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"zzzz","type":"pattern"}],"long":[{"value":"MMMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"d","type":"pattern"},{"value":", ","type":"plaintext"},{"value":"y","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"z","type":"pattern"}],"medium":[{"value":"MMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"d","type":"pattern"},{"value":", ","type":"plaintext"},{"value":"y","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"}],"short":[{"value":"M","type":"pattern"},{"value":"/","type":"plaintext"},{"value":"d","type":"pattern"},{"value":"/","type":"plaintext"},{"value":"yy","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"}]},"time":{"default":[{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"}],"full":[{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"zzzz","type":"pattern"}],"long":[{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"z","type":"pattern"}],"medium":[{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"},{"value":":","type":"plaintext"},{"value":"ss","type":"pattern"}],"short":[{"value":"HH","type":"pattern"},{"value":":","type":"plaintext"},{"value":"mm","type":"pattern"}]},"date":{"default":[{"value":"MMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"d","type":"pattern"},{"value":", ","type":"plaintext"},{"value":"y","type":"pattern"}],"full":[{"value":"EEEE","type":"pattern"},{"value":", ","type":"plaintext"},{"value":"MMMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"dd","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"y","type":"pattern"}],"long":[{"value":"MMMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"d","type":"pattern"},{"value":", ","type":"plaintext"},{"value":"y","type":"pattern"}],"medium":[{"value":"MMM","type":"pattern"},{"value":" ","type":"plaintext"},{"value":"d","type":"pattern"},{"value":", ","type":"plaintext"},{"value":"y","type":"pattern"}],"short":[{"value":"M","type":"pattern"},{"value":"/","type":"plaintext"},{"value":"d","type":"pattern"},{"value":"/","type":"plaintext"},{"value":"yy","type":"pattern"}]}};
    this.calendar = {"days":{"format":{"abbreviated":{"fri":"Bye","mon":"Lun","sat":"Sab","sun":"Lin","thu":"Huw","tue":"Mar","wed":"Mye"},"narrow":{"fri":"B","mon":"L","sat":"S","sun":"L","thu":"H","tue":"M","wed":"M"},"wide":{"fri":"Biyernes","mon":"Lunes","sat":"Sabado","sun":"Linggo","thu":"Huwebes","tue":"Martes","wed":"Miyerkules"}},"stand-alone":{"abbreviated":{"fri":"Biy","wed":"Miy"},"narrow":{"fri":"B","mon":"L","sat":"S","sun":"L","thu":"H","tue":"M","wed":"M"},"wide":{"fri":"Biyernes","mon":"Lunes","sat":"Sabado","sun":"Linggo","thu":"Huwebes","tue":"Martes","wed":"Miyerkules"}}},"eras":{"abbr":{"0":"BC","1":"AD"},"name":{"0":""},"narrow":{"0":""}},"fields":{"day":"Araw","dayperiod":"Dayperiod","era":"Era","hour":"Oras","minute":"Minuto","month":"Buwan","second":"Segundo","week":"Linggo","weekday":"Araw ng Linggo","year":"Taon","zone":"Zone"},"formats":{"date":{"default":{"pattern":"MMM d, y"},"full":{"pattern":"EEEE, MMMM dd y"},"long":{"pattern":"MMMM d, y"},"medium":{"pattern":"MMM d, y"},"short":{"pattern":"M/d/yy"}},"datetime":{"default":{"pattern":"{{date}} {{time}}"},"full":{"pattern":"{{date}} {{time}}"},"long":{"pattern":"{{date}} {{time}}"},"medium":{"pattern":"{{date}} {{time}}"},"short":{"pattern":"{{date}} {{time}}"}},"time":{"default":{"pattern":"HH:mm:ss"},"full":{"pattern":"HH:mm:ss zzzz"},"long":{"pattern":"HH:mm:ss z"},"medium":{"pattern":"HH:mm:ss"},"short":{"pattern":"HH:mm"}}},"months":{"format":{"abbreviated":{"1":"Ene","10":"Okt","11":"Nob","12":"Dis","2":"Peb","3":"Mar","4":"Abr","5":"May","6":"Hun","7":"Hul","8":"Ago","9":"Set"},"narrow":{"1":"E","10":"O","11":"N","12":"D","2":"P","3":"M","4":"A","5":"M","6":"H","7":"H","8":"A","9":"S"},"wide":{"1":"Enero","10":"Oktubre","11":"Nobyembre","12":"Disyembre","2":"Pebrero","3":"Marso","4":"Abril","5":"Mayo","6":"Hunyo","7":"Hulyo","8":"Agosto","9":"Setyembre"}},"stand-alone":{"abbreviated":{"1":"Ene","10":"Okt","11":"Nob","12":"Dis","2":"Peb","3":"Mar","4":"Abr","5":"May","6":"Hun","7":"Hul","8":"Ago","9":"Set"},"narrow":{"1":"E","10":"O","11":"N","12":"D","2":"P","3":"M","4":"A","5":"M","6":"H","7":"H","8":"A","9":"S"},"wide":{"1":"Enero","10":"Oktubre","11":"Nobyembre","12":"Disyembre","2":"Pebrero","3":"Marso","4":"Abril","5":"Mayo","6":"Hunyo","7":"Hulyo","8":"Agosto","9":"Setyembre"}}},"periods":{"format":{"abbreviated":{"am":"AM","pm":"PM"},"narrow":{"am":"a","pm":"p"},"wide":{"am":"AM","pm":"PM"}},"stand-alone":{}},"quarters":{"format":{"abbreviated":{"1":"Q1","2":"Q2","3":"Q3","4":"Q4"},"narrow":{"1":1,"2":2,"3":3,"4":4},"wide":{"1":"ika-1 sangkapat","2":"ika-2 sangkapat","3":"ika-3 quarter","4":"ika-4 na quarter"}},"stand-alone":{"abbreviated":{"1":"Q1","2":"Q2","3":"Q3","4":"Q4"},"narrow":{"1":1,"2":2,"3":3,"4":4},"wide":{"1":"ika-1 sangkapat","2":"ika-2 quarter","3":"ika-3 sangkapat","4":"ika-4 na quarter"}}}};
    this.weekday_keys = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    this.methods = {
      'G': 'era',
      'y': 'year',
      'Y': 'year_of_week_of_year',
      'Q': 'quarter',
      'q': 'quarter_stand_alone',
      'M': 'month',
      'L': 'month_stand_alone',
      'w': 'week_of_year',
      'W': 'week_of_month',
      'd': 'day',
      'D': 'day_of_month',
      'F': 'day_of_week_in_month',
      'E': 'weekday',
      'e': 'weekday_local',
      'c': 'weekday_local_stand_alone',
      'a': 'period',
      'h': 'hour',
      'H': 'hour',
      'K': 'hour',
      'k': 'hour',
      'm': 'minute',
      's': 'second',
      'S': 'second_fraction',
      'z': 'timezone',
      'Z': 'timezone',
      'v': 'timezone_generic_non_location',
      'V': 'timezone_metazone'
    };
  }

  DateTimeFormatter.prototype.format = function(obj, options) {
    var format_token, token, tokens,
      _this = this;
    format_token = function(token) {
      var result;
      result = "";
      switch (token.type) {
        case "pattern":
          return _this.result_for_token(token, obj);
        default:
          if (token.value.length > 0 && token.value[0] === "'" && token.value[token.value.length - 1] === "'") {
            return token.value.substring(1, token.value.length - 1);
          } else {
            return token.value;
          }
      }
    };
    tokens = this.get_tokens(obj, options);
    return ((function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = tokens.length; _i < _len; _i++) {
        token = tokens[_i];
        _results.push(format_token(token));
      }
      return _results;
    })()).join("");
  };

  DateTimeFormatter.prototype.get_tokens = function(obj, options) {
    return this.tokens[options.format || "date_time"][options.type || "default"];
  };

  DateTimeFormatter.prototype.result_for_token = function(token, date) {
    return this[this.methods[token.value[0]]](date, token.value, token.value.length);
  };

  DateTimeFormatter.prototype.era = function(date, pattern, length) {
    var choices, index;
    switch (length) {
      case 1:
      case 2:
      case 3:
        choices = this.calendar["eras"]["abbr"];
        break;
      default:
        choices = this.calendar["eras"]["name"];
    }
    index = date.getFullYear() < 0 ? 0 : 1;
    return choices[index];
  };

  DateTimeFormatter.prototype.year = function(date, pattern, length) {
    var year;
    year = date.getFullYear().toString();
    if (length === 2) {
      if (year.length !== 1) {
        year = year.slice(-2);
      }
    }
    if (length > 1) {
      year = ("0000" + year).slice(-length);
    }
    return year;
  };

  DateTimeFormatter.prototype.year_of_week_of_year = function(date, pattern, length) {
    throw 'not implemented';
  };

  DateTimeFormatter.prototype.day_of_week_in_month = function(date, pattern, length) {
    throw 'not implemented';
  };

  DateTimeFormatter.prototype.quarter = function(date, pattern, length) {
    var quarter;
    quarter = ((date.getMonth() / 3) | 0) + 1;
    switch (length) {
      case 1:
        return quarter.toString();
      case 2:
        return ("0000" + quarter.toString()).slice(-length);
      case 3:
        return this.calendar.quarters.format.abbreviated[quarter];
      case 4:
        return this.calendar.quarters.format.wide[quarter];
    }
  };

  DateTimeFormatter.prototype.quarter_stand_alone = function(date, pattern, length) {
    var quarter;
    quarter = (date.getMonth() - 1) / 3 + 1;
    switch (length) {
      case 1:
        return quarter.toString();
      case 2:
        return ("0000" + quarter.toString()).slice(-length);
      case 3:
        throw 'not yet implemented (requires cldr\'s "multiple inheritance")';
        break;
      case 4:
        throw 'not yet implemented (requires cldr\'s "multiple inheritance")';
        break;
      case 5:
        return this.calendar.quarters['stand-alone'].narrow[quarter];
    }
  };

  DateTimeFormatter.prototype.month = function(date, pattern, length) {
    var month_str;
    month_str = (date.getMonth() + 1).toString();
    switch (length) {
      case 1:
        return month_str;
      case 2:
        return ("0000" + month_str).slice(-length);
      case 3:
        return this.calendar.months.format.abbreviated[month_str];
      case 4:
        return this.calendar.months.format.wide[month_str];
      case 5:
        throw 'not yet implemented (requires cldr\'s "multiple inheritance")';
        break;
      default:
        throw "Unknown date format";
    }
  };

  DateTimeFormatter.prototype.month_stand_alone = function(date, pattern, length) {
    switch (length) {
      case 1:
        return date.getMonth().toString();
      case 2:
        return ("0000" + date.getMonth().toString()).slice(-length);
      case 3:
        throw 'not yet implemented (requires cldr\'s "multiple inheritance")';
        break;
      case 4:
        throw 'not yet implemented (requires cldr\'s "multiple inheritance")';
        break;
      case 5:
        return this.calendar.months['stand-alone'].narrow[date.month];
      default:
        throw "Unknown date format";
    }
  };

  DateTimeFormatter.prototype.day = function(date, pattern, length) {
    switch (length) {
      case 1:
        return date.getDate().toString();
      case 2:
        return ("0000" + date.getDate().toString()).slice(-length);
    }
  };

  DateTimeFormatter.prototype.weekday = function(date, pattern, length) {
    var key;
    key = this.weekday_keys[date.getDay()];
    switch (length) {
      case 1:
      case 2:
      case 3:
        return this.calendar.days.format.abbreviated[key];
      case 4:
        return this.calendar.days.format.wide[key];
      case 5:
        return this.calendar.days['stand-alone'].narrow[key];
    }
  };

  DateTimeFormatter.prototype.weekday_local = function(date, pattern, length) {
    var day;
    switch (length) {
      case 1:
      case 2:
        day = date.getDay();
        return (day === 0 ? "7" : day.toString());
      default:
        return this.weekday(date, pattern, length);
    }
  };

  DateTimeFormatter.prototype.weekday_local_stand_alone = function(date, pattern, length) {
    switch (length) {
      case 1:
        return this.weekday_local(date, pattern, length);
      default:
        return this.weekday(date, pattern, length);
    }
  };

  DateTimeFormatter.prototype.period = function(time, pattern, length) {
    if (time.getHours() > 11) {
      return this.calendar.periods.format.wide["pm"];
    } else {
      return this.calendar.periods.format.wide["am"];
    }
  };

  DateTimeFormatter.prototype.hour = function(time, pattern, length) {
    var hour;
    hour = time.getHours();
    switch (pattern[0]) {
      case 'h':
        if (hour > 12) {
          hour = hour - 12;
        } else if (hour === 0) {
          hour = 12;
        }
        break;
      case 'K':
        if (hour > 11) {
          hour = hour - 12;
        }
        break;
      case 'k':
        if (hour === 0) {
          hour = 24;
        }
    }
    if (length === 1) {
      return hour.toString();
    } else {
      return ("000000" + hour.toString()).slice(-length);
    }
  };

  DateTimeFormatter.prototype.minute = function(time, pattern, length) {
    if (length === 1) {
      return time.getMinutes().toString();
    } else {
      return ("000000" + time.getMinutes().toString()).slice(-length);
    }
  };

  DateTimeFormatter.prototype.second = function(time, pattern, length) {
    if (length === 1) {
      return time.getSeconds().toString();
    } else {
      return ("000000" + time.getSeconds().toString()).slice(-length);
    }
  };

  DateTimeFormatter.prototype.second_fraction = function(time, pattern, length) {
    if (length > 6) {
      throw 'can not use the S format with more than 6 digits';
    }
    return ("000000" + Math.round(Math.pow(time.getMilliseconds() * 100.0, 6 - length)).toString()).slice(-length);
  };

  DateTimeFormatter.prototype.timezone = function(time, pattern, length) {
    var hours, minutes;
    hours = ("00" + (time.getTimezoneOffset() / 60).toString()).slice(-2);
    minutes = ("00" + (time.getTimezoneOffset() % 60).toString()).slice(-2);
    switch (length) {
      case 1:
      case 2:
      case 3:
        return "-" + hours + ":" + minutes;
      default:
        return "UTC -" + hours + ":" + minutes;
    }
  };

  DateTimeFormatter.prototype.timezone_generic_non_location = function(time, pattern, length) {
    throw 'not yet implemented (requires timezone translation data")';
  };

  return DateTimeFormatter;

})();