import axios from "axios"

const matchValue = (value) => value.match(/^(\S+)\s*(.*)$/)

const axiosRequest = (data, value) => {
  const [stance, method, url] = matchValue(value)
  return axios.request({
    url,
    method,
    ...request.axiosConfigs,
    ...data
  })
}

const forInConfigs = (configs) => {
  for (let key in configs) {
    const value = configs[key]
    if (typeof value === "string") {
      configs[key] = (data) => axiosRequest(data, value)
    } else if (typeof value === "function") {
      configs[key] = (data) => axiosRequest(data, value(data))
    } else if (Object.prototype.toString.call(value) === "[object Object]") {
      forInConfigs(value)
    }
  }
  return configs
}

const request = (configs) => {
  const newConfigs = Object.assign({}, configs)
  return forInConfigs(newConfigs)
}

export default request