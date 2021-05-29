<template>
  <div class="container text-center">
    <div style="text-align: center">
      <h1>
        <span><router-link :to="{ name: 'main' }">PROFILE</router-link></span>
        OR<span
          ><router-link :to="{ name: 'contact' }">CONTACT ?</router-link></span
        >
      </h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: #e8c3ba;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
h1 {
  color: #6e5794;
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 7px;
  cursor: pointer;
}
h1 span {
  transition: 0.5s linear;
}
h1:hover span:nth-child(1) {
  margin-right: 5px;
}
h1:hover span:nth-child(1):after {
  content: "'";
}
h1:hover span:nth-child(2) {
  margin-left: 30px;
}
h1:hover span {
  color: #B7AEC3;
  text-shadow: 0 0 10px #B7AEC3, 0 0 20px #B7AEC3, 0 0 40px #B7AEC3;
}
</style>
