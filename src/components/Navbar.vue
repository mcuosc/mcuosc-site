<template>
  <div class="relative w-full h-12 bg-gray-900"></div>
  <div class="fixed top-0 w-full h-12 bg-gray-900">
    <div class="flex justify-between items-center h-full px-8">
      <div class="font-mono text-2xl text-gray-200 tracking-widest">
        MCUOSC <span class="text-gray-400 text-lg">銘傳開源社</span>
      </div>
      <div class="flex flex-row items-center h-full text-gray-400 font-bold">
        <router-link to="/"> 首頁 </router-link>
        <div class="select-none mx-3 opacity-50">|</div>
        <router-link to="upMCU"> MCU-up </router-link>
        <div class="select-none mx-3 opacity-50">|</div>
        <router-link to="join"> 我要入社 </router-link>
        <div class="select-none mx-3 opacity-50">|</div>
        <router-link to="links"> 社團連結 </router-link>
        <div class="select-none mx-3 opacity-50">|</div>
        <router-link to="About"> 關於我們 </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>