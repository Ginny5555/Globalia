<template>
 <button
   ref="nextButton"
    type="button"
    class="next mx-auto"
    @click="onButtonClick">
  <slot name="text" />

    <slot  name="image" />


 </button>
</template>
<script>
import { defineComponent} from 'vue';

export default defineComponent({
  name: 'CustomButton',
  emits: ['click'],
  setup(props, { emit }) {
    const onButtonClick = () => {
      emit('click');
    };

    return {
      onButtonClick
    };
  }
});
</script>
<style lang="scss">
$white :#FFF;
$purple : #5644FC;
button {
  border-radius: 40px;
background-color: $purple;
border:none;
color:$white;
text-align: center;
font-size: 10px;
font-weight: 700;
letter-spacing: 2.3px;
text-transform: uppercase;
&:hover {
opacity: .3;
}
}
</style>