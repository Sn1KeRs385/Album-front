import FileStatus from 'file-uploader/enums/file-status'

export default interface FileInterface {
  id: number
  status: FileStatus
  collection: string
  filename?: string
  type?: string
  url?: string
  files?: FileInterface[]
}
