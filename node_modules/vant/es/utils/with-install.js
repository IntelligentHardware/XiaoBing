import { camelize } from './format/string';
// using any here because tsc will generate some weird results when using generics
export function withInstall(options) {
  options.install = app => {
    var {
      name
    } = options;
    app.component(name, options);
    app.component(camelize("-" + name), options);
  };

  return options;
}