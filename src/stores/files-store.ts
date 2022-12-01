import { defineStore } from 'pinia'
import FileInterface from 'interfaces/FileInterface'
import { api } from 'boot/axios'
import apiRoutes from 'src/contants/api-routes'
import apiErrorHandler from 'utils/api-error-handler'
import PaginationResponseInterface from 'interfaces/Api/PaginationResponseInterface'

interface FilesStoreInterface {
  files: FileInterface[]
  page: number
  isLoadingNext: boolean
  nextPageExists: boolean
}

const perPage = 50

export const useFilesStore = defineStore('files', {
  state: (): FilesStoreInterface => ({
    files: [],
    page: 0,

    isLoadingNext: false,
    nextPageExists: true,
  }),
  getters: {},
  actions: {
    async loadNextPage() {
      if (this.isLoadingNext || !this.nextPageExists) {
        return
      }

      this.isLoadingNext = true

      await api
        .get(apiRoutes.v1.files, { params: { page: this.page + 1, per_page: perPage } })
        .then((response) => {
          const data = response.data as PaginationResponseInterface<FileInterface>
          this.page = this.page + 1
          if (data.per_page * data.current_page > data.to) {
            this.nextPageExists = false
          }
          this.files = this.files.concat(data.items)
        })
        .catch(apiErrorHandler)

      this.isLoadingNext = false
    },
  },
})
