'use strict';

class InlineCssCompiler {
  constructor(config) {
    this.config = config && config.plugins && config.plugins.inlineCss || {};
  }
  
  compile(file) {
    try {
      const payload = JSON.stringify(file.data);
      file.data = 'module.exports = ' + payload;
      return Promise.resolve(file);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

InlineCssCompiler.prototype.brunchPlugin = true;
InlineCssCompiler.prototype.type = 'javascript';
InlineCssCompiler.prototype.extension = 'css';