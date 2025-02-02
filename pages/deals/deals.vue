<template>
	<div class="deals">
		<TableHeader :title="`deals`" :total="deals.length" :sortOptions="dealSortOptions" />

		<TableColumns :columns="dealOption" :ImageUrl="ImageUrl" />

		<div v-if="deals.length > 0">
			<div v-for="(deal, index) in deals" :key="index">
				<DealItem :item="deal" />
			</div>
		</div>
		<div class="deals__not-found" v-else>
			<img src="@/assets/icons/DealNotFound.svg" alt="">
			<p>No deals found.</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, provide } from 'vue';
import { $fetch } from "ofetch";
import IconUrl from "@/assets/icons/Icon.svg";
import type { Deal } from "~/types/deal";
import { useEntityLength } from "~/store/EntityLength";
const ImageUrl = IconUrl;

const dealsLength = useEntityLength();

const deals = ref<Deal[]>([]);

const dealSortOptions = [
	"Price: Low to high",
	"Price: High to low",
	"Date: Old to new",
	"Date: New to old",
	"Status: In Progress",
	"Status: Completed",
];

const dealOption = ["Name", "Area", "Appointment Date", "roomAccess", "Price", "Status", "Edit"];

const fetchDeals = async () => {
	try {
		const res = await $fetch<Deal[]>("/api/deals");
		deals.value = res || [];

		dealsLength.setDealsLength(deals.value.length);
	} catch (e) {
		console.log("Ошибка пр загрузке сделок:", e);
	}
};

provide("deals", deals);
onMounted(fetchDeals);
</script>

<style lang="scss">
.deals{
	padding: 34px 24px 24px;
	display: flex;
	flex-direction: column;
	height: 100%;

	.deals__not-found {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 15px;
	height: 100%;

	img{
		height: 50px;
		width: 50px;
	}

	p{
		font-size: 50px;
		color: #7e92a2;
		font-weight: 400;
	}
	
}
}

</style>
