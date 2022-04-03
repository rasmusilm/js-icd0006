import {route} from "aurelia";

@route({
  routes: [
    {
      id: 'jokes1',
      path: '/jokes1',
      component: import('./views/jokes1/jokes'),
      title: 'Main',
    },
    {
      id: 'jokes2',
      path: '/jokes2',
      component: import('./views/jokes2/jokes2'),
      title: 'Main',
    },
    {
      id: 'jokes3',
      path: '/jokes3',
      component: import('./views/jokes3/jokes'),
      title: 'Main',
    },
    {
      id: 'seen-jokes',
      path: ['', '/history'],
      component: import('./views/seen-jokes/seen-jokes'),
      title: 'Viewed jokes',
    },
  ]
})
export class MyApp {
  constructor() {
    console.log("App start")
  }
}
