<template>
  <div class="table-row" :class="gridStyle">
   
    <img src="@/assets/icons/DefaultImg.svg" alt="" class="table-row__icon" />

   
    <div v-for="(value, key) in row" :key="key" class="table-row__cell">

      <div v-if="key === 'status'">
        <button class="status-button">
          {{ value }}
        </button>
      </div>
      
      <template v-else>
        <slot name="cell" :row="value" >
          {{ value }}
        </slot>
      </template>
    </div>
    
    
    <img src="@/assets/icons/Addition.svg" alt="Addition Icon" class="table-row__icon" />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
const {columns} = defineProps({row: { type: Object, required: true }, columns:{type:Array,required:true}});

const gridStyle = computed(() => `columns-${columns.length + 2}`);
</script>

<style lang="scss" scoped>
.table-row {
  display: grid;
  // grid-template-columns: 0.24fr 2fr 0.46fr 0.95fr 0.36fr 0.7fr 0fr;
  align-items: center;
  border-top: 1px solid #e9ebf0;
  color: #092c4c;
  padding: 14px 24px 14px 12px;


  .status-button{
    background-color: #ececfe;
    padding: 14px 24px 14px 12px;
    border:none;
    border-radius:100px;
    color: #514ef3;
  }

  //page Customers
  &.columns-7 {
    grid-template-columns: 0.35fr 2fr 1.9fr 1.36fr 2.3fr 0fr 0fr;
  }

  //page Deals
  &.columns-8 {
    grid-template-columns: 0.24fr 2fr 0.5fr 1fr 0.57fr 0.69fr 0fr;
  }

  }



</style>
