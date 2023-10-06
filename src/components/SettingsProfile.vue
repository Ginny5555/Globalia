<template>
  <MainLayout>
    <div class="settings">
      <div class="searchline">
        <SearchLine></SearchLine>
      </div>
      <div class="settings-blocks">
        <ArticleBody></ArticleBody>
        <div>
        <SettingsDrop title="Article Cover" class="drop" />
        <div class="preview white-box">
          <div class="preview-title">Cover Preview</div>
          <img src="@/assets/pexels.png" alt="">
        </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup >
import SettingsDrop from "@/components/ui/SettingsDrop.vue";
import SearchLine from "@/components/ui/SearchLine.vue";
import ArticleBody from "@/components/ui/ArticleBody.vue";
import MainLayout from "@/layout/MainLayout.vue";
</script>

<style  lang="scss">
@import "../assets/style/style.scss";

.drop {
  width: 239px;
  height: 352px;
  & h3 {
    font-size: 20px;
  }
}
.preview {
  width: 239px;
height: 343px;
padding: 27px 21px 43px;
margin-top:24px;
@include flex-column;
align-items:center;
justify-content: space-between;
&-title {

color: $dark-text;

font-size: 20px;

font-weight: 700;

}
& img {
  border-radius:10px;
  width: 203px;
height: 215px;
}
}
</style>
