import type {IconProps, IconSet} from 'vuetify'
import {aliases as vAliases} from 'vuetify/iconsets/mdi';
import {h} from 'vue'

const aliases = {
    ...vAliases,
    menu: 'ic-round-menu',
    // info: 'ic-baseline-info',
    // success: 'ri-checkbox-circle-line',
    // warning: 'ri-alert-line',
    // error: 'ri-error-warning-line',
    // calendar: 'ri-calendar-2-line',
    // collapse: 'ri-arrow-up-s-line',
    // complete: 'ri-check-line',
    // cancel: 'ri-close-line',
    // close: 'ri-close-line',
    // delete: 'ri-close-circle-fill',
    // clear: 'ri-close-line',
    // prev: 'ri-arrow-left-s-line',
    // next: 'ri-arrow-right-s-line',
    // delimiter: 'ri-checkbox-blank-circle-line',
    // sort: 'ri-arrow-up-line',
    // expand: 'ri-arrow-down-s-line',
    // subgroup: 'ri-arrow-down-s-fill',
    // dropdown: 'ri-arrow-down-s-line',
    // edit: 'ri-pencil-line',
    // ratingEmpty: 'ri-star-line',
    // ratingFull: 'ri-star-fill',
    // ratingHalf: 'ri-star-half-line',
    // loading: 'ri-refresh-line',
    // first: 'ri-skip-back-mini-line',
    // last: 'ri-skip-forward-mini-line',
    // unfold: 'ri-split-cells-vertical',
    // file: 'ri-attachment-2',
    // plus: 'ri-add-line',
    // minus: 'ri-subtract-line',
    // sortAsc: 'ri-arrow-up-line',
    // sortDesc: 'ri-arrow-down-line',
}

const iconify = <IconSet>{
    component: (props: IconProps) => {
        // @ts-ignore
        const {icon, tag, size = "1.5rem", ...rest} = props
        let stringIcon = icon as string
        return h(tag, rest, [
            h('iconify-icon', {
                icon: aliases[icon as string] ?? icon,
                props: {size, ...rest},
            }),
        ])
    },
}

export {aliases, iconify}