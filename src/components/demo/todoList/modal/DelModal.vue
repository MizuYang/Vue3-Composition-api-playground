<template>
  <div class="modal" ref="delModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" :data-theme="theme">
        <div class="modal-header" :data-theme="theme">
          <h5 class="modal-title text-danger fw-bold-7">您確定要刪除此待辦嗎？ (此動作無法復原)</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            您即將<span class="text-danger fw-bold-7">刪除</span> "
            <span class="border-bottom border-danger border-2">
              {{ delTodoInfo.name }}
            </span> "
          </p>
        </div>
        <div class="modal-footer" :data-theme="theme">
          <button type="button" class="btn btn-secondary px-3 py-1" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-danger px-3 py-1"
                  @click="emits('removeTodo',delTodoInfo.id)">刪除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useDelModal } from '@/composables/todoList/modal/useDelModal.js'

const store = useStore()
const { delTodoInfo } = toRefs(store.state.delModal)
const { theme } = toRefs(store.state.theme)
const { delModal } = useDelModal()

const emits = defineEmits(['removeTodo'])
</script>

<style lang='scss'>

</style>
