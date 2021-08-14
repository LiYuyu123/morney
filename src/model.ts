const localstorageName='recordList'
const model={
    clone(data:RecordItem | RecordItem[]){
        return JSON.parse(JSON.stringify(data)) //深拷贝
    },
    fetch(){
       return JSON.parse( window.localStorage.getItem(localstorageName) || '[]') as RecordItem[];
    },
    save(data:RecordItem[]){
        window.localStorage.setItem('recordList', JSON.stringify(data));
    }
}

export default model