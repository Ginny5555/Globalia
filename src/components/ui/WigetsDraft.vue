<template>
 <div class="wigets-draft white-box">
        <div class="wigets-draft__title">
          <h3>Quick Draft</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12.4445 19.6875H20.9445M14.4443 5.68747L5.44587 14.6859C4.78722 15.3446 4.26719 16.1441 4.10888 17.062C3.94903 17.9888 3.89583 19.139 4.44432 19.6875C4.99281 20.236 6.14299 20.1828 7.0698 20.0229C7.98772 19.8646 8.78722 19.3446 9.44587 18.6859L18.4443 9.68747M14.4443 5.68747C14.4443 5.68747 17.4443 2.68747 19.4443 4.68747C21.4443 6.68747 18.4443 9.68747 18.4443 9.68747M14.4443 5.68747L18.4443 9.68747"
              stroke="#15133D"
              stroke-width="2.1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="wigets-draft__textarea">
          <div>
            <CustomTextarea
              v-model="inputValue"
              id="draft"
              placeholder="Write something..."
            />
          </div>
        </div>
        <CustomButton>
          <template #text>continue</template>
        </CustomButton>
      </div>
</template>
<script setup>
import {ref} from "vue";
import CustomTextarea from "@/components/ui/CustomTextarea.vue";
import CustomButton from "@/components/ui/CustomButton.vue";
const inputValue = ref("");
</script>
<style lang="scss" scoped>
@import '../../assets/style/style.scss';

</style>