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

// ###

axios({
  url: '/base/post',
  method: 'post',
  data: {
    a: 1,
    b: 2
  }
})

axios({
  url: '/base/post',
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  data: {
    a: 2,
    b: 3
  }
})

axios({
  method: 'post',
  url: '/base/post',
  data: {
    a: 1,
    b: 2
  }
}).then((res) => {
  console.log(res)
})

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  data: {
    a: 3,
    b: 4
  }
}).then((res) => {
  console.log(res)
})
