import api from '../api'
import http from '../fetch'

export function getPeopleList(pageId) {
  return http.get(api.peopleList + pageId + `/list.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272&order_by=ename`)
}

export function getDate1() {
  return http.get('http://api.thegitc.com/api/gitc/person-4/all/list.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272&order_by=-weight')
}

export function getDate2() {
  return http.get('http://api.thegitc.com/api/gitc/person-6/all/list.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272&order_by=-weight')
}

export function getSpeecherList() {
  return http.get('http://api.thegitc.com/api/gitc/person/pages.json?token=1afb756d16740266efde290917ca1a8e&phone=18201440272&order_by=ename')
}

// 直播地址
export function getLiveUrl() {
  return http.get(
  'http://api.thegitc.com/api/video/70/list.json?token=1afb756d16740266efde290917ca1a8e'
  );
}

