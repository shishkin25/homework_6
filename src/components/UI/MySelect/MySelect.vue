<template>
  <div class="select" @click="toggleActive"
    :class="{'select_active': isActive}"
  >
    <base-input class="select__input"
      :placeholder="placeholder"
      :svgName="svgToShow"
      :readonly="true"
      :disabled="disabled"
      :inputForSelect="true"
      :valueFromParent="selectedValue"
    />
    <dropdown-list v-show="isActive"
      :items="items"
      :receivedValue="valueFromProps"
      @select-item="showItem"
    />
  </div>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    disabled: {
      type: Boolean,
      default: () => false
    },
    items: {
      type: Array, 
      default: () => []
    }, 
    valueFromProps: {
      type: String, 
      default: () => ''
    }, 
    placeholder: {
      type: String, 
      default: () => 'Выберите значение...'
    }
  },
  data() {
        return {
            isActive: false,
            selectedValue: null
        }
    }, 
  methods: {
      toggleActive() {
          if (!this.disabled) {
            this.isActive = !this.isActive;
          }
      },
      showItem($event) {
        this.selectedValue = $event;
        this.$emit('select-change', this.selectedValue);
      }
  }, 
  computed: {
    svgToShow() {
      return this.isActive ? 'arrow-up' : 'arrow-down';
    }, 
    ArrayIncludesValue() {
      return this.items.some(item => item.text === this.valueFromProps);
    }, 
    cameFromProps() {
      return this.ArrayIncludesValue ? this.valueFromProps : '';
    }
  }
}
</script>

<style lang="scss">
@import '@/components/UI/MySelect/index.scss';
</style>