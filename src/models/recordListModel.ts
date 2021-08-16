const localstorageName='recordList'
const recordListModel={
    data:[] as RecordItem[],
    clone(data:RecordItem | RecordItem[]){
        return JSON.parse(JSON.stringify(data)) //深拷贝
    },
    fetch(){
        this.data=JSON.parse( window.localStorage.getItem(localstorageName) || '[]') as RecordItem[];
        return this.data
    },
    save(){
        window.localStorage.setItem('recordList', JSON.stringify(this.data));
    }
}

export default recordListModel