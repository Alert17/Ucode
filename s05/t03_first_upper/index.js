module.exports.firstUpper = (string) => {
  if (string != null && string != "") {
    string = string.toLowerCase()
    string = string.trim()
    string = string[0].toUpperCase() + string.slice(1)
  } else {
    return ""
  }
  return string
}

