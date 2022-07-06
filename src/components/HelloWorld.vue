<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <p>New paragraph</p>
  <hr\>
  <div id="app">
  {{ info }}
  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: 'HelloWorld',
   el: '#app',
  props: {
    msg: String
  },
    data () {
    return {
      info: null
    }},
  mounted () {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
