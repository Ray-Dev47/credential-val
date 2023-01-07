<template>
  <div class="not-found">
    <svg viewBox="0 0 855 323" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.06"
        d="M0 261.233H149.646V316.037H212.671V261.233H251.338V208.408H212.671V4.26257H130.16L0 209.321V261.233ZM150.864 208.408H66.3739V205.972L148.428 76.1169H150.864V208.408Z"
        fill="#1D3A37"
      />
      <path
        opacity="0.06"
        d="M426.075 322.888C504.475 322.888 551.82 263.212 551.972 160.454C552.124 58.4578 504.171 0 426.075 0C347.827 0 300.33 58.3055 300.178 160.454C299.873 262.908 347.522 322.736 426.075 322.888ZM426.075 268.236C390.3 268.236 367.16 232.309 367.313 160.454C367.465 89.6657 390.452 54.043 426.075 54.043C461.545 54.043 484.685 89.6657 484.685 160.454C484.837 232.309 461.698 268.236 426.075 268.236Z"
        fill="#1D3A37"
      />
      <path
        opacity="0.06"
        d="M602.829 261.233H752.475V316.037H815.5V261.233H854.167V208.408H815.5V4.26257H732.989L602.829 209.321V261.233ZM753.693 208.408H669.203V205.972L751.257 76.1169H753.693V208.408Z"
        fill="#1D3A37"
      />
    </svg>

    <div class="page_not_found">
      <h4>Page not found</h4>
      <p>Sorry, we were unable to find that page</p>
      <router-link to="/" class="homelink">Go Back Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style >
.not-found {
  position: relative;
  padding: 50px;
  margin-top: 60px; 
}
.page_not_found {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    margin-top: -270px;
  }
 h4 {
      font-family: Museo Sans Rounded;
      font-style: normal;
      font-weight: 600;
      font-size: 48px;
      color: #1d3a37;
      text-align: center;
      margin-bottom: 10px;
    }
p {
      text-align: center;
      color: #374d4a;
      font-family: Museo Sans Rounded;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      margin-bottom: 20px;
    }
 .homelink {
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      background: #00554e;
      color: #e6fffd;
      font-family: Museo Sans Rounded;
      font-style: normal;
      font-weight: 500;
      width: 120px;
      font-size: 1.2rem;
      line-height: 1.4rem;
      border-radius: 0.2rem;
      padding: 1.8rem 1.6rem;
      transition: opacity 0.3s;
      
    }
.homelink:hover {
        opacity: 0.8;
      }
 svg {
    width: auto;
    height: auto;
  }
</style>
