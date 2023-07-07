<template>
    <div class="textarea-item">
        <textarea type="text" class="textarea-item__textarea"
            :class="{'reset-styles': inputForSelect}"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            v-model="value"
            @input="$emit('textarea-change', value)"
        />
        <div v-if="haveSvg" 
            class="textarea-item__svg"
            :class="{'textarea-item__svg_gray': svgIsArrow}"
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
    name: 'base-textarea',
    props: {
        valueFromParent: {
            type: String
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
            value: this.valueFromParent || ''
        }
    }

}
</script>

<style lang="scss" scoped>
@import '@/components/UI/BaseTextarea/index.scss';
</style>