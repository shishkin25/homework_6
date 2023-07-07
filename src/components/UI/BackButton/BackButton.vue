<template>  
    <button class="button button_secondary special-padding" @click="click">
        <svg-icon
            :svgName="'arrow-left'"
        />
        <div class="button__name button__name_ml">{{buttonName}}</div>
    </button>
</template>

<script>
export default {
    name: 'back-button', 
    props: {
        buttonName: {
            type: String,
            required: true
        }
    },
    methods: {
        click() {
            this.$emit('click');
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/scss/blocks/button.scss';
.special-padding {
    padding: 12px 16px 12px 8px;
}
</style>