import api from '../api'
import http from '../fetch'

export function getImgist(imgId) {
  return http.get(api.getImgList + imgId + `/list.json?token=1afb756d16740266efde290917ca1a8e`)
}