<template>
    <div class="input-item">
        <input type="text" class="input-item__input"
            :class="{'reset-styles': inputForSelect}"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            v-model="value"
            @input="$emit('input-change', value)"
        >
        <div v-if="haveSvg" 
            class="input-item__svg"
            :class="{'input-item__svg_gray': svgIsArrow}"
        >
            <svg-icon
                :svgName="svgName"
                :svgSize="svgSize"
            />
        </div>
    </div>
</template>
 


<script>
export default {
    name: 'base-input',
    props: {
        valueFromParent: {
            type: String, 
            default: () => ''
        },
        placeholder: {
            type: String, 
            default: () => 'Введите значение'
        },
        readonly: {
            type: Boolean,
            default: () => false
        },
        disabled: {
            type: Boolean,
            default: () => false
        },
        inputForSelect: {
            type: Boolean,
            default: () => false
        },
        svgName:{
            type: String,
            default: () => ''
        },
        svgSize: {
            type: Object,
            default: () => {return {width: 24, height: 24}}
        }
    }, 
    computed: {
        haveSvg() {
            return this.svgName !== ''
        },
        svgIsArrow() {
            return this.svgName == 'arrow-down' || this.svgName == 'arrow-up'
        }
    },
    data() {
        return {
            value: this.valueFromParent
        }
    },
    watch: {
        valueFromParent(newVal) {
            this.value = newVal;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/UI/BaseInput/index.scss';
</style>