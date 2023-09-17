// every component must start with capital letter
// because react sees the smaal letters as html tags
import React from "react";
import { PlaceClass } from "./components/PlaceClass";

// we must export the component so we can use it anywhere
export class AppClass extends React.Component {
    // neka vo nekoj h1 element stoi vasheto ime i prezime
    // a potoa vo h2 neka bide vasheto mesto na zhiveenje

    render() {
        return (
            <div>
                <h2>Class Component</h2>
                <PlaceClass />
            </div>
        );
    }
}