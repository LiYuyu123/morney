const localstorageName = 'tagList';

type TagListModel = {
    data: string[]
    fetch: () => string[]
    create: (name: string) => 'success'|'duplicated' //联合类型，字符串的子类型
    save: () => void
}
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localstorageName) || '[]');
        return this.data;
    },
    create(name) {
        if(this.data.indexOf(name)>=0){return 'duplicated'}
        this.data.push(name);
        this.save();
        return 'success';
    },
    save() {
        window.localStorage.setItem(localstorageName, JSON.stringify(this.data));
    }
};

export default tagListModel;