import { CircularProgress } from "@material-ui/core"

const Loading = ({style}) => {

    return <div className="loading" style = {style}>
        <CircularProgress className = 'loading-circle'/>
    </div>

}
export default Loading;