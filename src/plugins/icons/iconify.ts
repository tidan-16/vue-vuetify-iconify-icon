import type {IconProps, IconSet} from 'vuetify'
import {aliases} from 'vuetify/iconsets/mdi';
import {h} from 'vue'

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