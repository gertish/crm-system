<template>
    <div class="table-row" :class="gridStyle">
        <div class="table-row__avatar-cell">
            <slot name="avatar" :src="filterRow.avatar">
                <img :src="filterRow.avatar" alt="" />
            </slot>
        </div>
        <div v-for="(value, key) in filterRow" :key="key" class="table-row__cell">
            <template v-if="key === 'streetAddress'">
                {{ value }}
            </template>
            <template v-if="key === 'roomArea'">
                {{ value }}M²
            </template>
            <template v-if="key === 'appointmentDate'">
				{{ formateDate(value) }}
            </template>
			<template v-if="key === 'price'">
				${{ value }}
			</template>
            <template v-if="key === 'zipCode'">
				{{ value }}
            </template>
            <template v-if="key === 'email'">
				{{ value }}
            </template>
			<template v-if="key === 'phone'">
				{{ value }}
			</template>
			<template v-if="key === 'state'">
				{{ value }}
			</template>
			<template v-if="key === 'lastName'">
				{{ value }}
			</template>
			<template v-if="key === 'firstName'">
				{{ value }}
			</template>
			<template v-if="key === 'city'">
				{{ value }}
			</template>
			<template v-if="key === 'numberOfPeople'">
				{{ value }}
			</template>
			<template v-if="key === 'specialInstructions'">
				{{ value }}
			</template>
			<template v-if="key === 'roomAccess'">
				{{ value }}
			</template>
            <template v-if="key === 'status' && isDealRoute">
                <button class="status-button">
                    {{ value }}
                </button>
            </template>
        </div>
        <nuxt-link v-if="shouldShowIcon" :to="IconRoute">
            <img src="@/assets/icons/Addition.svg" alt="Addition Icon" class="table-row__icon" />
        </nuxt-link>
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { formateDate } from "~/utils/formatDate";
import type { Customer } from "~/types/customer.d.ts";
import type { Deal } from "~/types/deal.d.ts";
const { columns, row } = defineProps<{
	row: Customer | Deal;
	columns: string[];
}>();
const route = useRoute();

const isCustomerRoute = computed(() => route.path === '/customers/customers')
const isDealsRoute = computed(() => route.path === '/deals/deals')

const shouldShowIcon = computed(() => {
	return isCustomerRoute.value || isDealsRoute.value
})

const IconRoute = computed(() => {
	if (isCustomerRoute.value) {
		const customerRow = row as Customer;
		return `/customerDetails/${customerRow.id}`
	} else if (isDealsRoute.value) {
		const dealRow = row as Deal;
		return `/EditDeals/${dealRow.id}`
	}
})

const gridStyle = computed(() => `rows-${columns.length + 2}`);

const isDealRoute = computed(() => route.path === "/deals/deals");

const idCustomerRow = computed(() => 'firstName' in row) 


const filterRow: Record<string, any> = computed(() => {
	const flatRow = {...row};
if('customer' in flatRow){
Object.assign(flatRow, flatRow.customer);
delete flatRow.customer
}

return flatRow
});


</script>

<style lang="scss">
.table-row {
	display: grid;
	// grid-template-columns: 0.24fr 2fr 0.46fr 0.95fr 0.36fr 0.7fr 0fr;
	align-items: center;
	border-top: 1px solid #e9ebf0;
	color: #092c4c;
	padding: 14px 24px 14px 12px;

	.table-row__avatar-cell {
		img {
			height: 44px;
			width: 44px;
			border-radius: 100px;
		}
	}

	.status-button {
		background-color: #ececfe;
		padding: 14px 24px 14px 12px;
		border: none;
		border-radius: 100px;
		color: #514ef3;
	}

	//page Customers
	&.rows-7 {
		grid-template-columns: 0.23fr 0.3fr 1.3fr 1.36fr 2.1fr 0fr;
	}

	//page Deals
	&.rows-8 {
		grid-template-columns: 0.24fr 2fr 0.5fr 1fr 0.57fr 0.69fr 0fr;
	}
}
</style>
