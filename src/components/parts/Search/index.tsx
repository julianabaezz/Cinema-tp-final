import { FC } from "react"

type Prop ={
    handleChange: (search:string) => void
}

const SearchItems:FC<Prop> =({handleChange}) =>{
    return(
        <input className="form-control" type="text" onChange={(e) => handleChange(e.target.value)}/>

    )
}

export{SearchItems}