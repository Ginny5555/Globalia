<template>
  <MainLayout>
    <div class="settings">
      <div class="searchline">
        <SearchLine></SearchLine>
      </div>
      <div class="settings-blocks">
        <SettingsDrop/>
<SettingsFields/>

      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import SettingsFields from "@/components/ui/SettingsFields.vue";
import SettingsDrop from "@/components/ui/SettingsDrop.vue";
import SearchLine from "@/components/ui/SearchLine.vue";

import MainLayout from "@/layout/MainLayout.vue";
</script>

<style  lang="scss">
@import "../assets/style/style.scss";

.settings {
  margin: 49px 20px 0 20px;

  & input {
    width: 470px;
    height: 58px;
  }
  &-blocks {
    margin-top: 43px;
    @include flex-between;
    &__drop {
      width: 241px;
      height: 273px;
    }
    &__fields {
      padding: 50px 44px;
      width: 587px;
      height: 719px;
    }
  }
  &-buttons {
    @include flex-between;
    margin-top: 35px;
  }
}
.personal {
  margin-bottom: 50px;
  &-title {
    margin-bottom: 21px;
    color: $dark-text;

    font-size: 20px;
    font-weight: 700;
  }
  &-fields {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
.credentials {
  padding-top: 39px;
  border-top: 1px solid rgba(21, 19, 61, 0.16);
  &-title {
    color: $dark-text;
    margin-bottom: 21px;
    font-size: 20px;
    font-weight: 700;
  }
  &-fields {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
.remove {
  width: 227px;
  height: 57px;
  padding: 0 30px;
  background: $red-button;
  box-shadow: 0px 4px 6px 0px rgba(163, 161, 255, 0.16);
  @include flex-between;
  align-items: center;
}
.save {
  width: 210px;
  height: 57px;
  box-shadow: 0px 4px 6px 0px rgba(163, 161, 255, 0.16);
  @include flex-between;
  align-items: center;
  padding: 0 30px;
}
.drag {
  padding: 33px;
  @include flex-between;
  flex-direction: column;
  align-items: center;
  &-drop {
    width: 123px;
    height: 123px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background-color: $purple-bg;
    @include center-align;
  }
  &-link {
    color: $dark-text;
    text-decoration: none;
    font-size: 14px;
    font-weight: 700;
  }
  &-com {
    color: $purple-text;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 2.6px;
  }
}
</style>
