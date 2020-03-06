import httpRequest from '../../directives/httpRequest.js'
import methods from '../../directives/methods.js'
const calendarListUrl = 'https://www.googleapis.com/calendar/v3/users/me/calendarList'
export default {
  // undone google Calendar API
  fetchCalendarList () {
    return new Promise(async (resolve, reject) => {
      try {
        const param = {
          maxResults: 10,
          minAccessRole: 'owner',
          showDeleted: false,
          key: 'AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM'
        }
        const response = function (result) {
          resolve(result)
        }
        httpRequest.get(calendarListUrl, param, response)
      } catch (error) {
        reject(error)
      }
    })
  },
  createTodoItem ({ commit }, obj) {
    return new Promise(async (resolve, reject) => {
      try {
        obj.id = methods.generateRandomID()
        await commit('setToDoItem', obj)
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  },
  updateTodoItem ({ commit }, obj) {
    return new Promise(async (resolve, reject) => {
      try {
        await commit('setUpdateToDoItem', obj)
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  },
  deleteItem ({ commit }, index) {
    return new Promise(async (resolve, reject) => {
      try {
        await commit('setDeleteToDoItem', index)
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

}
