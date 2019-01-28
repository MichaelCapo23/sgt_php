import React, {Component, Fragment} from "react";

class List extends Component {

//     makeListContainers = (startingNumber, timesToRun, ArrayToPush) => {
//         startingNumber++;
//         let newItem = (
//             <div key={String.fromCharCode(65 + startingNumber - 1)} className={"collection z-depth-3 col s12 m12 l6 xl4"}>{String.fromCharCode(65 + startingNumber - 1)}
//                 <div className="collection-item">
//                     <div>mike jones 64 64 64 64 64 90</div>
//                     <div>mike jones 64 64 64 64 64 90</div>
//                 </div>
//             </div>
//         );
//         ArrayToPush.push(newItem);
//         if (startingNumber < timesToRun) {
//             this.makeListContainers(startingNumber, timesToRun, ArrayToPush);
//         }
//         return ArrayToPush;
//     }
//
//     render() {
//
//         const containers = this.makeListContainers(0, 26, []);
//
//         return (
//             <Fragment>
//                 <h2 className="center">Student Grade Table</h2>
//                 <div className={"row"}>
//                     {containers}
//                 </div>
//             </Fragment>
//         )
//     }
// }

    makeListContainers = (startingNumber, timesToRun, ArrayToPush) => {
        startingNumber++;
        let newItem = (
            <div key={String.fromCharCode(65 + startingNumber - 1)}
                 className={"collection z-depth-3 col s12 m4"}>{String.fromCharCode(65 + startingNumber - 1)}
                <div className="collection-item">
                    <thead>
                    <tr>
                        <th className={"s4"}>Name</th>
                        <th className={"s4"}>Year</th>
                        <th className={"s4"}>GPA</th>
                    </tr>
                    </thead>
                </div>
            </div>
        )
        ArrayToPush.push(newItem);
        if (startingNumber < timesToRun) {
            this.makeListContainers(startingNumber, timesToRun, ArrayToPush);
        }
        return ArrayToPush;
    }

    render() {

        const containers = this.makeListContainers(0, 26, []);

        return (
            <Fragment>
                <h1 className="center">Student Grade Table</h1>
                <div className={"row"}>
                    {containers}
                </div>
            </Fragment>
        )
    }
}

export default List