import React from 'react';

const initialState = {
    color: "blue"
};

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    render() {
        return (
            <AppContext.Provider value={{
                color: this.state.color
            }}>
                { this.props.children }
            </AppContext.Provider>
        )
    }
}

export default AppProvider;