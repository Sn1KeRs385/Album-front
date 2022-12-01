export default interface FileInterface {
  id: number
  status: string
  collection: string
  filename?: string
  type?: string
  url?: string
  files?: FileInterface[]
}
