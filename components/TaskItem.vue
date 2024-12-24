<template>
    <div class="task-item">
      <div class="task-item__info">
        <div class="task-item__indicator">
            <img src="@/assets/icons/Icon-Check.svg" alt="">
        </div>
    <p>14 Nov 2021</p>
    <p>Description goes here</p>
    <div class="task-actions">
      <img src="@/assets/icons/Addition.svg" alt="">
    </div>
  </div>
    </div>
  </template>
  
  <script lang="ts" setup>

  </script>
  
  <style lang="scss" scoped>
.task-item{
    border-top: 1px solid #e6e9f0; 
    display: flex;
    align-items: center;
    padding: 14px 24px 14px 12px;

    p{
      color: #092c4c;
    }

    .task-item__info{
        display: grid;
        align-items: center;
        grid-template-columns: 2.6fr 18fr 53fr 0fr;
    }
}
  </style>
  