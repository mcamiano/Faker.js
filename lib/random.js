var definitions = require('./definitions');

var random = {
    // returns a single random number based on a range
    number: function (range) {
        return Math.floor(Math.random() * range);
    },

    // takes an array and returns the array randomly sorted
    array_element: function (array) {
        var r = Math.floor(Math.random() * array.length);
        return array[r];
    },

    city_prefix: function () {
        return this.array_element(definitions.city_prefix);
    },

    city_suffix: function () {
        return this.array_element(definitions.city_suffix);
    },

    us_city_name: function() {
        return this.array_element(definitions.us_city_name);
    },

    street_suffix: function () {
        return this.array_element(definitions.street_suffix);
    },

    br_state: function () {
        return this.array_element(definitions.br_state);
    },

    br_state_abbr: function () {
        return this.array_element(definitions.br_state_abbr);
    },

    us_state: function () {
        return this.array_element(definitions.us_state);
    },

    us_state_abbr: function () {
        return this.array_element(definitions.us_state_abbr);
    },

    uk_county: function () {
        return this.array_element(definitions.uk_county);
    },

    uk_country: function () {
        return this.array_element(definitions.uk_country);
    },

    first_name: function () {
        return this.array_element(definitions.first_name);
    },

    last_name: function () {
        return this.array_element(definitions.last_name);
    },

    name_prefix: function () {
        return this.array_element(definitions.name_prefix);
    },

    name_suffix: function () {
        return this.array_element(definitions.name_suffix);
    },

    catch_phrase_adjective: function () {
        return this.array_element(definitions.catch_phrase_adjective);
    },

    catch_phrase_descriptor: function () {
        return this.array_element(definitions.catch_phrase_descriptor);
    },

    catch_phrase_noun: function () {
        return this.array_element(definitions.catch_phrase_noun);
    },

    bs_adjective: function () {
        return this.array_element(definitions.bs_adjective);
    },

    bs_buzz: function () {
        return this.array_element(definitions.bs_buzz);
    },

    bs_noun: function () {
        return this.array_element(definitions.bs_noun);
    },

    phone_formats: function () {
        return this.array_element(definitions.phone_formats);
    },

    domain_suffix: function () {
        return this.array_element(definitions.domain_suffix);
    },

    avatar_uri: function () {
        return this.array_element(definitions.avatar_uri);
    },

    recentdate: function(yearsago,days) {
      yearsago=yearsago||25;
      days=days||28;
      d=new Date()
      return random.number(12)+"/"+random.number(days)+"/"+(d.getFullYear() - random.number(yearsago));
    },

    email: function(prefix='fakeemail',max=100000000) {
      prefix=prefix||'fakeemail';
      max=max||100000000;
      return prefix+'-'+btoa(random.number(max))+'@mailinator.com'   # check the emails at mailinator.com
    },

    digit: function(max) {
      max=max||9;
      max=max%10;
      return random.number(max);
    },

    nonzerodigit: function(max) {
      max=max||9;
      max=max%10;
      return (1+random.number(max-1));
    },

    stringof: function(num,cb)
      num=num||2;
      if (num < 1) return '';
      ++num;
      arr = while (num -= 1) {
        cb();
      }
      return arr.join('');
    }

    digits: function(num) {
      num=num||2;
      random.stringof(num, random.digit);
    }

};

module.exports = random;
