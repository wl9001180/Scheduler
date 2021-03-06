import React, {Component} from 'react';
import {store} from '../../Redux/Redux';

const moment = require('moment');


function GenClassCells(props) {
    const DayArr = ["Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday",
        "Sunday"];

    const unityPX = 1;

    var ColorGroup = store.getState().Config.TimeTable.ColorGroup;

    var divStyle = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        margin: '0px',
        padding: '2px 2px',
        borderRadius: '8px',
        height: '0px',
        width: "calc(" + (100.00 / 7).toString() + "%" + " - 1px)",
        border: '4px solid black',
        'boxSizing': 'border-box',
        "marginLeft": "0px",
        "borderColor": ColorGroup[props.Class_Detail.Color].borderColor,
        "fontColor": ColorGroup[props.Class_Detail.Color].fontColor,
        "backgroundColor" : ColorGroup[props.Class_Detail.Color].backgroundColor,
    };
    const startTime = props.TimeRange.MinTime;
    let timeDiff = props.Class_Detail.TimeFrom.diff(startTime);

    const duration = moment.duration(timeDiff);
    const minutes = duration.asMinutes();

    const timeDiff2 = props.Class_Detail.TimeTo.diff(props.Class_Detail.TimeFrom);
    const duration2 = moment.duration(timeDiff2);
    const minutes2 = duration2.asMinutes();

    divStyle.top = (30 + minutes * unityPX).toString() + "px";
    divStyle.height = (minutes2 * unityPX).toString() + "px";

    var classCellArray = [];

    for(var i = 0; i < 7; i++){

        


        if(props.Class_Detail.Date.charAt(i) === '1'){
            var tmp_divStyle = Object.assign({}, divStyle)
            tmp_divStyle.left = "calc(" + (i * (100.00 / 7)).toString() + "%" + " + 1px)" ;

            classCellArray.push(
                React.createElement("div",
                    {
                        style: tmp_divStyle,
                        key: props.Class.CourseSubject + " " + i,
                        onClick: props.onClick
                    },
                    props.Class.CourseSubject +
                    props.Class.CourseCode + '-' +
                    props.Class.CourseSection + ' (' +
                    props.Class_Detail.Types + ')',
                    <br/>,
                    props.Class_Detail.LocationB + props.Class_Detail.LocationR
                )
            )            
        }
    }
    return classCellArray;
}



class GenClassForAllDay extends Component {
    constructor(props) {
        super(props);
    }

    ClassForAllDay() {
        return this.props.Class.Class_Detail.map((Class_Detail, index) =>
            <GenClassCells
                Class={this.props.Class}
                Class_Detail={Class_Detail}
                key={Date + index}
                TimeRange={this.props.TimeRange}
                index = {index}
                onClick={() => this.props.onClick({
                    AddClassWindowOn: true,
                    Class: this.props.Class
                })}
            />
        );
    }

    render() {
        return this.ClassForAllDay();
    }
}

export function GenAllClasses(props) {
    return props.Class.map((Class, index) =>
        <GenClassForAllDay
            TimeRange={props.TimeRange}
            Class={Class}
            key={Class + index}
            onClick={(i) => props.onClick(i)}
        />
    );
}