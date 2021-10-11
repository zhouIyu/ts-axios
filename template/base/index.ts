import axios from '../../src'

axios({
  url: '/base/get',
  method: 'get'
})

axios({
  url: '/base/get',
  method: 'get',
  params: {
    a: [1, 2]
  }
})

axios({
  url: '/base/get',
  method: 'get',
  params: {
    a: {
      b: 'hello'
    }
  }
})

const date = new Date()

axios({
  url: '/base/get',
  method: 'get',
  params: {
    date
  }
})

axios({
  url: '/base/get',
  method: 'get',
  params: {
    a: '@:$,'
  }
})

axios({
  url: '/base/get',
  method: 'get',
  params: {
    a: 1,
    b: null
  }
})

axios({
  url: '/base/get#hash',
  method: 'get',
  params: {
    a: 1
  }
})

axios({
  url: '/base/get?a=2',
  method: 'get',
  params: {
    b: 3
  }
})

axios({
  url: '/base/get#hash?a=2',
  method: 'get',
  params: {
    b: 3
  }
})
