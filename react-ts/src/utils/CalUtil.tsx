export class CalUtil {

    public static arrToStr(arr: string[], prefix?: string, divider?: string): string {
        let str: string = '';
        arr.forEach(ar => {
            str += `${prefix ? prefix : ''}${ar}${divider ? divider : ''}`;
        });
        return str;
    };

    public static dictToKeyArray(obj: { [key: string]: any }): any[] {
        const newArr: string[] = [];
        Object.keys(obj).forEach(key => {
            newArr.push(key);
        })
        return newArr;
    }

    public static dictToValueArray(obj: { [key: string]: any }): any[] {
        const newArr: string[] = [];
        Object.values(obj).forEach(value => {
            newArr.push(value);
        })
        return newArr;
    }

    public static filterSelected(obj: { [key: string]: string | boolean }) {
        if (obj.selected !== false) {
            return obj
        }
    }
    public static filterSelectedMakeNameArr(obj: { [key: string]: { [key: string]: string | boolean } }) {
        const newArr: string[] = [];
        Object.keys(obj).forEach(key => {
            if (this.filterSelected(obj[key]) === null && this.filterSelected(obj[key]) === undefined) {
            } else if (this.filterSelected(obj[key])) {
                let nameObj = this.filterSelected(obj[key]) as unknown as { [key: string]: string | boolean };
                newArr.push(nameObj.name as string);
            }
        })
        return newArr;
    }

}