import fetchUser from './githubAPI'

const heading = document.querySelector<HTMLHeadingElement>('h1')!

;(async () => {
  const userData = await fetchUser('bradtraversy')
  heading.innerHTML = JSON.stringify(userData)
})()
