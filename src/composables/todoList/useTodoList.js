
import { onMounted, ref, reactive, toRefs, computed } from 'vue'
import { useStore } from 'vuex'

export function useTodoList () {
  const store = useStore()
  const { dispatch, commit } = store
  const { todoData } = toRefs(store.state.todoList)

  const input = ref(null)
  const content = ref('')
  const todoTabType = ref('all')

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

  const states = reactive({
    input,
    content,
    todoTabType,
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
    todo.isTodoHoverShow = false

    dispatch('todoList/updateTodo', todo)
  }
  function removeTodo (id) {
    const deleteIdx = todoData.value.findIndex(todo => todo.id === id)
    dispatch('todoList/removeTodo', deleteIdx)
    dispatch('delModal/modalHide')
  }

  function todoHoverShow (todo) {
    todo.isTodoHoverShow = true
  }
  function todoHoverHide (todo) {
    todo.isTodoHoverShow = false
  }

  function editShow (todo) {
    todo.editShow = true
    todo.isTodoHoverShow = false
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

  function changeTodoType (type) {
    states.todoTabType = type
  }

  onMounted(() => {
    input.value.focus()
    commit('todoList/GET_INPUT_ELEMENT', input.value)
  })

  return {
    ...toRefs(states)
  }
}
