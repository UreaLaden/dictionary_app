import React from "react";
import { FontContext } from "../store/dictionary-context";
import EmptyResult from "./EmptyResult";

export class ErrorBoundary extends React.Component{
    static contextType = FontContext;

    constructor(props){
        super(props);
        this.state = {
            hasError:false,
            error:{}
        };
    }

    static getDerivedStateFromError(error){
        console.log("Error");
        console.log(error);
        return {hasError:true,error:error};
    }

    componentDidCatch(error,errorInfo){
        console.table(this.context.errorDetails);
    }

    render(){
        const hasErrorDetails = this.context.errorDetails.title !== undefined;
        if(/*this.state.hasError ||*/ hasErrorDetails){
            // console.table(this.state.error.message);
            // console.table(this.context.errorDetails);
            return <EmptyResult isContextError={hasErrorDetails} traceError={this.state.error.message} />
        }
        return this.props.children;
    }
}