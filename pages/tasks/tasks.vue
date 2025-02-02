<template>
	<div class="tasks">
		<TableHeader :total="tasks.length" :title="`tasks`" :sortOptions="dealSortOptions" />

		<TasksOption :option="option" />
		<div v-if="tasks.length > 0">
			<TaskItem v-for="task in tasks" :key="task.id" :task="task" />
		</div>
		<div class="task__not-found" v-else>
			<img src="@/assets/icons/TaskNotFound.svg" alt="">
			<p>No task found.</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, ref, provide } from "vue";
import { $fetch } from "ofetch";
import type { Task } from "~/types/tasks.d.ts";
const option = ["Due Date", "Task", "Edit"];
const dealSortOptions = ["Due Date", "Task Name"];

const tasks = ref<Task[]>([])

const fetchTasks = async () => {
	try {
		const res = await $fetch<Task[]>("/api/tasks");
		tasks.value = res || [];
	} catch (e) {
		console.log("Ошибка при загрузке задач:", e);
	}
};

provide('tasks', tasks)
onMounted(fetchTasks);
</script>

<style lang="scss">
.tasks {
	padding: 34px 24px 24px;
	display: flex;
	flex-direction: column;
	height: 100%;

	.task__not-found {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 15px;
		height: 100%;

		img {
			height: 50px;
			width: 50px;
		}

		p {
			font-size: 50px;
			color: #7e92a2;
			font-weight: 400;
		}

	}
}
</style>
