
Usage
---------------

安装
````javascript
npm install --save request-func
````

配置
````javascript
import request from 'request-func'

const userAPI = {
  getUser: `GET /api/users/userInfo`
};

// 或者

const gatherAPI = {
  allCvts: `GET /api/cvts`,
  getById: ({ id }) => `GET /api/task/${id}`,
  task: {
    create: "POST /api/task",
    getById: ({ id }) => `PUT /api/task/${id}`
  },
  summary: {
    create: "POST /api/meetingMinutes",
    update: ({ id }) => `PUT /api/meetingMinutes/${id}`,
  }
};

const apis = request(gatherAPI);

apis.allCvts({ params: {} }).then(res => {}).catch(err => {})

apis.task.getById({ id, params: {} }).then(res => {}).catch(err => {})

apis.task.create({ data: {} }).then(res => {}).catch(err => {})

apis.summary.update({ id }).then(res => {}).catch(err => {})
````

axios 全局设置 http://www.axios-js.com/zh-cn/docs/
````javascript
import request from 'request-func'
request.axiosConfigs = {
  headers: { "X-Requested-With": "XMLHttpRequest" }
};
````
