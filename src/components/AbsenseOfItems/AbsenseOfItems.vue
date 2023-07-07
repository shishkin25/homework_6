<template>
    <section class="absense-of-items">
        <div class="absense-of-items__content-wrapper">
            <div class="absense-of-items__text absense-of-items__text_mb">{{text}}</div>
            <base-button
                :buttonName="'Добавить'"
            />
        </div>
    </section>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton/BaseButton.vue'
export default {
    props: {
        text: {
            type: String,
            required: true
        }
    },
    components: {
        BaseButton
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/AbsenseOfItems/index.scss';
</style>