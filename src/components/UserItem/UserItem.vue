<template>
  <section class="user-item">
        <div class="user-item__wrapper">
            <div class="user-item__content">
                <div class="avatar user-item__avatar">
                    <img :src="AvatarImg" alt="avatar">
                </div>
                <div class="user-item__name">Иванов Иван Иванович</div>
            </div>
            <status-item class="user-item__status"
                :statusName="'Не активен'"  
            />

            <dropdown-button class="user-item__options"
                svgName='dots'
                buttonStyle='secondary'
                :items="[{id:1, text: 'Редактировать'}, {id:2, text:'Удалить'}]"
                :widthListDueContent="true"
            />
        </div>
    </section>
</template>

<script>
import AvatarImg from '@/assets/images/avatar.png'
import StatusItem from '@/components/UI/StatusItem/StatusItem.vue'

export default {
    data() {
        return {
            AvatarImg
        }
    }, 
    components: {
        StatusItem
    }
}
</script>

<style lang="scss">
@import '@/scss/base/variables.scss';
@import '@/scss/blocks/avatar.scss';

.user-item {
	margin: 0 0 10px 0;
	&__wrapper {
        height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px 16px;
		border-bottom: 1px solid $border-active;
	}
	& &__options {
		display: none;
		margin: 0 0 0 16px;
	}
	&:hover .user-item__options {
		display: inline-block;
	}
	&__content {
		display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 8px 16px;		
	}
    &__avatar {
        margin: 0 8px 0 0;
    }
    &__status {
        margin: 0 0 0 16px;
        margin-right: auto;
    }
    &__name {
        font-weight: 400;
        font-size: $fz-default;
    }
}

</style>