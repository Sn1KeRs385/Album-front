<script setup lang="ts">
import MediaUploadButton from 'components/MediaUpload/MediaUploadButton.vue'
import FileUploadProgress from 'file-uploader/components/FileUploadProgress.vue'
import { computed, onBeforeMount, onMounted, ref } from 'vue'
import { useFilesStore } from 'stores/files-store'
import FileInterface from 'interfaces/FileInterface'
import CollectionName from 'file-uploader/enums/collection-name'
import { QScrollObserver } from 'quasar'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Fancybox } from '@fancyapps/ui/src/Fancybox/Fancybox.js'
import '@fancyapps/ui/dist/fancybox.css'

const fileStore = useFilesStore()
onBeforeMount(() => {
  fileStore.loadNextPage()
})

onMounted(() => {
  Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: {
      Carousel: {
        fill: false,
        center: false,
      },
    },
  })
})

const scrollObserver = ref<InstanceType<typeof QScrollObserver>>()
const files = computed(() => fileStore.files)

const filePreviewUrl = computed(() => (file: FileInterface) => {
  const filePreview = (file.files || []).find((file) => file.collection === CollectionName.PREVIEW)
  if (!filePreview) {
    return file.url
  }

  return filePreview.url
})

const onScroll = (scrollInfo: { position: { top: number } }) => {
  const maxScroll = (document?.body?.scrollHeight || 0) - (window.innerHeight || 0)
  if (maxScroll - scrollInfo.position.top <= 250) {
    fileStore.loadNextPage()
  }
}
</script>

<template>
  <div>
    <div class="tw-grid files-container tw-gap-5px">
      <a v-for="file in files" :key="file.id" data-fancybox="gallery" :href="file.url">
        <img :src="filePreviewUrl(file)" class="hidden" />
        <q-img :src="filePreviewUrl(file)" class="tw-w-full tw-h-100px tw-rounded-10px" />
      </a>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <media-upload-button />
    </q-page-sticky>

    <q-page-sticky position="bottom-left" :offset="[18, 18]">
      <file-upload-progress />
    </q-page-sticky>

    <q-scroll-observer ref="scrollObserver" @scroll="onScroll"></q-scroll-observer>
  </div>
</template>

<style scoped lang="scss">
a[data-fancybox] img {
  cursor: zoom-in;
}

.files-container {
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
</style>
