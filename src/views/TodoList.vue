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
        <input type="text" class="form-control" ref="input"
               @keydown.enter="addTodo"
               v-model="content" placeholder="新增待辦事項">
        <button type="button"
                class="btn btn-primary"
                :class="{'bg-secondary border-secondary opacity-75':!content}"
                @click="addTodo"
                :disabled="!content"
                style="min-width:50px;padding:6px 0;">新增</button>
      </div>

    </section>
    <section>
      <template v-if="todoData.length">
        <!-- 待辦切換 tab -->
        <div class="container">
          <div class="row row-cols-3 g-0 text-center mx-1">
            <div class="col">
              <button type="button" class="w-100 h-100 btn btn-primary py-2"
                      @click="todoTabType='all'">
                全部({{ todoData.length }})
              </button>
            </div>
            <div class="col">
              <button type="button" class="w-100 h-100 btn btn-success py-2"
                      @click="todoTabType='done'">
                已完成({{ doneTodoData.length }})
              </button>
            </div>
            <div class="col">
              <button type="button" class="w-100 h-100 btn bg-gray text-light py-2"
                      @click="todoTabType='unDone'">
                未完成({{ unDoneTodoData.length }})
              </button>
            </div>
          </div>
        </div>
        <!-- 待辦列表 -->
        <ul class="area m-3 mt-0 py-4">
            <li class="position-relative px-5 mb-2"
                :class="{'ps-4':todo.todoComplateTip&&!todo.editShow}"
                v-for="(todo,idx) in filterTodoData" :key="`${idx}-${todo.id}`"
                @click="todoToggle($event,todo)"
                @mouseenter="todo.todoHover=true"
                @mouseleave="todo.todoHover=false"
                style="font-size:40px;transition: all .5s;">
                <div class="d-flex align-items-center"
                     @mouseenter="todo.editShow||todoComplateTipShow(todo)"
                     @mouseleave="todoComplateTipHide(todo)">
                    <!-- 刪除 hover -->
                    <template v-if='todo.todoDelHover'>
                      <img :src="require(`@/assets/images/demo/todoList/delete-${theme}.svg`)"
                           class="position-absolute d-block">
                    </template>
                    <!-- 編輯 hover -->
                    <template v-else-if='todo.todoEditHover'>
                      <img :src="require(`@/assets/images/demo/todoList/edit-${theme}.svg`)"
                           class="position-absolute d-block">
                    </template>
                    <!-- 完成待辦 hover tip (半透明) -->
                    <template v-else-if="!todo.isdone&&todo.todoComplateTip">
                      <input type="checkbox"
                             class="position-absolute form-check-input ms-2 my-auto"
                             :class="{'opacity-50':todo.todoComplateTip}"
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
                    <div v-show='todo.editShow'>
                      <input type="text"
                             class="form-control w-75"
                             :id="`editInput-${todo.id}`"
                             v-model="todo.name"
                             @keydown.enter="editHide(todo)"
                             @change="dispatch('todoList/updateTodo',todo)"
                             @blur="editHide(todo)"
                             style="margin-left:34px;">
                    </div>
                    <!-- 顯示文字 -->
                    <template v-if="!todo.editShow">
                      <p :for="`${idx}-${todo.id}`"
                             class="w-100 todo-hover text-18 selected-none me-4 pe-3"
                             :class="{'todo-done':todo.isdone||todo.todoHover,
                                      'todo-remove-hover': todo.todoDelHover,
                                      'todo-edit-hover': todo.todoEditHover,
                                      'todo-border-bottom':todo.todoHover}"
                             :style="[!todo.isdone&&todo.todoComplateTip&&'margin-left:34.5px;',
                                       todo.todoDelHover&&'margin-left:34px;',
                                       todo.todoEditHover&&'margin-left:34px;']"
                                       @mouseenter="todo.todoHover=true"
                @mouseleave="todo.todoHover=false">
                        <span class="pe-3" style="word-break: break-all;">{{ todo.name }}</span>
                      </p>
                    </template>

                    <!-- 編輯、刪除 -->
                      <div class="position-absolute top-0 h-100 d-flex align-items-center"
                           @mouseenter="todo.todoHover=true"
                           @mouseleave="todo.todoHover=false"
                           style="right:-15px;">
                        <template v-if="!todo.editShow">
                          <!-- 編輯按鈕 -->
                          <button type="button" class="btn d-block "
                                  data-btn="edit"
                                  @click="editShow(todo)"
                                  @mouseenter="todo.todoEditHover=true"
                                  @mouseleave="todo.todoEditHover=false">
                            <img :src='require(`@/assets/images/demo/todoList/edit-${theme}.svg`)' class="d-block" data-btn="edit" alt='編輯'>
                          </button>
                          <!-- 刪除按鈕 -->
                          <button type="button" class="btn d-block text-light me-3 p-1"
                                  data-btn="remove"
                                  @click="modalShow(todo)"
                                  @mouseenter="todo.todoDelHover=true"
                                  @mouseleave="todo.todoDelHover=false"
                                  >
                              <img :src="require(`@/assets/images/demo/todoList/delete-${theme}.svg`)"
                            class="d-block" data-btn="remove">
                          </button>
                        </template>
                      </div>
                </div>
                <!-- <p class="text-14">{{todo}}</p> -->
            </li>
        </ul>
      </template>
      <template v-else>
        <p class="text-center text-gray">( 您目前沒有任何待辦事項... )</p>
      </template>
      <!-- {{todoData}} -->
    </section>
  </div>

  <!-- 刪除 modal -->
  <DelModal @removeTodo="removeTodo" />
</template>

<script setup>
import { onMounted, ref, reactive, toRefs, computed } from 'vue' // eslint-disable-line
import { useStore } from 'vuex'
import Banner from '@/components/demo/todoList/Banner.vue'
import DelModal from '@/components/demo/todoList/modal/DelModal.vue'

// store
const store = useStore()
const { dispatch, commit } = store
const { theme } = toRefs(store.state.theme)
const { todoData } = toRefs(store.state.todoList)

const input = ref(null)
const content = ref('')
const todoTabType = ref('all')

// 取得代辦
console.log(todoData.value)

const doneTodoData = computed(() => todoData.value.filter(todo => todo.isdone))
const unDoneTodoData = computed(() => todoData.value.filter(todo => !todo.isdone))

const filterTodoData = computed(() => {
  let result = ''
  if (todoTabType.value === 'all') {
    result = todoData.value
  } else if (todoTabType.value === 'done') {
    result = doneTodoData.value
  } else if (todoTabType.value === 'unDone') {
    result = unDoneTodoData.value
  }

  return result
})

function addTodo () {
  if (!content.value) return

  const todo = {
    name: content.value,
    time: new Date().toLocaleString(),
    id: new Date().getTime(),
    isdone: false
  }
  input.value.focus()
  content.value = ''
  dispatch('todoList/addTodo', todo)
}

function todoToggle (e, todo) {
  const isRemoveBtn = e.target.dataset.btn === 'remove'
  const isEditBtn = e.target.dataset.btn === 'edit'
  if (isRemoveBtn || isEditBtn) return

  todo.isdone = !todo.isdone
  // 初始化
  todo.todoHover = false
  todo.todoComplateTip = false

  dispatch('todoList/updateTodo', todo)
}
function removeTodo (id) {
  const deleteIdx = todoData.value.findIndex(todo => todo.id === id)
  dispatch('todoList/removeTodo', deleteIdx)
  dispatch('delModal/modalHide')
}

function todoComplateTipShow (todo) {
  todo.todoComplateTip = true
}
function todoComplateTipHide (todo) {
  todo.todoComplateTip = false
}

function editShow (todo) {
  todo.editShow = true
  todo.todoComplateTip = false
  const input = document.querySelector(`#editInput-${todo.id}`)
  setTimeout(() => {
    input.focus()
  })
}
function editHide (todo) {
  todo.editShow = false
  todo.todoEditHover = false
  dispatch('todoList/setLocalStorage')
}

function modalShow (todo) {
  todo.todoDelHover = false
  dispatch('delModal/modalShow')
  commit('delModal/GET_DEL_TODO_INFO', todo)
}

onMounted(() => {
  input.value.focus()
  commit('todoList/GET_INPUT_ELEMENT', input.value)
})
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
