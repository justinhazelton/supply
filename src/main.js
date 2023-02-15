import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')



 
// Connect to Storyblok with API access token
//import { createApp } from 'vue';
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
//import App from './App.vue';
 
const app = createApp(App);
 
app.use(StoryblokVue, {
  accessToken: '4CP3ccATyW6QJVNkS8l22gtt',
  bridge: process.env.NODE_ENV !== 'production', // optimizes by excluding the bridge on production
  use: [apiPlugin],
});
 
app.mount('#app');



// Make components compatible with Storyblok
//import App from "./App.vue";
import Grid from "./components/Grid.vue";
import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";
import Feature from "./components/Feature.vue";
 
//const app = createApp(App);
// ...
app.component("Grid", Grid);
app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);
