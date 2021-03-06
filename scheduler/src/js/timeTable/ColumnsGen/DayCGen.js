import React from 'react';

var moment = require('moment');

function GendayCell(props) {


    var DayCell = React.createElement("div",
        {
            time: props.time.format("HH:mm").toString() + " " + props.Day,
            className: 'DataCell',
            key: props.time.format("HH:mm").toString() + " " + props.Day,
            onClick: props.onClick
        }
    );

    return DayCell;
}


function GenDayCells(props) {

    var DayCells = props.TimeArr.map(
        function (time) {
            var DateArray = "0000000";
            const DayArr = ["Monday", "Tuesday", "Wednesday",
                            "Thursday", "Friday", "Saturday",
                            "Sunday"];

            var index = DayArr.indexOf(props.Day);
            DateArray = DateArray.substr(0, index) + 1 + DateArray.substr(index+1);

            var classtimed = {
                ClassName: "",           
                CourseSubject: "",
                CourseCode: "",
                CourseSection: "",
                CourseName: "",                        
                Class_Detail: [
                    {
                        CourseID: -1,
                        TimeFrom: moment('00:00 am', "HH:mm A"),
                        TimeTo: moment('00:00 am', "HH:mm A"),
                        Date: DateArray,
                        LocationB: "",
                        LocationR: "",
                        Prof: "",
                        Types: "",
                        Color: 0,
                        CourseDayFrom: "",
                        CourseDayTo: ""               
                    }
                ]
            } 

            var cell = <GendayCell
                key={time}
                time={time}
                onClick={() => props.onClick({
                    AddClassWindowOn: true,
                    Class: classtimed
                })}
            />;

            return cell;
        }


        //<div key = {Time.format("HH:mm") + " " + props.Day} className="DataCell"> </div>
    );

    return DayCells;
}

export function GenDayColumns(props) {
    const DayArr = ["Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday",
        "Sunday"];
    const DayArrSort = ["Mon", "Tue", "Wed",
        "Thu", "Fri", "Sat",
        "Sun"];


    var DayColumns = DayArr.map((Day) =>
        React.createElement("div", {className: "Cellcolumns", key: Day + "Columns"},
            <div key={Day} className="DayCell">{DayArrSort[DayArr.indexOf(Day)]}</div>,
            <GenDayCells
                Day={Day}
                TimeArr={props.TimeArr}
                onClick={(i) => props.onClick(i)}
            />
        )
    );


    return DayColumns;
}