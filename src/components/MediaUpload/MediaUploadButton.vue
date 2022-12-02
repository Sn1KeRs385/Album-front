<script setup lang="ts">
import { ref } from 'vue'
import { QFile } from 'quasar'
import { useFileUploadStore } from 'file-uploader/stores/file-upload-store'
import CollectionName from 'file-uploader/enums/collection-name'

const fileUploadStore = useFileUploadStore()

const fileInput = ref<InstanceType<typeof QFile>>()
const onChooseFiles = (files: File[]) => {
  files.forEach((file) => {
    let collectionName
    if (/^video/gi.test(file.type)) {
      collectionName = CollectionName.VIDEO
    } else if (/^image/gi.test(file.type)) {
      collectionName = CollectionName.IMAGE
    }
    if (collectionName) {
      fileUploadStore.addFileToUploadQueue(file, collectionName)
    }
  })
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
      color="primary"
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
