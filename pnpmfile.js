'use strict'

const resolutions = require('./package.json').resolutions;
const readPackage = (pkg, ctx) => {
  let deps = pkg.dependencies
  if (deps) for (let name in resolutions) {
    if (name in deps && deps[name] !== resolutions[name]) {
      ctx.log(`[${pkg.name}] replace '${name}@${deps[name]}' with '${resolutions[name]}'`)
      deps[name] = resolutions[name]
    }
  }
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}
