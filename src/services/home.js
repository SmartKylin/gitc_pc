import api from '../api'
import http from '../fetch'

export function getPeopleList(pageId) {
  return http.get(api.peopleList + pageId + `/list.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272&order_by=ename`)
}

export function getDate1() {
  return http.get('http://120.92.10.182:8000/api/gitc/person-4/all/list.json?token=1afb756d16740266efde290917ca1a8e&type=1&phone=18201440272')
}

export function getDate2() {
  return http.get('http://120.92.10.182:8000/api/gitc/person-6/all/list.json?token=1afb756d16740266efde290917ca1a8e&type=1&phone=18201440272')
}

export function getSpeecherList() {
  return http.get('http://120.92.10.182:8000/api/gitc/person/pages.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272&order_by=ename')
}

