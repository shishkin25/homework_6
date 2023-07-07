<template>
    <section class="element">
        <div class="element__wrapper element__wrapper_projectHeight">
            <div class="element__content">
                <div class="element__content-header">
                    <div class="element__content-name">{{project.name}}</div>
                </div>
        
                <div class="element__content-footer">
                    <div class="element__content-info">
                        <div class="element__content-code">{{project.code}}</div>
                        <div class="element__content-created timestamp">{{project.createdBy}}</div>
                    </div>
        
                    <div class="element__content-changing">
                        <div class="timestamp">{{project.changedBy}}</div>
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
export default {
    props: {
        project: {
            type: Object, 
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/components/ProjectItem/index.scss';
</style>