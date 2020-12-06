module.exports = {
  images: {
    domains: ['i.imgur.com'],
  },
}

const withImages = require('next-images')
module.exports = withImages({
  esModule: true
})

