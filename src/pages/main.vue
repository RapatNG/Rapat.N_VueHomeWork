<template>
  <div class="container text-center">
    <div>
      <h1>
        <div class="wrapper hidden-md hidden-lg" style="text-align: center">
          <div class="typing-demo" style="color: #6e5794">My Profile</div>
        </div>
      </h1>
    </div>
    <div class="row">
      <div class="column" style="text-align: right">
        <img src="@/assets/BamPic.jpg" height="250" />
      </div>
      <div class="column" style="text-align: left">
        <p style="color: #6e5794">Name : {{ Name }}</p>
        <p style="color: #6e5794">Nick name : {{ Nickname }}</p>
        <p style="color: #6e5794">Age : {{ Age }}</p>
        <p style="color: #6e5794">Phone : {{ Phone }}</p>
        <p style="color: #6e5794">Date of Birth : {{ DateofBirth }}</p>
        <p style="color: #6e5794">Skill : {{ Skill }}</p>
        <p style="color: #6e5794">Soft Skill : {{ Softskill }}</p>
      </div>
    </div>
    <div class="row">
      <div class="column" style="text-align: right">
        <router-link :to="{ name: 'contact' }"
          ><img src="@/assets/DSA.png" style="width: 45px" title="Contact"
        /></router-link>
      </div>
      <div class="column" style="text-align: left">
        <router-link :to="{ name: 'home' }"
          ><img src="@/assets/555.png" style="width: 40px" title="Home"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    Name: "Rapat Ngamvisitsin",
    Nickname: "Bam",
    Age: "21",
    Phone: "095-252-9161",
    DateofBirth: "01 Match,2000",
    Skill: "C#, HTML, PHP, Javascript",
    Softskill: "Self Learning, Teamwork",
  }),
};
</script>

<style>
body {
  background-color: #e8c3ba;
}
* {
  box-sizing: border-box;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-demo {
  width: 8.1ch;
  animation: typing 2s steps(22), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
