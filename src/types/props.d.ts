type Button = {
    btnTxt:string
    addNotes: () => void
}
type modal = {
    trigger: boolean
    click: () => void
    handleSubmit: (e:any) => void
}
type Notes = {
    title: string
    description: string
}
