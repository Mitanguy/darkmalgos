<template>
  <div class="about">
    <h1>This is an about page</h1>
      <TitlePage :title="titleAbout" :subtitle="subtitle"></TitlePage>
      <Button :name="titreButton" :classList="btnClass" :btnFunction="click" ></Button>
  </div>
</template>

<script>
  import TitlePage from "../components/TitlePage"
  import Button from "../components/Button"
  export default {
      components:{
          Button,
          TitlePage
      },
      data: function () {
          return {
              titleAbout:"ma page about est bien ",
              subtitle: "sous titre",
              titreButton:'about button',
              btnClass:"btn btn-red"
          }
      },
      methods: {
          click: function () {
              alert('click');
          }
      }

  }
</script>