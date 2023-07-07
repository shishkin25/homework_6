<template>
  <div @click="toggleActiveState" class="dropdown-button">
    <base-button
        :buttonName="buttonName"
        :svgName="svgToShow"
        :svgSize="svgSize"
        :buttonStyle="buttonStyle"
        :class="{'button_primary_active': isActiveForPrimary, 'button_secondary_active': isActiveForSecondary}"
    />
    <dropdown-list v-show="isActive"
        :items="items"
        :widthDueContent="widthListDueContent"
    />
  </div>
</template>

<script>
export default {
    name: 'dropdown-button', 
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
        items: {
            type: Array,
            default: () => []
        },
        buttonStyle: {
            type: String, 
            default: () => 'primary',
            validator: function (value) {
                return ['primary', 'secondary'].includes(value);
            }
        },
        widthListDueContent: {
            type: Boolean, 
            default: () => false
        }
    }, 
    data() {
        return {
            isActive: false
        }
    }, 
    methods: {
        toggleActiveState() {
            this.isActive = !this.isActive;
        }
    }, 
    computed: {
        svgToShow() {
            if (this.svgName === 'arrow-down') {
                if (this.isActive) {
                    return 'arrow-up'
                } else {
                    return this.svgName
                }
            } else {
                return this.svgName
            }
        }, 
        isActiveForPrimary() {
            return this.isActive && this.buttonStyle === 'primary'
        }, 
        isActiveForSecondary() {
            return this.isActive && this.buttonStyle === 'secondary'
        }
    }

}
</script>

<style lang='scss'>
@import '@/components/UI/DropdownButton/index.scss';
</style>