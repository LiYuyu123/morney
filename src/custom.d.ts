type Tag = {
    id: string
    name: string
}
type RecordItem = {
    tags: Tag[]
    type: string
    notes: string
    amount: number
    createAt?: string
}
type RootStore = {
    recordList: RecordItem[]
    tagList: Tag[]
    createRecordError:Error | null
    createTagError:Error |null
    currentTag?: Tag
    updateMessage:boolean
}

type TagListModel = {
    data: Tag[]
    fetch: () => Tag[]
    create: (name: string) => 'success' | 'duplicated' //联合类型，字符串的子类型
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
    remove: (id: string) => boolean
    save: () => void
}

interface Window {
    store: {
        tagList: Tag[]
        createTag: (name: string) => void
        removeTag: (id: string) => boolean
        updateTag: TagListModel['update']
        findTag: (id: string) => Tag | undefined
        recordList: RecordItem[]
        createRecord: (record: RecordItem) => void
    }

}
