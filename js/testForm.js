let category = []

const genre = []

const trendItems = []


const render = {}


//Where Everything Starts
let movieLists
movieData().then( data => {

  movieLists = data

  document.body.innerHTML += bodyHTML

  sortLatestRender()
  topRatedRender()

  headerFunctions()
  
  eventListener()


})














