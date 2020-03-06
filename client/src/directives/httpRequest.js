import Vue from 'vue'
import methods from '@/directives/methods'

export default {
  // for getting our document url from aws or general GET.
  get (url, parameters, callback, returnType) {
    let requestUrl = ''
    let temp = ''
    for (var item in parameters) {
      temp += item + '=' + parameters[item] + '&'
    }
    requestUrl = url + '?' + temp.replace(/&$/, "$'")
    Vue.axios({
      url: requestUrl,
      method: 'GET',
      headers: {
        'x-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer ' + methods.getCookie('access_token'),
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Expose-Headers': 'Content-Disposition'
      },
      responseType: returnType || 'json',
      withCredentials: true,
      timeout: 100000,
      validateStatus: function (status) {
        return status >= 200 && status < 300
      },
      transformRequest: [],
      transformResponse: []
    }).then((response) => {
      if (callback) { callback(response) }
    }).catch((error) => {
      if (callback) { callback(null, error) }
    })
  },
  // general POST
  post (url, parameters, callback) {
    let data = JSON.stringify(parameters)
    return new Promise((resolve, reject) => {
      Vue.axios({
        url,
        method: 'POST',
        headers: {
          'x-Requested-With': 'XMLHttpRequest',
          Authorization: 'Bearer ' + methods.getCookie('access_token'),
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Expose-Headers': 'Content-Disposition'
        },
        responseType: 'json',
        withCredentials: true,
        data: data,
        timeout: 100000,
        validateStatus: (status) => status >= 200 && status < 300, // default
        transformRequest: [],
        transformResponse: []
      })
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
  }
}
