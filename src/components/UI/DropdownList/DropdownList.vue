<template>
    <ul class="dropdown-list" 
        @mouseenter="resetActiveItem" 
        @mouseleave="returnActiveItem"
        :class="{'dropdown-list_widthDueContent': widthDueContent}"
    >
        <li 
            v-for="item in items" 
            :key="item.id"
            class="dropdown-list__item"
            :class="{'dropdown-list__item_active': selectedValue == item.text}"
            @click="select"
        >
            {{item.text}}
        </li>
    </ul>
</template>


<script>
export default {
    name: 'dropdown-list',
    props: {
        items: {
            type: Array,
            default: () => []
        }, 
        receivedValue: {
            type: String, 
            default: () => ''
        }, 
        widthDueContent: {
            type: Boolean,
            default: () => false
        }
    }, 
    data() {
        return {
            selectedValue: this.receivedValue,
            savedSelecetedValue: null //нужна для того, что не потерять значение, выбранного item. При наведении на выпадающий список selectedValue стирается
        }
    },
    methods: {
        select($event) {
            this.selectedValue = $event.target.textContent.trim();
            this.savedSelecetedValue = this.selectedValue;
            this.$emit('select-item', this.selectedValue);
        }, 
        resetActiveItem() {
            this.savedSelecetedValue = this.selectedValue;
            this.selectedValue = ''
        }, 
        returnActiveItem() {
            this.selectedValue = this.savedSelecetedValue;
        }
    }
}
</script>

<style lang="scss">
@import '@/components/UI/DropdownList/index.scss';
</style>