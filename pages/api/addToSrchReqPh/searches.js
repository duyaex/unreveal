import fs from 'fs'
export default function AllSrchesGetAndPost(req, res) {
    if (req.method === "GET") {
        getAllSearches(req, res)
    }
    if (req.method === "POST") {
        addToSrches(req, res)
    }

}
const getAllSearches = async(req, res) => {
    const searches = []
    const data = await fs.readFileSync('/public/recent_searches.json')
    const objData = await JSON.parse(data)
    for (let key in objData) {
        searches.push(objData[key])
    }
    await res.status(200).json({
        success: true,
        searches: searches
    })
}

const addToSrches = async(req, res) => {
    const { term } = req.body
    const srchArr = []
    const inData = await fs.readFileSync('/public/recent_searches.json')
        // console.log("the initial data ",JSON.parse(inData))
    const objData = await JSON.parse(inData)
    const addSrch = [`${term}`]
    for (let key in objData) {
        srchArr.push(objData[key])
    }
    // console.log("the srchArr",srchArr)
    const addingData = srchArr.concat(addSrch)
        // console.log("the finale data is ",addingData)
    await fs.writeFileSync('/public/recent_searches.json', JSON.stringify(addingData), () => {})
    await res.status(200).json({
        success: true,
        message: "Search has been added"
    })
}