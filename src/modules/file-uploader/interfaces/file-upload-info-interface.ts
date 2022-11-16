import CollectionName from 'file-uploader/enums/collection-name'

export default interface FileUploadInfoInterface {
  uploadStarted: boolean
  id?: number
  progress: number
  file: File | File
  collectionName: CollectionName
  bytesPerRequest: number
  errors: string[]
}
