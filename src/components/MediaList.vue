<script setup lang="ts">
import MediaUploadButton from 'components/MediaUpload/MediaUploadButton.vue'
import FileUploadProgress from 'file-uploader/components/FileUploadProgress.vue'
</script>

<template>
  <div>
    <div class="column">
      <div class="row justify-between">
        <div></div>
        <div>
          <media-upload-button />
        </div>
      </div>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <file-upload-progress />
    </q-page-sticky>
  </div>
</template>
