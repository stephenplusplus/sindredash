module.exports = {

  // env/user stuff
  osName: require("os-name"),
  archs: require("archs"),
  nodePlatforms: require("node-platforms"),
  winRelease: require("win-release"),
  osxRelease: require("osx-release"),
  xdgBasedir: require("xdg-basedir"),
  userHome: require("user-home"),
  defaultUid: require("default-uid"),
  sudoBlock: require("sudo-block"),
  rootCheck: require("root-check"),
  downgradeRoot: require("downgrade-root"),
  hasDom: require("has-dom"),

  // type detection stuff
  isStream: require("is-stream"),
  isHtml: require("is-html"),
  isMd: require("is-md"),
  isBinaryPath: require("is-binary-path"),
  isProgressive: require("is-progressive"),

  // array stuff
  uniqueRandom: require("unique-random"),
  uniqueRandomArray: require("unique-random-array"),
  alphaSort: require("alpha-sort"),
  sortOn: require("sort-on"),
  eachAsync: require("each-async"),

  // extensions
  markdownExtensions: require("markdown-extensions"),
  binaryExtensions: require("binary-extensions"),

  // object stuff
  modifyValues: require("modify-values"),
  modifyKeys: require("modify-keys"),
  lowercaseKeys: require("lowercase-keys"),
  dotProp: require("dot-prop"),

  // debug stuff
  debugLog: require("debug-log"),
  getStdin: require("get-stdin"),
  callerPath: require("caller-path"),
  callerCallsite: require("caller-callsite"),

  // string stuff
  detectNewline: require("detect-newline"),
  newlineBr: require("newline-br"),
  padStream: require("pad-stream"),
  stripAnsi: require("strip-ansi"),
  humanizeString: require("humanize-string"),
  decamelize: require("decamelize"),
  camelcase: require("camelcase"),
  titleize: require("titleize"),
  untildify: require("untildify"),
  stripCssComments: require("strip-css-comments"),
  stripJsonComments: require("strip-json-comments"),
  filenameReservedRegex: require("filename-reserved-regex"),
  // sindre likes strings...
  validFilename: require("valid-filename"),
  filenamify: require("filenamify"),
  filenamifyUrl: require("filenamify-url"),
  normalizeUrl: require("normalize-url"),
  humanizeUrl: require("humanize-url"),
  stripUrlAuth: require("strip-url-auth"),
  stripOuter: require("strip-outer"),
  compareUrls: require("compare-urls"),
  condenseWhitespace: require("condense-whitespace"),
  trimRepeated: require("trim-repeated"),
  prependHttp: require("prepend-http"),
  getUrls: require("get-urls"),
  multiline: require("multiline"),

  // word generator stuff
  superb: require("superb"),
  randomWord: require("random-word"),
  dogNames: require("dog-names"),
  catNames: require("cat-names"),
  somebody: require("somebody"),

  // npm stuff
  npmName: require("npm-name"),
  npmKeyword: require("npm-keyword"),
  registryUrl: require("registry-url"),
  packageJson: require("package-json"),

  // bower stuff
  bowerName: require("bower-name"),

  // github stuff
  githubUsername: require("github-username"),

  // network stuff
  isUp: require("is-up"),
  publicIp: require("public-ip"),
  ipify: require("ipify"),

  // file stuff
  cpy: require("cpy"),
  cpFile: require("cp-file"),
  readChunk: require("read-chunk"),
  globby: require("globby")
}
