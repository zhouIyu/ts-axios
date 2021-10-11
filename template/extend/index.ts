import axios from '../../src'

axios({
  url: '/extend/post',
  method: 'post',
  data: {
    a: 1
  }
})
axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    a: 2
  }
})

axios.get('/extend/get')

axios.options('/extend/options')

axios.delete('/extend/delete')

axios.head('/extend/head')

axios.post('/extend/post', { msg: 'post' })

axios.put('/extend/put', { msg: 'put' })

axios.patch('/extend/patch', { msg: 'patch' })

axios('/extend/post', {
  method: 'post',
  data: {
    a: 100
  }
})

// #######

interface ResponseData<T = any> {
  code: number
  data: T
  message: string
}

interface User {
  name: string
  age: number
}

function getUser<T>() {
  return axios<ResponseData<T>>('/extend/user')
    .then((res) => res.data)
    .catch((err) => console.log(err))
}

async function test() {
  const user = await getUser<User>()
  if (user) {
    console.log(user.data.name)
  }
}

test()
