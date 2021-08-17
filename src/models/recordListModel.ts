import clone from '@/lib/Clone.ts';

const localstorageName='recordList'
const recordListModel={
    data:[] as RecordItem[],
    fetch(){
        this.data=JSON.parse( window.localStorage.getItem(localstorageName) || '[]') as RecordItem[];
        return this.data
    },
    create(record:RecordItem){
        const record2:RecordItem =clone(record)
        record2.createAt=new Date()
        this.data.push(record2);
        this.save()
    },
    save(){
        window.localStorage.setItem('recordList', JSON.stringify(this.data));
    }
}

export default recordListModel