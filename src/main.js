import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faRoad, faVideo, faDroplet, faGear, faBuilding, faChartColumn } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faRoad, faVideo, faDroplet, faGoogle, faGear, faBuilding, faChartColumn)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
