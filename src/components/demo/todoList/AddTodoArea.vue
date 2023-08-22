<template>
  <input type="text" class="form-control" ref="input"
         @keydown.enter="emits('addTodo')"
         @input="handleInput"
         @compositionstart="handleCompositionStart"
         @compositionend="handleCompositionEnd"
         :value="content" placeholder="新增待辦事項">
<button type="button"
        class="btn btn-primary"
        :class="{'bg-secondary border-secondary opacity-75':!content}"
        @click="emits('addTodo')"
        :disabled="!content"
        style="min-width:50px;padding:6px 0;">新增</button>
</template>

<script setup>
import { toRefs, defineEmits } from 'vue'
import { useStore } from 'vuex'
import { useTodoList } from '@/composables/todoList/useTodoList.js'
import { useAddTodoArea } from '@/composables/todoList/useAddTodoArea.js'

const store = useStore()
const { content } = toRefs(store.state.todoList)
const emits = defineEmits(['addTodo'])

const { input } = useTodoList()
const {
  handleCompositionStart,
  handleCompositionEnd,
  handleInput
} = useAddTodoArea()

</script>

<style lang='scss'>

</style>
