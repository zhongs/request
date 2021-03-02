const request = require('../dist/request').default;

request.axiosConfigs = {
  baseURL: 'https://cnodejs.org/api/v1',
  transformResponse: [function (data) {
    const result = JSON.parse(data)
    return result.data
  }],
}

const userAPI = {
  getTopics: `GET /topics`,
  getTopic: ({ id }) => `GET /topic/${id}`
};

test('userAPI reponse data is array', () => {
  const apis = request(userAPI)
  return apis.getTopics().then(res => {
    expect(res.data.length).toBe(40)
  })
});


test('userAPI reponse data is Object', () => {
  const apis = request(userAPI)
  const id = '5433d5e4e737cbe96dcef312'
  return apis.getTopic({ id }).then(res => {
    expect(res.data.id).toBe(id)
  })
});