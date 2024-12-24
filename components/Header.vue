<template>
  <header class="header">
    <nuxt-link to="/">
      <div class="header__logo">
      <img src="@/assets/icons/Logo.svg" alt="" />
    </div>
    </nuxt-link>
  
    <div>
      <SectionTitle :title="'Dashboard'" class="header__title"/>
    </div>
    <div class="header__actions">
      <div class="header__add">
      <UIButton>Add New</UIButton>
    </div>
    <div class="header__search">
      <img src="@/assets/icons/Search.svg" alt="" />
    </div>
    <div class="header__avatar">
      <img src="@/assets/icons/Avatar.svg" alt="Avatar" />
    </div>
    </div>
  
  </header>
</template>

<script></script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  padding: 0px 24px 0px 22px;
  border-bottom: 1px #e6e9f0 solid;


  .header__title{
    margin-left: 24px;

  
  }

  .header__logo{
    display: flex; 
  align-items: center;
  justify-content: center;
  width: 69px; 
  height: 68.5px; 
  border-right: 1px solid #e6e9f0; 
  padding-right: 20px;
  cursor: pointer;
  }

  .header__actions{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: auto; 
  
  }

  .header__search{
    background-color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border:1px #e6e9f0 solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }

.header__avatar{

  img{
    border-radius: 100%;
  }
}

}
</style>
