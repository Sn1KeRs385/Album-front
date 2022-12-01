<script setup lang="ts">
import { ref } from 'vue'
import { QFile } from 'quasar'
import { useFileUploadStore } from 'file-uploader/stores/file-upload-store'
import CollectionName from 'file-uploader/enums/collection-name'

const fileUploadStore = useFileUploadStore()

const fileInput = ref<InstanceType<typeof QFile>>()
const onChooseFiles = (files: File[]) => {
  fileUploadStore.addFilesToUploadQueue(files, CollectionName.IMAGE)
  fileUploadStore.startUpload()
}
const openChooseFileDialog = () => {
  ;(fileInput.value?.$el as HTMLInputElement).click()
}
</script>

<template>
  <div>
    <q-btn
      class="glossy"
      round
      color="deep-orange"
      icon="cloud_download"
      @click="openChooseFileDialog"
    />
    <q-file
      ref="fileInput"
      multiple
      accept="video/*, image/*"
      class="hidden"
      @update:model-value="onChooseFiles"
    />
  </div>
</template>
