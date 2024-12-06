<template>
	<v-app>
		<v-app-bar
			app
		>
			<v-app-bar-nav-icon>
				<Icons
					icon="MENU"
					class="h-6 w-6"
				/>
			</v-app-bar-nav-icon>
			<div class="ml-auto mr-4 cursor-pointer">
				<v-menu location="bottom">
					<!-- <template v-slot:activator="{ props }">
						<v-avatar
							v-bind="props"
							:image="appStore.adminData.avatarUrl"
						></v-avatar>
					</template> -->
				</v-menu>
			</div>
		</v-app-bar>

		<v-main>
			<slot></slot>
		</v-main>
	</v-app>
</template>

<script setup lang="ts">
	import { Icons } from '@/shared';
</script>
