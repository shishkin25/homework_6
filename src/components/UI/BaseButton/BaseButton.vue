<template>  
    <button class="button" 
        @click="$emit('click')"
        :class="{'button_primary': styleIsPrimary,
                 'button_secondary': styleIsSecondary,
                 'padding-if-svg': onlySvg,
                 'padding-if-text-and-svg': both}"
    >

        <template v-if="both">
            <div class="button__name button__name_mr">{{buttonName}}</div>
            <div class="button__svg" :class="{'button__svg_grayArrow': styleIsSecondary && svgIsArrow}">
                <svg-icon
                    :svgName="svgName"
                    :svgSize="svgSize"
                />
            </div>
        </template>
        <template v-else-if="onlySvg">
            <div class="button__svg">
                <svg-icon
                    :svgName="svgName"
                    :svgSize="svgSize"
                />
            </div>
        </template>
        <template v-else>
            <div class="button__name">{{buttonName}}</div>
        </template>

    </button>
</template>

<script>
export default {
    name: 'base-button',
    props: {
        buttonName: {
            type: String,
            default: () => ''
        },
        svgName: {
            type: String, 
            default: () => ''
        },
        svgSize: {
            type: Object, 
            default: () => {return {width: 24, height: 24}}
        },
        buttonStyle: {
            type: String, 
            default: () => 'primary',
            validator: function (value) {
                return ['primary', 'secondary'].includes(value);
            }
        }
    },
    computed: {
        both() {
            return this.buttonName && this.svgName
        },
        onlySvg() {
            return !this.buttonName && this.svgName
        }, 
        styleIsPrimary() {
            return this.buttonStyle === 'primary';
        },
        styleIsSecondary() {
            return this.buttonStyle === 'secondary';
        },
        svgIsArrow() {
            return this.svgName == 'arrow-up' || this.svgName == 'arrow-down'
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/UI/BaseButton/index.scss';
.padding-if-svg {
    padding: 9px;
}

.padding-if-text-and-svg {
    padding: 9px 8px 9px 16px;
}
</style>