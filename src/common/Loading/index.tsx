import { ClipLoader } from "react-spinners"

const Loading = () =>{
    return (
    <div style={{position: 'fixed', top: 0, right: 0, bottom: 0, left:0, display: 'flex', alignItems:'center', justifyContent:'center' }}>
        <ClipLoader color="red" loading={true} size={150} />
    </div>
    )

}

export {Loading} 