<template>
  <div class="container">
    <div class="row row-cols-3 g-0 text-center mx-1">
      <div class="col">
        <button type="button" class="w-100 h-100 btn btn-primary py-2"
                @click="emits('changeTodoType','all')">
          全部({{ todoData.length }})
        </button>
      </div>
      <div class="col">
        <button type="button" class="w-100 h-100 btn btn-success py-2"
                @click="emits('changeTodoType','done')">
          已完成({{ props.doneTodoData.length }})
        </button>
      </div>
      <div class="col">
        <button type="button" class="w-100 h-100 btn bg-gray text-light py-2"
                @click="emits('changeTodoType','unDone')">
          未完成({{ props.unDoneTodoData.length }})
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, toRefs } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const { todoData } = toRefs(store.state.todoList)

const props = defineProps(['doneTodoData', 'unDoneTodoData'])
const emits = defineEmits(['changeTodoType'])

</script>

<style lang='scss'>

</style>
