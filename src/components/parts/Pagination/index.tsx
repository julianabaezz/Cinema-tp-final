import { FC } from "react"
import { Button } from "react-bootstrap"
import { useItems } from "../../../hooks/useItems"

const Pagination: FC = () =>{

    const {setPageParams, page} =useItems()

    const nextPage = () =>{
        setPageParams(page + 1)
    }

    const previousPage = () =>{
        setPageParams(page-1)
    }
    return(
        <div>
        <Button onClick={previousPage}> PREV </Button> 
        <Button onClick={nextPage}> PROX  </Button>  
        </div>
    )



}

export {Pagination}