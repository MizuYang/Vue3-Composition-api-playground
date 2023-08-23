<template>
  <li class="position-relative px-5 mb-2"
      :class="{'ps-4':todo.isTodoHover&&!todo.isEditInputShow}"
      v-for="(todo,idx) in filterTodoData" :key="`${idx}-${todo.id}`"
      @click="emits('todoToggle',$event,todo)"
      @mouseenter="todo.isTodoHover=true"
      @mouseleave="todo.isTodoHover=false"
      style="font-size:40px;transition: all .5s;">
      <div class="d-flex align-items-center"
           @mouseenter="todo.isEditInputShow||emits('todoHoverShow',todo)"
           @mouseleave="emits('todoHoverHide',todo)">
          <!-- 刪除 hover -->
          <template v-if='todo.isTodoDelHover'>
            <img :src="require(`@/assets/images/demo/todoList/delete-${theme}.svg`)"
                  class="position-absolute d-block">
          </template>
          <!-- 編輯 hover -->
          <template v-else-if='todo.isTodoEditHover'>
            <img :src="require(`@/assets/images/demo/todoList/edit-${theme}.svg`)"
                  class="position-absolute d-block">
          </template>
          <!-- 完成待辦 hover tip (半透明) -->
          <template v-else-if="!todo.isdone&&todo.isTodoHover">
            <input type="checkbox"
                    class="position-absolute form-check-input ms-2 my-auto"
                    :class="{'opacity-50':todo.isTodoHover}"
                    style="zoom:50%;"
                    checked>
          </template>
          <!-- 完成待辦 -->
          <template v-else>
            <input type="checkbox"
                    class="form-check-input ms-2 me-4 my-auto"
                    :id="`${idx}-${todo.id}`"
                    :checked="todo.isdone"
                    style="zoom:50%;">
          </template>

          <!-- todo 文字 -->
          <!-- 顯示編輯文字 -->
          <div v-show='todo.isEditInputShow'>
            <input type="text"
                    class="form-control w-75"
                    :id="`editInput-${todo.id}`"
                    v-model="todo.name"
                    @keydown.enter="emits('editHide',todo)"
                    @change="dispatch('todoList/updateTodo',todo)"
                    @blur="emits('editHide',todo)"
                    style="margin-left:34px;">
          </div>
          <!-- 顯示文字 -->
          <template v-if="!todo.isEditInputShow">
            <p :for="`${idx}-${todo.id}`"
                class="w-100 todo-hover text-18 selected-none me-4 pe-3"
                :class="{'todo-done':todo.isdone||todo.isTodoHover,
                        'todo-remove-hover': todo.isTodoDelHover,
                        'todo-edit-hover': todo.isTodoEditHover,
                        'todo-border-bottom':todo.isTodoHover}"
                :style="[!todo.isdone&&todo.isTodoHover&&'margin-left:34.5px;',
                          todo.isTodoDelHover&&'margin-left:34px;',
                          todo.isTodoEditHover&&'margin-left:34px;']"
                @mouseenter="todo.isTodoHover=true"
                @mouseleave="todo.isTodoHover=false">
              <span class="pe-3" style="word-break: break-all;">{{ todo.name }}</span>
            </p>
          </template>

          <!-- 編輯、刪除 -->
            <div class="position-absolute top-0 h-100 d-flex align-items-center"
                  @mouseenter="todo.isTodoHover=true"
                  @mouseleave="todo.isTodoHover=false"
                  style="right:-15px;">
              <template v-if="!todo.isEditInputShow">
                <!-- 編輯按鈕 -->
                <button type="button" class="btn d-block "
                        data-btn="edit"
                        @click="emits('editShow',todo)"
                        @mouseenter="todo.isTodoEditHover=true"
                        @mouseleave="todo.isTodoEditHover=false">
                  <img :src='require(`@/assets/images/demo/todoList/edit-${theme}.svg`)' class="d-block" data-btn="edit" alt='編輯'>
                </button>
                <!-- 刪除按鈕 -->
                <button type="button" class="btn d-block text-light me-3 p-1"
                        data-btn="remove"
                        @click="emits('modalShow',todo)"
                        @mouseenter="todo.isTodoDelHover=true"
                        @mouseleave="todo.isTodoDelHover=false"
                        >
                    <img :src="require(`@/assets/images/demo/todoList/delete-${theme}.svg`)"
                  class="d-block" data-btn="remove">
                </button>
              </template>
            </div>
      </div>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { useStore } from 'vuex'

// store
const store = useStore()
const { dispatch } = store

defineProps(['theme', 'filterTodoData'])
const emits = defineEmits(['doToggle', 'doHoverShow', 'todoHoverHide', 'editShow', 'editHide', 'modalShow'])
</script>

<style lang='scss'>

</style>
