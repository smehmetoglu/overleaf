import { isBootstrap5 } from '@/features/utils/bootstrap-5'

export default function iconTypeFromName(name: string): string {
  let ext = name.split('.').pop()
  ext = ext ? ext.toLowerCase() : ext

  if (ext && ['png', 'pdf', 'jpg', 'jpeg', 'gif'].includes(ext)) {
    return 'image'
  } else if (ext && ['csv', 'xls', 'xlsx'].includes(ext)) {
    return isBootstrap5() ? 'table_chart' : 'table'
  } else if (ext && ['py', 'r'].includes(ext)) {
    return isBootstrap5() ? 'code' : 'file-text'
  } else if (ext && ['bib'].includes(ext)) {
    return isBootstrap5() ? 'menu_book' : 'book'
  } else {
    return isBootstrap5() ? 'description' : 'file'
  }
}