<template>
  <div class="slider">

    <div v-for="image of images" :key="image" class="slide">
      <img :src="image" alt="">
    </div>

    <div class="text-block">
      <a href="#" class="text-block__circle circle">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
        >
          <path
              d="M10.8333 18.4167L16.25 13L10.8333 7.58333M22.75 13C22.75 18.3848 18.3848 22.75 13 22.75C7.61522 22.75 3.25 18.3848 3.25 13C3.25 7.61522 7.61522 3.25 13 3.25C18.3848 3.25 22.75 7.61522 22.75 13Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
      </a>
      <h1>{{ currentTitle }}</h1>
      <p>{{ currentText }}</p>
    </div>
    <div class="slider-author">
      <div class="slider-author__pic">
        <div class="slider-author__pic-circle">
          <img src="../../assets/julia.png" alt=""/>
        </div>
        <div class="slider-author__pic-name">By Julia Grey</div>
      </div>
      <div class="slider-author__buttons">
        <button class="prev" @click="prevSlide">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
          >
            <path
                d="M7 12L17 12M7 12L11 8M7 12L11 16"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="next" @click="nextSlide">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
          >
            <path
                d="M17 12L7 12M17 12L13 16M17 12L13 8"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import {computed, ref} from "vue";

export default {
  name: "CustomSlider",
  props: {
    images: Array,
    texts: Array,
    classname: String,
  },

  setup(props) {
    // Index of the current slide
    const currentSlideIndex = ref(0);

    // Computed property to get the current slide URL
    const currentSlide = computed(() => props.images[currentSlideIndex.value]);
    const currentText = computed(() => props.texts[currentSlideIndex.value]);

    // Array of text titles
    const textTitles = [
      "The Demise of Fashion",
      "The Demise of Fashion 2",
      "The Demise of Fashion 3",
    ];

    // Computed property to get the current text title
    const currentTitle = computed(() => textTitles[currentSlideIndex.value]);

    // Function to go to the previous slide
    function prevSlide() {
      currentSlideIndex.value =
          (currentSlideIndex.value - 1 + props.images.length) %
          props.images.length;
    }

    // Function to go to the next slide
    function nextSlide() {
      currentSlideIndex.value =
          (currentSlideIndex.value + 1) % props.images.length;
    }

    return {
      currentSlide,
      prevSlide,
      nextSlide,
      currentTitle,
      currentText,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/style.scss";

.text-block {
  position: absolute;
  top: 0;
  padding: 16px;

  &__circle {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    filter: drop-shadow(0px 4px 4px rgba(21, 19, 61, 0.26));
  }

  & h1 {
    color: $white;
    font-size: 20px;
    font-weight: 700;
  }

  & p {
    font-size: 12px;
    color: $white;
    font-weight: 400;
    width: 353px;
  }
}

button {
  background: #5644fc;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

img {
  max-width: 100%;
}

.slider {
  box-shadow: 0px 4px 4px 0px rgba(163, 161, 255, 0.16);

  &-author {
    position: absolute;
    display: flex;
    width: 414px;
    justify-content: space-between;
    top: 75%;
    box-sizing: border-box;
    align-items: center;
    padding: 0 16px;

    &__pic {
      display: flex;
      align-items: center;

      &-circle {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        margin-right: 12px;
      }

      &-name {
        color: $white;

        font-size: 12px;

        font-weight: 700;
      }
    }

    &__buttons {
    }
  }
}

.prev {
  border-radius: 40px 0 0 40px;
  padding: 0;
  width: 30px;
  box-shadow: 0px 4px 4px 0px rgba(48, 48, 48, 0.26);
}

.next {
  border-radius: 0 40px 40px 0;
  padding: 0;
  width: 30px;
  box-shadow: 0px 4px 4px 0px rgba(48, 48, 48, 0.26);
}
</style>
