type Button = {
    btnTxt:string
    addNotes: () => void
}
type modal = {
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
    editNote: () => void
}
