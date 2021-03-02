const request = require('../dist/request').default;

request.axiosConfigs = {
  baseURL: 'https://cnodejs.org/api/v1',
  transformResponse: [function (data) {
    const result = JSON.parse(data)
    return result.data
  }],
}

const userAPI = {
  getTopics: `GET /topics`
};

test('userAPI length', () => {
  const apis = request(userAPI)
  expect(Object.keys(apis).length).toBe(1)
});


test('userAPI reponse data is array', () => {
  const apis = request(userAPI)
  return apis.getTopics().then(res => {
    expect(res.data.length).toBe(40)
  })
});