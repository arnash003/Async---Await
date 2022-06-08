import "./styles.css";


function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`)
    if (location === "Google") {
      resolve('Google says hi')
    } else {
      reject('We can only talk to Google')
    }
  })
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response')
    resolve(`Extra Information +${response}`)
  })
}

// makeRequest('Facebook').then(response => {
//   console.log('Response Received') 
//   return processRequest(response)
// }).then(processedResponse => {
//   console.log(processedResponse)
// }).catch(err => {
//   console.log(err)
// })


//Async await awaits a function that your waiting code is inside of.
// The await function waits for the resolved code inside the promise
// Works exactly the same as the promise function
// Must wrap code inside a function. You need to have it wrapped with the async key word at the beginning of your function
// You must also use the await key word otherwise it will just return the promise and not the resolved code of that code being promised
// Just like promises but is easier and more readable

async function doWork() {
  try {
    const response = await makeRequest('Facebook')
console.log('Response Received')
const processedResponse = await processRequest(response)
console.log(processedResponse)
} catch (err) {
  console.log(err)
}
  }
doWork()










document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
