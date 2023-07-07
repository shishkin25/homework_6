<template>
    <section class="element">
        <div class="element__wrapper element__wrapper_taskHeight">
            <div class="element__content">
                <div class="element__content-header">
                    <div class="element__content-name"
                        @click="showTaskInfo"
                    >{{task.name}}</div>
                    <div class="avatar">
                        <img :src="AvatarImg" alt="avatar">
                    </div>
                </div>
        
                <div class="element__content-footer">
                    <div class="element__content-info">
                        <div class="element__content-code">{{task.code}}</div>
                        <div class="element__content-created timestamp">{{task.createdBy}}</div>
                        <status-item
                            :statusName="'Черновик'"
                        />
                    </div>
        
                    <div class="element__content-changing">
                        <div class="timestamp">{{task.changedBy}}</div>
                    </div>
                </div>
            </div>

            <dropdown-button class="element__options"
                svgName='dots'
                buttonStyle='secondary'
                :items="[{id:1, text: 'Редактировать'}, {id:2, text:'Удалить'}]"
                :widthListDueContent="true"
            />
        </div>
    </section>
</template>

<script>
import AvatarImg from '@/assets/images/avatar.png'

export default {
    props: {
        task: {
            type: Object, 
            required: true
        }
    }, 
    data() {
        return {
            AvatarImg
        }
    },
    methods: {
        showTaskInfo() {
            /* this.$router.push({ name: 'taskInfo', params:{id: Number(this.task.id), name: this.task.name}}) */
            this.$router.push({ name: 'taskInfo', params: this.task})
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/TaskItem/index.scss';
</style>