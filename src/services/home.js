import api from '../api'
import http from '../fetch'

export function getPeopleList(pageId) {
  return http.get(api.peopleList + pageId + `/list.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272`)
}