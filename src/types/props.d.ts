type Button = {
    btnTxt:string
    addNotes: () => void
}

interface note {
    id: number
    title?: string
    desc?: string
}

type modal = {
    children: React.ReactChildren | React.ReactElement
    trigger: boolean
    click: () => void
}
