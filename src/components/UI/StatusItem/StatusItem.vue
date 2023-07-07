<template>
  <div class="status"
    :class="{
        'status_blue': blueColor,
        'status_gray': grayColor,
        'status_orange': orangeColor,
    }"
  >
    {{statusName}}
  </div>
</template>

<script>
import { Status } from '@/constants/statuses';

export default { 
    name: 'status-item',
    data() {
        return {
            Status
        }
    },
    props: {
        statusName: {
            type: String,
            required: true
        }
    },
    computed: {
        blueColor() {
            return this.statusName == Status.COMPLETED || this.statusName == Status.DONE || this.statusName == Status.CLOSED || this.statusName == Status.ACTIVE
        },
        grayColor() {
            return this.statusName == Status.NOT_ACTIVE
        },
        orangeColor() {
            return this.statusName == Status.DELETED
        }
    }

}
</script>

<style lang="scss">
@import '@/components/UI/StatusItem/index.scss';
</style>