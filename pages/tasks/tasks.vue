<template>
  <div class="tasks">
    <TableHeader
      :total="tasks.length"
      :title="`tasks`"
      :sortOptions="dealSortOptions"
    />

    <TasksOption :option="option" />

    <TaskItem />

    <div class="base-table__load-more">
      <button>Load More</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const option = ["Due Date", "Task", "Edit"];

const tasks = [
  {
    id: 1,
    name: "Description goes here",
    dueDate: "14 Nov 2021",
    isOverdue: true,
  },
  {
    id: 2,
    name: "Web conference agenda",
    dueDate: "24 Dec 2021",
    isOverdue: true,
  },
  {
    id: 3,
    name: "Meeting with partners",
    dueDate: "24 Nov 2022",
    isOverdue: false,
  },
];

const dealSortOptions = ["Due Date", "Task Name"];
</script>

<style lang="scss" scoped>
.tasks {
  padding: 34px 24px 24px;

  .base-table__load-more{
    display: flex;
    justify-content: center;
    


    button {
  padding: 10px 29px;
  background-color: #fff;
  border-radius: 100px;
  color: #092c4c;
  font-weight: 600;
  border: none;
  cursor: pointer;
}
  }
}
</style>
