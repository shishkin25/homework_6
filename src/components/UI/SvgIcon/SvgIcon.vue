<template>
    <svg :style="svgSizeStyles">
        <use :xlink:href="'#' + svgName"/>
    </svg>
</template>

<script>
export default {
    name: 'svg-icon',
    props: {
        svgName:{
            type: String,
            required: true
        },
        svgSize: {
            type: Object,
            default: () => {return {width: 24, height: 24}}
        }
    }, 
    computed: {
        svgSizeStyles() {
            return {
                width: this.svgSize.width + 'px',
                height: this.svgSize.height + 'px'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/UI/SvgIcon/index.scss';
</style>