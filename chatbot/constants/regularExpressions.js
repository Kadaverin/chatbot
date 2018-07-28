const WEATHER_REGEXP =  /(?:.*)What is the weather (tomorrow|today|(?:on) Monday|(?:on) Tuesday|(?:on) Wednesday|(?:on) Thursday|(?:on) Friday|(?:on) Saturday|(?:on) Sunday) in (Dnipro|Lviv|Kyiv|Kharkiv|Odessa)(?:.*)/i

const MONEY_EXCHANGE_REGEXP = /(?:.*)convert (\d+(?:\.\d{0,9})?) (dollar(?:s?)|euro(?:s?)|hryvnia(?:s?)) to (dollar(?:s?)|euro(?:s?)|hryvnia(?:s?))(?:.*)/i

const SAVE_NOTE_REGEXP = /(?:.*)Save note title: (.+)(?:,*\s*)body:(?:\s*)(.+)/i

const SHOW_NOTE_LIST_REGEXP = /(?:.*)show(?:\s*)note(?:\s*)list(?:.*)/i

const SHOW_NOTE_REGEXP = /(?:.*)show(?:\s*)note(?:\s*:*)(.+)/i

const DELETE_NOTE_REGEXP = /(?:.*)delete(?:\s*)note(?:\s*:*)(.+)/i

const ADVICE_REGEXP = /(?:.+\?)(?:\s#@\)₴\?\$0)(?:.*)/i

const QUOTE_REGEXP = /(?:\s*)show(?:\s*)quote(?:\s*)/i

module.exports = {
  QUOTE_REGEXP,
  ADVICE_REGEXP,
  WEATHER_REGEXP,
  SHOW_NOTE_REGEXP,
  SAVE_NOTE_REGEXP,
  DELETE_NOTE_REGEXP,
  SHOW_NOTE_LIST_REGEXP,
  MONEY_EXCHANGE_REGEXP,
}




