function parseURL(){
    const url =  window.location.href
    console.log('url',url)
    const parsed = url.split("/").slice(-1)
    const newUrl = parsed[0]
    console.log('parsed',parsed[0])
    return newUrl;
  }

export default parseURL;