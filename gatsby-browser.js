/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}

// Called when the Gatsby browser runtime first starts.
// export const onClientEntry = () => {
//   window.onload = () => {
//     addScript("../../../js/toggle-menu.js")
//   }
// }

// Called when the initial (but not subsequent) render of Gatsby App is done on the client.
exports.onInitialClientRender = () => {
  console.log("onInitialClientRender")
  addScript("../../../js/toggle-menu.js")
}
