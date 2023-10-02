<template>
 <button
   ref="nextButton"
    type="button"
    class="next mx-auto"
>
  <slot name="text" />

    <slot  name="image" />


 </button>
</template>
<script setup>

</script>
<style lang="scss">
@import '../../assets/style/style.scss';
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