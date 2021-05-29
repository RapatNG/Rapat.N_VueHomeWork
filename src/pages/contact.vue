<template>
  <div class="container text-center">
    <div style="text-align: center">
      <h1>
        <div class="wrapper hidden-md hidden-lg" style="text-align: center">
          <div class="typing-demo" style="color: #6e5794">Contact Zone</div>
        </div>
      </h1>
    </div>
    <div style="text-align: center">
      <img src="@/assets/pngtree-email-icon-design-png-image_2413695.png" />
      <p style="color: #6e5794">
        <a href="mailto:na.rapat_st@tni.ac.th" style="color: #6e5794">
          Email :
          {{ Email }}
        </a>
      </p>
      <p style="color: #6e5794">Phone : {{ Phone }}</p>
      <p style="color: #6e5794">Address : {{ Address }}</p>
    </div>
  </div>
  <div class="row">
    <div class="column" style="text-align: right">
      <router-link :to="{ name: 'main' }"
        ><img src="@/assets/PRO.png" style="width: 40px" title="Profile"
      /></router-link>
    </div>
    <div class="column" style="text-align: left">
      <router-link :to="{ name: 'home' }"
        ><img src="@/assets/555.png" style="width: 40px" title="Home"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    Email: "na.rapat_st@tni.ac.th",
    Phone: "095-252-9161",
    Address: "Suwinthawong Rd., Lam Phak Chi, Nong Chok, Bangkok, 10530",
  }),
};
</script>

<style>
textus {
  color: white;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-demo {
  width: 15.25ch;
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
