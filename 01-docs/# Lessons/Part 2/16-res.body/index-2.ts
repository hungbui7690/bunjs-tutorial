/*
  Fetching a URL with a timeout


*/

// 1. To fetch a URL with a timeout, use AbortSignal.timeout:
const response = await fetch('http://example.com', {
  signal: AbortSignal.timeout(1000),
})

// Canceling a request
// To cancel a request, use an AbortController:
const controller = new AbortController()
const responseX = await fetch('http://example.com', {
  signal: controller.signal,
})

controller.abort()
