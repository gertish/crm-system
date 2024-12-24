<template>
  <BaseTable
    :title="`deals`"
    :total="deals.length"
    :sortOptions="dealSortOptions"
    :rows="deals"
    :columns="columns"
    :ImageUrl="ImageUrl"
  >
  </BaseTable>
</template>

<script lang="ts" setup>
import  { Status } from '~/types/deal.d.ts';
import type { Mix } from '~/types/mix.d.ts';
import IconUrl from '@/assets/icons/Icon.svg';

const ImageUrl = IconUrl;


const dealSortOptions = [
  'Price: Low to high',
  'Price: High to low',
  'Date: Old to new',
  'Date: New to old',
  'Status: In Progress',
  'Status: Closed'
];


const columns = [
    'Name',
    'Area',
    'Appointment Date',
    'Price',
    'Status',
    'Edit'
  ]

const deals: Mix[] = [
  {
    name: "475 Spruce Drive, Pittsburgh",
    area: "100 M²",
    appointmentDate: "Nov 14, 2021 07:00 AM",
    price: "$6000",
    status: Status.inProgress
  },
];
</script>
