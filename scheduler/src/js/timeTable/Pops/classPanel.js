import React from 'react';

var moment = require('moment');

export class classPanel extends React.Component {
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

        const panelStyle = {
            //backgroundColor: 'white',
            position: 'center',
            borderTop: '50px',
            height: '100px',
            width: '1500px',
            zIndex: '10',
        };

        const createPanel = () => {
            React.createElement("div", {style: panelStyle},
                //Class information
                React.createElement("div", {}, "Class Name: ",
                    React.createElement("input", {}),
                    "   ",
                    "Class Code: ",
                    React.createElement("input", {}),
                    "   ",
                    "Section: ",
                    React.createElement("input", {})),
                //Time information
                React.createElement("div", {}, "Start Time: ",
                    React.createElement("input", {}),
                    "   ",
                    "Stop Time: ",
                    React.createElement("input", {})),
                //location information
                React.createElement("div", {}, "Location: ",
                    "   ",
                    React.createElement("input", {})),
                React.createElement("button", {type: "button"}, "Save"),
                React.createElement("button", {type: "button"}, "Cancel")
            )
        };

        const passPanel = () => {
            if (this.props.OnOff) {
                return createPanel;
            }
        };

        render();
        {
            return passPanel;
        }
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