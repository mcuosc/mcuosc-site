<!-- @format -->

<script>
export default {
  name: 'App',
  data() {
    return {
      show_title: false,
      show_about: {
        '2019': false,
        '2020': false,
      },
      fadeInElements: [],
    }
  },
  mounted() {
    setTimeout(() => {
      this.show_title = true
    }, 500)
  },
  methods: {
    changeAboutShow(year) {
      for (let key in this.show_about) {
        if (key === year) this.show_about[key] = true
        else this.show_about[key] = false
      }
    },

    handleScroll() {
      for (var i = 0; i < this.fadeInElements.length; i++) {
        var elem = this.fadeInElements[i]
        if (this.isElemVisible(elem)) {
          elem.style.opacity = '1'
          elem.style.transform = 'translateX(0)'
          elem.style.transform = 'translateY(0)'
          this.fadeInElements.splice(i, 1) // only allow it to run once
        }
      }
    },
    isElemVisible(el) {
      var rect = el.getBoundingClientRect()
      var elemTop = rect.top - 100 // 200 = buffer
      var elemBottom = rect.bottom
      return elemTop < window.innerHeight && elemBottom >= 0
    },
  },
}
</script>

<template>
  <!-- <div class="absolute w-screen h-16 border-4 border-gray-400 rounded-xl right-8 top-8"> -->
  <!-- <div class="flex flex-col items-center p-4 space-y-4">
      <div class="p-2 bg-slate-700 rounded-xl">1</div>
      <div class="p-2 bg-slate-700 rounded-xl">1</div>
      <div class="p-2 bg-slate-700 rounded-xl">1</div>
    </div> -->
  <!-- </div> -->

  <div
    :class="{ 'opacity-0 -translate-y-60': !show_title }"
    class="absolute z-10 top-8 right-4 bg-gray-400 rounded-2xl py-1 px-2 duration-[1.5s]"
  >
    <a href="https://github.com/mcuosc" target="_blank" class="mx-2">
      <i
        class="fab fa-github text-5xl md:opacity-60 hover:opacity-100 duration-500"
      ></i
    ></a>
    <a href="https://www.youtube.com/channel/UC974rN9upz7IJT4s2l80npQ" target="_blank" class="mx-2">
      <i
        class="fab fa-youtube text-[2.5rem] md:opacity-60 hover:opacity-100 duration-500"
      ></i
    ></a>
    <!-- <a href="#" class="mx-2">
      <i
        class="fab fa-line text-5xl md:opacity-60 hover:opacity-100 duration-500"
      ></i
    ></a> -->

    <a href="https://www.facebook.com/mcuosc/" target="_blank" class="mx-2">
      <i
        class="fab fa-facebook text-5xl md:opacity-60 hover:opacity-100 duration-500"
      ></i
    ></a>
    <a href="https://www.instagram.com/mcuosc/" target="_blank" class="mx-2">
      <i
        class="fab fa-instagram text-5xl md:opacity-60 hover:opacity-100 duration-500"
      ></i
    ></a>
  </div>
  <!-- <div class="absolute w-24 h-12 top-8 left-36 bg-gray-400 rounded-3xl"></div> -->

  <div id="bg">
    <div
      class="absolute w-64 h-64 -left-20 bg-gray-300/10 md:bg-gray-300/30 rounded-xl rotate-45"
    ></div>
    <div
      class="absolute w-64 h-64 -bottom-96 -left-36 bg-gray-300/10 md:bg-gray-300/30 rounded-full rotate-45"
    ></div>
    <div
      class="absolute w-full border-2 border-gray-400 top-4 bg-gray-400 rounded-3xl"
    ></div>

    <div
      class="absolute w-64 h-24 bottom-0 -right-24 bg-gray-300/10 md:bg-gray-300/30 rounded-xl rotate-45"
      style=""
    ></div>
  </div>

  <!-- <div class="absolute w-24 h-12 top-8 right-4 bg-gray-400 rounded-3xl"></div> -->

  <div
    class="h-screen w-screen flex md:flex-row flex-col items-center justify-center md:space-x-32"
  >
    <div
      class="relative shadow-2xl duration-[2s] mt-60 md:mt-0"
      :class="{ 'opacity-0 -translate-x-60': !show_title }"
    >
      <div
        class="absolute scale-50 md:scale-100 -right-8 -bottom-10 flex-col space-y-3 font-mono tracking-widest border-8 p-12 border-gray-400 rounded rotate-45"
      ></div>
      <div
        class="flex flex-col space-y-3 font-mono tracking-widest border-8 p-12 border-gray-400 rounded-lg"
      >
        <div class="text-6xl md:text-8xl text-[#77b55a] font-bold">MCUOSC</div>
        <div class="text-4xl md:text-6xl text-[#77b55a]/80 font">
          銘傳開源社
        </div>
        <div class="line-through text-gray-500 font-bold text-lg">
          不是賣雞排的喔
        </div>
      </div>
    </div>
    <div
      class="duration-[2s] md:p-0 p-8"
      :class="{ 'opacity-0 translate-x-60': !show_title }"
    >
      <div class="w-full flex flex-col pb-8">
        <!-- <img src="/logo.png" alt=""> -->
        <div class="font-bold text-gray-50">
          <div class="text-5xl md:text-6xl my-8">嗨，大家好</div>
          <div
            class="text-lg md:space-y-4 tracking-widest md:text-xl text-gray-200"
          >
            <div>你想了解最新的資訊技術嗎 ?</div>
            <div>大學除了讀書也想擁有自己的專案嗎 ?</div>
            <div>這裡聚集了一群對程式有熱情的人們</div>
            <div>一起學習程式、互相討論，歡迎加入我們 !</div>
          </div>
          <button
            class="p-2 px-4 w-fit rounded-lg bg-[#35741a] my-4 text-gray-100"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalCenteredScrollable"
          >
            加入我們
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex flex-col w-full items-center justify-center md:px-24 mb-48">
    <div class="text-4xl font-bold font-mono tracking-widest text-gray-100 self-start mb-12">關於我們</div>
    <div class="flex flex-row w-full md:px-24">
      <div class="flex flex-col bg-gray-400 rounded-xl text-gray-800 font-mono text-3xl ">
        <button @click="changeAboutShow('2019')" class="p-4 hover:bg-gray-500 duration-1000 rounded-xl">2019</button>
        <button @click="changeAboutShow('2020')" class="p-4 hover:bg-gray-500 duration-1000 rounded-xl">2020</button>
        <button  @click="changeAboutShow('2021')" class="p-4 hover:bg-gray-500 duration-1000 rounded-xl ">2021</button>
        <button  @click="changeAboutShow('2022')" class="p-4 hover:bg-gray-500 duration-1000 rounded-xl">2022</button> 
      </div>
      <div v-show="this.show_about['2019']">2019</div>
      <div v-show="this.show_about['2020']"> 2020</div>
      <div v-show="this.show_about['2021']"> 2021</div>
      <div v-show="this.show_about['2022']"> 2022</div>
    </div>
  </div>

  <div class="flex flex-col w-full items-center justify-center md:px-24 mb-48">
    <div class="text-4xl font-bold font-mono tracking-widest text-gray-100 self-start">過往社課</div>
    
  </div>

  <div class="flex flex-col w-full items-center justify-center md:px-24">
    <div class="text-4xl font-bold font-mono tracking-widest text-gray-100 self-start">MCU-up(銘傳金手指3.0)</div>
    <img class="w-6/12 mt-12 rounded-lg" src="https://www.fanlan.net/static/72ca3958d2941b1826561b25d799c40e/d5dc4/demo.webp" alt="">
  </div>

  <footer class="w-full h-36"></footer>
  <!-- <Navbar /> -->
  <!-- <router-view /> -->
  <div
    class="modal fade fixed z-20 top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    id="exampleModalCenteredScrollable"
    tabindex="-1"
    aria-labelledby="exampleModalCenteredScrollable"
    aria-modal="true"
    role="dialog"
  >
    <div
      class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none px-6"
    >
    <div class="relative bg-gray-800 border-4 border-gray-400 rounded-xl p-6 md">
        <button class="absolute top-3 right-5 text-gray-100 text-xl">✖</button>
        <div
          class="text-gray-200 font-bold tracking-widest select-none text-4xl mt-4 mb-8 text-center"
        >
          入社須知
        </div>
        <div class="text-gray-300 font-bold tracking-widest select-none mb-4">
          <div class="mb-2">不限學校、不限系別、不限性別。</div>
          <div>只要有一顆熱忱的心，我們都非常歡迎 !</div>
        </div>
        <div
          class="text-gray-200 font-bold tracking-widest select-none text-xl border-2 border-gray-400 rounded p-2 w-fit"
        >
          社課時間
        </div>
        <div
          class="text-gray-300 font-bold tracking-widest select-none p-3 mb-4"
        >
          <div class="mb-1">每週二 PM 6:30 - 8:30</div>
          <div>線上同步直播，也歡迎到 Youtube 和我們一起參與 !</div>
        </div>
        <div
          class="text-gray-200 font-bold tracking-widest select-none text-xl border-2 border-gray-400 rounded p-2 w-fit"
        >
          入社費用
        </div>
        <div class="text-gray-300 font-bold tracking-widest select-none p-3">
          <div class="mb-2">每學期 200 元，此收費會被用在</div>
          <div class="ml-4">
            <div>• 社團活動</div>
            <div>• 宣傳費</div>
            <div>• 社團網址</div>
          </div>
        </div>

        <div
          class="text-gray-300 font-bold tracking-widest select-none p-3 text-2xl"
        >
          更多資訊 可以透過右上角的社群連結直接聯繫我們喔 !
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-in-left {
  opacity: 0;
  transform: translateX(-500px);
  transition: all 1s ease-in-out;
}
</style>