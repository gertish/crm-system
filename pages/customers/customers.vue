<template>
    <BaseTable
      :title="`customers`"
      :total="customers.length"
      :sortOptions="customerSortOptions"
      :rows="customers"
      :columns="columns"
      :ImageUrl="ImageUrl"
    >
    </BaseTable>
    
  </template>
  
  <script lang="ts" setup>
import type { Mix } from '~/types/Mix.d.ts';
import IconUrl from '@/assets/icons/User-octagon.svg'

const ImageUrl = IconUrl;
  
  const customerSortOptions = ["Name", "Date Created", "Email"];
  const customers: Mix[] = [
    {
      name: "Deanna Annis",
      email: "deannannis@gmail.com",
      phone: "999-999-9999",
      address: "475 Spruce Drive, Pittsburgh, PA",
    },
  ];

  const columns = [
    'Name',
    'Email',
    'Phone',
    'Address',
    'Edit'
  ]
  

  </script>
  
  <style lang="scss" scoped>

  </style>
  