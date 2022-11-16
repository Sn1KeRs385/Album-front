<script setup lang="ts">
import { computed } from 'vue'
import { useFileUploadStore } from 'file-uploader/stores/file-upload-store'
import FileUploadInfoInterface from 'file-uploader/interfaces/file-upload-info-interface'

const fileUploadStore = useFileUploadStore()
const files = computed(() => fileUploadStore.files)

const deleteFileFromList = (file: FileUploadInfoInterface) => {
  fileUploadStore.removeFileFromList(file)
}
</script>

<template>
  <q-card
    flat
    bordered
    class="bg-grey-1 upload-progress-card tw-max-h-200px tw-max-w-500px tw-overflow-auto"
  >
    <q-card-section
      v-for="(file, index) in files"
      :key="`file_${index}`"
      :class="{
        'cursor-pointer': file.progress === 100,
        'hover:tw-bg-grey-900': file.progress === 100,
      }"
      @click="deleteFileFromList(file)"
    >
      <div class="row items-center no-wrap">
        <q-circular-progress
          class="tw-flex-none"
          size="md"
          show-value
          :value="file.progress"
          :color="file.progress < 100 ? 'light-blue' : 'green'"
        >
          <div v-if="file.progress < 100">{{ file.progress }}%</div>
          <q-icon v-else size="xs" name="done" />
        </q-circular-progress>
        <div class="tw-ml-12px tw-line-clamp-1">
          {{ file.file.name }}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<style scoped lang="scss">
.upload-progress-card {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
}
</style>
