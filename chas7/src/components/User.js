import { UserContext } from "../App";

// This is the old way of using React Context with prop and components but
// the smart new way with hooks and on hight level to be used React Context for JavaScript is into
// index.js file of the application and also in separate folder in our case we created uttils with his ones User2Context.js

export function User() {
    return(
        <div>

            <UserContext.Consumer>
                {(value) => <h1>Hello User {value} from React Context!</h1>}
            </UserContext.Consumer>
           {/* <h1>Hello user Sanja from React context</h1> */} 
        </div>
    )
}