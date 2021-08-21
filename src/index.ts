/* eslint-disable */

import '@fortawesome/fontawesome-free/js/brands'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/fontawesome'

// @ts-ignore
import App from './App.svelte'

const app = new App({
    target: document.body,
})

export default app

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept()
    import.meta.hot.dispose(() => {
        app.$destroy()
    })
}
