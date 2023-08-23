<template>

  <header style="margin-top:90px;">
    <Banner />
  </header>

  <div class="container d-flex flex-column mt-3 px-0 pt-3" :data-theme="theme">
    <section class="my-3 px-3">
      <h2 class="text-20">TodoList</h2>
    </section>

    <section class="my-3 px-3">
      <div class="d-flex align-items-center mb-3">
        <!-- 新增待辦 -->
        <AddTodoArea @addTodo="addTodo" />
      </div>

    </section>
    <section>
      <template v-if="todoData.length">
        <!-- 待辦切換 tab -->
        <TodoTab :doneTodoData="doneTodoData"
                 :unDoneTodoData="unDoneTodoData"
                 @changeTodoType="changeTodoType" />
        <!-- 待辦列表 -->
        <ul class="area m-3 mt-0 py-4">
          <SingleTodo :theme="theme"
                      :filterTodoData="filterTodoData"
                      @todoToggle="todoToggle"
                      @doHoverShow="todoHoverShow"
                      @todoHoverHide="todoHoverHide"
                      @editShow="editShow"
                      @editHide="editHide"
                      @modalShow="modalShow" />
        </ul>
      </template>
      <template v-else>
        <p class="text-center text-gray">( 您目前沒有任何待辦事項... )</p>
      </template>
    </section>
  </div>

  <!-- 刪除 modal -->
  <DelModal @removeTodo="removeTodo" />
</template>

<script setup>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
import Banner from '@/components/demo/todoList/Banner.vue'
import DelModal from '@/components/demo/todoList/modal/DelModal.vue'
import TodoTab from '@/components/demo/todoList/TodoTab.vue'
import AddTodoArea from '@/components/demo/todoList/AddTodoArea.vue'
import SingleTodo from '@/components/demo/todoList/SingleTodo.vue'
import { useTodoList } from '@/composables/todoList/useTodoList.js'

// store
const store = useStore()
const { theme } = toRefs(store.state.theme)
const { todoData } = toRefs(store.state.todoList)

const {
  doneTodoData,
  unDoneTodoData,
  filterTodoData,
  addTodo,
  todoToggle,
  removeTodo,
  todoHoverShow,
  todoHoverHide,
  editShow,
  editHide,
  modalShow,
  changeTodoType
} = useTodoList()

// 取得代辦
console.log('所有待辦: ', todoData.value)

</script>

<style lang='scss' scope>
.todo-done {
  position: relative;
  color: gray;
  font-style: italic;
  transition: all 1.5;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: rgb(21, 143, 47);
    top: 50%;
    left: -5px;
    transition: all 1.5;
  }
}
.todo-remove-hover {
  position: relative;
  color: gray;
  font-style: italic;
  transition: all 1.5;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: rgba(228, 13, 13, 0.58);
    top: 50%;
    left: -5px;
    transition: all 1.5;
  }
}
.todo-edit-hover {
  position: relative;
  color: gray;
  font-style: italic;
  transition: all 1.5;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: rgba(107, 137, 255, 0.806);
    top: 50%;
    left: -5px;
    transition: all 1.5;
  }
}

.selected-none ::selection {
  user-select: none;
}
.form-check-input:checked {
  background-color: rgb(21, 143, 47);
  border-color: rgb(21, 143, 47);
}
.todo-hover {
  border-bottom: 1px solid transparent;

  &:hover{
    border-bottom: 1px solid #000;
  }
}
.todo-border-bottom {
  border-bottom: 1px solid #000;
}
</style>
