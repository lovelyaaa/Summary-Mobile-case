export const fetchUrl = "http://localhost:3333/indexPro"
export default {

  getData(cb){
    fetch(fetchUrl).then(res => {
      res.json().then(data => {
        cb(data)
      })
    })
  }
}
