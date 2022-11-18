import swal from "sweetalert";

export function UseFlash() {
    function flash(title, message, level='success') {
        return swal(title, message, level);
    }

    return { flash }
}