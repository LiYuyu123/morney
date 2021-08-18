import clone from '@/lib/Clone';
const localstorageName='recordList'



 const recordStore={
    recordList:[] as RecordItem[],
    fetchRecords(){
        this.recordList=JSON.parse( window.localStorage.getItem(localstorageName) || '[]') as RecordItem[];
        return this.recordList
    },
    saveRecords(){
        window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    },
    createRecord(record: RecordItem) {
        const record2:RecordItem =clone(record)
        record2.createAt=new Date().toISOString()
        this.recordList && this.recordList.push(record2);
        this.saveRecords()
    },
}
recordStore.fetchRecords()

export default recordStore