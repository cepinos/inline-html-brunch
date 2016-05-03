'use strict';

class InlineHTMLCompiler {
  constructor(config) {
    this.config = config && config.plugins && config.plugins.inlineHTML || {};
  }
  
  compile(file) {
    try {
      const payload = JSON.stringify(file.data);
      file.data = 'define([],function(){return '+payload+'}) ';
      return Promise.resolve(file);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

InlineHTMLCompiler.prototype.brunchPlugin = true;
InlineHTMLCompiler.prototype.type = 'javascript';
InlineHTMLCompiler.prototype.extension = 'html';

module.exports = InlineHTMLCompiler;
