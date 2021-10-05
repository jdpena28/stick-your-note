type Button = {
    btnTxt:string
    addNotes: () => void
}
type modal = {
    titleValue: any
    descValue: any
    titleChange:any
    descChange: any
    refTitle: any
    refDesc: any
    trigger: boolean
    click: () => void
    handleSubmit: (e:any) => void
}
type Notes = {
    title: string
    description: string
    removeNote: () => void
    editNote: any
}
