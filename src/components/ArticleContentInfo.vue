<template>
  <div class="ArticleContentInfo">
    <div class="tags">{{tags()}}</div>
    <div class="info">
      <div class="time">{{listItems.time}}</div>
      <div class="view">{{viewCount()}} 人阅读</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleContentInfo",
  data() {
    return {
      listItems: this.$route.query
    };
  },
  methods: {
    viewCount() {
      return this.listItems.view;
    },
    tags() {
      let tags = [];
      tags = this.$route.query.tags;
      for (var i = 0; i <= this.listItems.tags.length; i++) {
        let tag = tags[i];
        return tag + " / " + tags[i + 1] + " / " + tags[i + 2];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ArticleContentInfo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #bcc2de;
  font-size: 13px;
  line-height: 25px;
  padding-bottom: 12px;
  margin-top: -24px;
  margin-bottom: 16px;
  border-bottom: 1px solid #e1e7ff;

  .info {
    display: flex;
    div {
      display: inline;

      &:first-child {
        margin-right: 24px;
      }
    }
  }
}

@media screen and (max-width: 414px){
  .ArticleContentInfo {
    flex-direction: column;

    .info {
      justify-content: space-between;
    }
  }
}
</style>
