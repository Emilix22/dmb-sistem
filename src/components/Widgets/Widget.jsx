import './Widget.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Widget = (props) => {
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{props.title}</span>
                <span className="subtitle">{props.subtitle}</span>
                <span className="counterWidget">{props.isMoney} {props.counter}</span>
                <span className="link">{props.link}</span>
            </div>
            <div className="right">
                {/* <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20 %
                </div> */}
                {props.icon}
                {props.icon2}
            </div>
        </div>
    )
}

export default Widget
