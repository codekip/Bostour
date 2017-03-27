/* Nick added this */
team = new Vue({
  el: '#team',
  data:{
    teams: [
      'Days',
      'Team 1',
      'Team 2',
      'Team 3',
    ],
  }
});

namelist = new Vue({
  el: '#namelist',
  data:{
    thenames: [
      'Arnold, Paul',
      'Black, Paul',
      'Boughey, Ben',
      'Bricklebank, Neil',
    ],
  }
});

submit = new Vue({
  el:'#submitbutton',
  methods:{
    submit: function(event){
      alert('Form submitted successfully');
      window.location.reload(true);
    }
  }
});

/* End of Nick added this */

boscounter = Vue.component('bos-counter', {
  template: '<td class="count" v-on:click="increment()">{{ count }}</td>',
  data: function() {
    return {
      count: 0,
    }
  },
  methods: {
    increment: function() {
      this.count++;
    }
  }
});

bosbehaviour = Vue.component('bos-behaviour', {
  props: ['description'],
  template: '<tr>\
                <td>{{ description }}</td>\
                <td is="bos-counter"></td>\
                <td is="bos-counter"></td>\
                <td is="bos-counter"></td>\
             </tr>'
});

bosbehaviourset = Vue.component('bos-behaviour-set', {
  props: ['title', 'behaviours'],
  template: '<tbody>\
               <tr class="info">\
                 <td>{{ title }}</td>\
                 <td></td>\
                 <td></td>\
                 <td></td>\
               </tr>\
               <tr is="bos-behaviour" v-for="behaviour in behaviours" v-bind:description="behaviour.description"></tr>\
             </tbody>'
});

bostour = new Vue({
  el: '#bostour',
  data: {
    behavioursets: [
      { title: 'Operation', behaviours: [ { description: "Pedestrians/FLTs observing 5m rule in low bay" },
                                          { description: "Operators dismounting reach trucks in the correct manner" },
                                          { description: "Operator looking in direction of travel when operating MHE" },
                                          { description: "Pedestrian not within 1 meter of a manned FLT without the handbrake applied" },
                                          { description: "Reach truck is not being manouvered whilst the reach is extended" }
                                        ] },
      { title: 'Customisation', behaviours: [ { description:"Operator looking in direction of travel when operating MHE" },
                                              { description: "Operators are using the correct defect-free knife for the task" },
                                              { description: "Gloves being worn whilst handling pallets/materials" },
                                              { description: "Pedestrians and trucks are not operating outside their allocated zones" }] }
    ]
  }
});
