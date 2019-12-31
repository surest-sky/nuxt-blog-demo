export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    if(process.env.NODE_ENV == 'production') {
      config.url = process.env.BASE_URL + config.url
    }
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
