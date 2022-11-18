import {ref, watch} from "vue";

export function UseStorage(key, val) {
    let storeVal = read();

    if (storeVal) {
        val = ref(storeVal);
    } else {
        val = ref(val)

        write();
    }


    watch(val, () => {
        write();
    });

    function read() {
        return localStorage.getItem(key);
    }

    function write() {
        if (val.value == null || val.value == '') {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, val.value);
        }
    }

    return val;
}