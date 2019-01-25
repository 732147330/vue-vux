import axios from 'axios'
import qs from 'qs';

export default ({url, method, params, success, failed}) => {
  const headers = {
    'Accept': 'application/json',
    'Content-Type': (method ? 'application/x-www-form-urlencoded' : 'application/json'),
    //'Authorization': `${getToken()}`
  };
  const token = window.localStorage.getItem('aeg_token');
  if (token) headers['token'] = token;
  const instance = axios.create({
    headers,
    timeout: 2000, //响应时间2s
    //withCredentials: true,
    //xsrfHeaderName: 'Authorization',
    //xsrfCookieName: 'Authorization',
    //baseURL: api.baseURL,
    params: {
      t: (new Date()).valueOf()
    }
  });
  instance[method || 'get'](url, (method ? qs.stringify(params) : {params}))
    .then(res => {
      if (success) {
        if (res.data === 'failed') failed(res);
        else success(res)
      }
    })
    .catch(error => {
      if (failed) failed(error)
    })
}
