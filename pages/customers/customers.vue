<template>
	<div class="customers">
		<TableHeader :title="`customers`" :total="customers.length" :sortOptions="customerSortOptions" />

		<TableColumns :columns="customerOptions" :ImageUrl="ImageUrl"/>

		<div v-if="customers.length > 0">
			<div v-for="customer in customers" :key="customer.id">
			<CustomerItem :item="customer" />
		</div>
		</div>
		<div class="customer__not-found" v-else>
			<img src="@/assets/icons/CustomerNotFound.svg" alt="">
			<p>No customer found.</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, onMounted, provide } from "vue";
	import IconUrl from "@/assets/icons/User-octagon.svg";
	import type { Customer } from "~/types/customer";
	import { $fetch } from "ofetch";
	import { useEntityLength } from "~/store/EntityLength";

	const ImageUrl = IconUrl;
	const customers = ref<Customer[]>([]);

	const customerLength = useEntityLength();

	const customerSortOptions = ["Name", "Date Created", "Email"];

	const customerOptions = ["Name", "Email", "Phone", "Address", "Edit"];


	const fetchCustomers = async () => {
		try {
			const res = await $fetch<Customer[]>("/api/customers");
			customers.value = res || [];

			customerLength.setCustomerLength(customers.value.length);
		} catch (e) {
			console.log("Ошибка при загрузке заказчика:", e);
		}
	};

	provide("customers", customers);
	onMounted(fetchCustomers);
</script>

<style lang="scss">
.customers{
	padding: 34px 24px 24px;
	display: flex;
	flex-direction: column;
	height: 100%;

	.customer__not-found {
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