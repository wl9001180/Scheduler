import React from 'react';

var moment = require('moment');

export class ClassPanel extends React.Component {
    constructor(props) {
        super(props);
        /*
        this.state = {
            startTime: '',
            stopTime: '',
            dateTime: '',
            className: '',
            classCode: '',
            classSection: '',
            classLocation: '',
            profName: '',
            classType: '',
            color: '',
        };
       */
    }


    createPanel() {

        const panelStyle = {
            //backgroundColor: 'white',
            position: 'relative',
            borderTop: '50px',
            height: '100px',
            width: '1000px',
            zIndex: '10',

        };

        var AddClass =
            React.createElement("div", {
                    style: panelStyle,
                    className: "AddClassWindow",
                },
                //Class information
                React.createElement("div", {className: "ClassInfo"}, "Class Name: ",
                    React.createElement("input", {className: "ClassName"}),
                    "   ",
                    "Class Code: ",
                    React.createElement("input", {className: "ClassCode"}),
                    "   ",
                    "Section: ",
                    React.createElement("input", {className: "ClassSection"})),
                //Time information
                React.createElement("div", {className: "TimeInfo"}, "Start Time: ",
                    React.createElement("input", {className: "StartHour", value: "Hour"}),
                    " ",
                    React.createElement("input", {className: "StartMint", value: "Mints"}),
                    "   ",
                    "Stop Time: ",
                    React.createElement("input", {className: "StopHour", value: "Hour"}),
                    " ",
                    React.createElement("input", {className: "StopMint", value: "Mints"})),
                //date information
                React.createElement("div", {className: "DateSelection"}, "Date: ",
                    React.createElement("button", {type: "checkbox", id: "Mon"}, "Mon"),
                    React.createElement("button", {type: "checkbox", id: "Tue"}, "Tue"),
                    React.createElement("button", {type: "checkbox", id: "Wed"}, "Wed"),
                    React.createElement("button", {type: "checkbox", id: "Tur"}, "Tur"),
                    React.createElement("button", {type: "checkbox", id: "Fir"}, "Fir"),
                    React.createElement("button", {type: "checkbox", id: "Sat"}, "Sat"),
                    React.createElement("button", {type: "checkbox", id: "Sun"}, "Sun")),
                //location information
                React.createElement("div", {className: "PlaceInfo"}, "Location: ",
                    React.createElement("input", {className: "PlaceBuilding", value: "Building"}),
                    "   ",
                    React.createElement("input", {className: "PlaceRoom", value: "Room"}),
                ),
                //Prof information,
                React.createElement("div", {className: "ProfInfo"}, "Prof: ",
                    React.createElement("input", {className: "ProfName"})),
                //Color section
                React.createElement("div", {className: "ColorSelection"}, "Color: ",
                    React.createElement("button", {type: "checkbox", id: "color1"}),
                    React.createElement("button", {type: "checkbox", id: "color2"}),
                    React.createElement("button", {type: "checkbox", id: "color3"}),
                    React.createElement("button", {type: "checkbox", id: "color4"}),
                    React.createElement("button", {type: "checkbox", id: "color5"}),
                    React.createElement("button", {type: "checkbox", id: "color6"}),
                    React.createElement("button", {type: "checkbox", id: "color7"})),
                React.createElement("button", {type: "button", className: "saveButton"}, "Save"),
                React.createElement("button", {type: "button", className: "cancelButton"}, "Cancel")
            );
        return AddClass;
    }

    passPanel() {
        if (this.props.OnOff) {
            return this.createPanel();
        } else {
            return null;
        }
    };

    render() {
        return this.passPanel();
    }


    /*
    this.changeStartTime() = this.changeStartTime.bind(this);
    this.changeStopTime() = this.changeStopTime.bind(this);
    this.changeDateTime() = this.changeDateTime.bind(this);
    this.changeClassName() = this.changeClassName.bind(this);
    this.changeClassCode() = this.changeClassCode.bind(this);
    this.changeClassSection() = this.changeClassSection.bind(this);
    this.changeClassLocation() = this.changeClassLocation.bind(this);
    this.changeProfName() = this.changeProfName.bind(this);
    this.changeClassType() = this.changeClassType.bind(this);
    this.changeColor() = this.changeColor.bind(this);
    this.saveClass() = this.saveClass.bind(this);
    //this.deleteClass() = this.deleteClass().bind(this);
    //this.cancleClass() = this.cancelClass().bind(this);
}

changeStartTime() {
    //TODO
}

changeStopTime() {
    //TODO
}

changeDateTime() {
    //TODO
}

changeClassName() {
    //TODO
}

changeClassCode() {
    //TODO
}

changeClassSection() {
    //TODO
}

changeClassLocation() {
    //TODO
}

changeProfName() {
    //TODO
}

changeClassType() {
    //TODO
}

changeColor() {
    //TODO
}

saveClass() {
    //TODO
}
*/

    /*
    deleteClass() {
        //TODO
        //delete a class
    }

    cancelClass() {
        //TODO
        //close the pop window and do nothing changed
    }
    */
}

/*
function panelClass(startTime, stopTime, className, classCode) {
    const panelStyle = {
        backgroundColor: 'white',
        position: 'center',
        height: '100px',
        width: '100px',
        zIndex: '10',
    };

    return React.createElement("div", {style: panelStyle},
        React.createElement("div", {},
            "Start Time: ",
            React.createElement(""),
            "\t",
            "Stop Time: ",
            React.createElement("")),
        "\n",
        React.createElement("div", {},
            "Class Name: ",
            React.createElement(""),
            "\t",
            "Class Code",
            React.createElement("")),
        React.createElement("div", {},
            React.createElement(""),
            React.createElement(""))
    )
}           
*/